export const fadeUpObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

export function setupScrollAnimation() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, fadeUpObserverOptions);

    animatedElements.forEach(el => observer.observe(el));
}