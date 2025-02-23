export interface Project {
    id: string;
    title: string;
    description: string;
    detailedDescription: string;
    tags: string[];
    timeline: string;
    role: string;
    challenge: string;
    solution: string;
    results: string;
    featured: boolean;
    links: {
        github: string;
        github2?: string;
        report: string;
        demo: string;
        poster?: string;
    };
    images: {
        url: string;
        caption: string;
        featured: boolean;
    }[];
}

export const projects: Project[] = [
    {
        id: "project-one",
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform built with Next.js and Node.js, featuring real-time inventory management and secure payment processing.",
        detailedDescription: "This full-stack e-commerce solution provides a seamless shopping experience with features like real-time inventory tracking, secure payment processing, and advanced search capabilities. The platform includes an admin dashboard for inventory management, analytics, and order processing.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
        timeline: "January 2023 - June 2023",
        role: "Full Stack Developer",
        challenge: "Building a scalable e-commerce platform that can handle high traffic loads while maintaining real-time inventory accuracy and providing a smooth user experience.",
        solution: "Implemented a microservices architecture using Node.js, with real-time updates via WebSockets and efficient caching strategies. Used PostgreSQL for data persistence and Redis for session management.",
        results: "Successfully launched platform serving 10,000+ monthly users with 99.9% uptime.",
        featured: true,
        links: {
            github: "",
            github2: "",
            report: "",
            poster: "",
            demo: ""
        },
        images: [
            {
                url: "/path-to-image1.png",
                caption: "Dashboard overview showing key metrics",
                featured: true
            },
            {
                url: "/path-to-image2.png",
                caption: "Product management interface",
                featured: false
            }
        ]
    },
    {
        id: "project-two",
        title: "AI Image Recognition App",
        description: "Mobile application using machine learning for real-time object recognition and classification.",
        detailedDescription: "A cross-platform mobile application that uses deep learning models for real-time object recognition. The app can identify objects, faces, and text in images and video streams, with support for multiple languages.",
        tags: ["Flutter", "TensorFlow", "Python", "Firebase", "ML"],
        timeline: "July 2023 - December 2023",
        role: "Lead Mobile Developer",
        challenge: "Implementing efficient ML models on mobile devices while maintaining good performance and battery life.",
        solution: "Used TensorFlow Lite for model optimization and implemented efficient caching strategies for better performance.",
        results: "Achieved 95% accuracy in object recognition with processing time under 100ms per frame.",
        featured: true,
        links: {
            github: "https://github.com/yourusername/ai-image-recognition",
            report: "/path-to-report.pdf",
            demo: "https://demo-url.com"
        },
        images: [
            {
                url: "/path-to-image1.png",
                caption: "Real-time object recognition demo",
                featured: true
            }
        ]
    },
    {
        id: "project-three",
        title: "Task Management System",
        description: "A collaborative task management system with real-time updates and team collaboration features.",
        detailedDescription: "Modern task management solution featuring real-time collaboration, customizable workflows, and detailed analytics. Includes features like time tracking, file sharing, and automated reporting.",
        tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
        timeline: "March 2023 - September 2023",
        role: "Backend Developer",
        challenge: "Creating a scalable real-time system that maintains consistency across multiple users and devices.",
        solution: "Implemented event-driven architecture with Socket.io for real-time updates and MongoDB for flexible data storage.",
        results: "Successfully deployed to 50+ teams with positive feedback on collaboration features.",
        featured: false,
        links: {
            github: "https://github.com/yourusername/task-manager",
            report: "",
            demo: "https://demo-url.com"
        },
        images: [
            {
                url: "/path-to-image1.png",
                caption: "Team dashboard view",
                featured: true
            }
        ]
    }
];