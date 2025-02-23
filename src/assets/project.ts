// Define project data types
interface ProjectImage {
    url: string;
    caption: string;
    featured?: boolean;
}

interface ProjectData {
    remainingCount: number;
    allImages: ProjectImage[];
}

declare global {
    interface Window {
        projectData: ProjectData;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.getElementById('expandGallery') as HTMLButtonElement | null;
    const buttonText = expandButton?.querySelector('.button-text') as HTMLSpanElement | null;
    const additionalImages = document.getElementById('additionalImages') as HTMLDivElement | null;

    if (expandButton && additionalImages && buttonText) {
        expandButton.addEventListener('click', () => {
            const isExpanded = expandButton.getAttribute('aria-expanded') === 'true';
            expandButton.setAttribute('aria-expanded', (!isExpanded).toString());
            additionalImages.classList.toggle('hidden');
            buttonText.textContent = isExpanded ? `Show More Images (${window.projectData.remainingCount})` : 'Show Less';
        });
    }

    // Image modal functionality
    const modal = document.getElementById('imageModal') as HTMLDivElement;
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    const modalCaption = document.getElementById('modalCaption') as HTMLParagraphElement;
    const modalClose = document.getElementById('modalClose') as HTMLButtonElement;
    const modalPrev = document.getElementById('modalPrev') as HTMLButtonElement;
    const modalNext = document.getElementById('modalNext') as HTMLButtonElement;
    let currentImageIndex = 0;

    function openModal(imageUrl: string, caption: string, index: number): void {
        modal.classList.add('active');
        modalImage.classList.add('loading');
        modalImage.src = imageUrl;
        modalImage.alt = caption;
        modalCaption.textContent = caption;
        currentImageIndex = index;
        document.body.style.overflow = 'hidden';
        updateNavigationButtons();
        updateCounter();
        
        modalImage.onload = () => {
            modalImage.classList.remove('loading');
        };
    }

    function closeModal(): void {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function navigateImage(direction: number): void {
        const nextIndex = (currentImageIndex + direction + window.projectData.allImages.length) % window.projectData.allImages.length;
        const image = window.projectData.allImages[nextIndex];
        modalImage.classList.add('loading');
        
        // Preload next image
        const preloadImage = new Image();
        preloadImage.src = image.url;
        
        preloadImage.onload = () => {
            currentImageIndex = nextIndex;
            modalImage.src = image.url;
            modalImage.alt = image.caption;
            modalCaption.textContent = image.caption;
            modalImage.classList.remove('loading');
            updateNavigationButtons();
            updateCounter();
        };
    }

    function updateNavigationButtons(): void {
        modalPrev.style.display = window.projectData.allImages.length > 1 ? 'block' : 'none';
        modalNext.style.display = window.projectData.allImages.length > 1 ? 'block' : 'none';
    }

    function updateCounter(): void {
        const counter = document.querySelector('.modal-counter') || document.createElement('div');
        counter.className = 'modal-counter';
        counter.textContent = `${currentImageIndex + 1} / ${window.projectData.allImages.length}`;
        if (!counter.parentNode) {
            modal.appendChild(counter);
        }
    }

    // Add swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', (e: TouchEvent) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    modal.addEventListener('touchend', (e: TouchEvent) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe(): void {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                // Swipe left, go next
                navigateImage(1);
            } else {
                // Swipe right, go previous
                navigateImage(-1);
            }
        }
    }

    // Event listeners
    document.querySelectorAll<HTMLElement>('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            const imageUrl = item.dataset.image;
            const caption = item.dataset.caption;
            if (imageUrl && caption) {
                openModal(imageUrl, caption, index);
            }
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => navigateImage(-1));
    modalNext.addEventListener('click', () => navigateImage(1));

    modal.addEventListener('click', (e: MouseEvent) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
    });

    // Add loading state handler for gallery images
    document.querySelectorAll<HTMLImageElement>('.gallery-item img').forEach((img) => {
        img.classList.add('loading');
        img.onload = () => {
            img.classList.remove('loading');
            img.parentElement?.classList.remove('loading');
        };
    });
});

// Splash screen handling
const splashScreen = document.querySelector<HTMLDivElement>('.splash-screen');

// Hide splash screen when all content is loaded
window.addEventListener('load', () => {
    splashScreen?.classList.add('hidden');
    setTimeout(() => {
        splashScreen?.remove();
    }, 500); // Remove after transition completes
});

export {};