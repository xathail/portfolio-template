export interface DetailSection {
    title: string;
    items: string[];
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    details?: DetailSection[];
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    description: string;
    details?: DetailSection[];
}

export const contactInfo = {
    name: "Your Name",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
};

export const heroSection = {
    greeting: "Hi, I'm [Your Name] 👋",
    title: "Software Developer",
    tagline: "I craft digital solutions and bring ideas to life through code."
};

export const bioSection = {
    text: "I'm a passionate software developer dedicated to creating efficient and innovative solutions. With expertise in modern web technologies and a keen eye for detail, I transform complex problems into elegant solutions."
};

export const experiences: Experience[] = [
    {
        role: "Software Developer",
        company: "Company Name",
        period: "2023 - Present",
        description: "Lead development of web applications and software solutions.",
        details: [
            {
                title: "Technologies Used",
                items: [
                    "Frontend: React, TypeScript, Next.js",
                    "Backend: Node.js, Python, PostgreSQL",
                    "Cloud: AWS, Docker, CI/CD",
                    "Tools: Git, Jira, Figma"
                ]
            },
            {
                title: "Key Achievements",
                items: [
                    "Implemented feature X that improved performance by Y%",
                    "Led team of Z developers for project implementation",
                    "Reduced deployment time by implementing automated CI/CD",
                    "Mentored junior developers and conducted code reviews"
                ]
            }
        ]
    },
    {
        role: "Junior Developer",
        company: "Previous Company",
        period: "2021 - 2023",
        description: "Contributed to development of core products and features.",
        details: [
            {
                title: "Technologies Used",
                items: [
                    "Frontend: HTML, CSS, JavaScript",
                    "Backend: Python, MySQL",
                    "Tools: Git, VS Code"
                ]
            }
        ]
    }
];

export const education: Education[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "University Name",
        period: "2019 - 2023",
        description: "Major in Computer Science with focus on Software Engineering",
        details: [
            {
                title: "Key Courses",
                items: [
                    "Data Structures and Algorithms",
                    "Web Development",
                    "Database Systems",
                    "Software Engineering"
                ]
            },
            {
                title: "Projects",
                items: [
                    "Senior Thesis: [Project Name]",
                    "Team Project: [Project Description]",
                    "Research Project: [Topic]"
                ]
            },
            {
                title: "Achievements",
                items: [
                    "Dean's List - All Semesters",
                    "Best Project Award",
                    "Programming Competition Finalist"
                ]
            }
        ]
    }
];