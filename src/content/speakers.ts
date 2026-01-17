export interface Speaker {
    id: string;
    name: string;
    role: string;
    company: string;
    bio: string;
    image: string; // Path to image in public or assets
    social?: {
        twitter?: string;
        linkedin?: string;
    };
}

export const speakers: Speaker[] = [
    {
        id: "jane-doe",
        name: "Jane Doe",
        role: "CEO",
        company: "Tech Innovators",
        bio: "Jane has over 20 years of experience in the tech industry.",
        image: "/src/assets/placeholder/speaker-placeholder.svg",
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com"
        }
    },
    {
        id: "john-smith",
        name: "John Smith",
        role: "CTO",
        company: "Future Systems",
        bio: "John is a pioneer in cloud computing and AI.",
        image: "/src/assets/placeholder/speaker-placeholder.svg",
        social: {
            linkedin: "https://linkedin.com"
        }
    }
];
