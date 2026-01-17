export const siteConfig = {
    name: "Event Name 2026",
    description: "Join us for an amazing event with industry leaders, workshops, and networking.",
    date: "January 16, 2026",
    location: "City, Country",
    venue: "Convention Center",
    organizer: "Event Organizer Name",
    contactRegister: "/register", // Internal route
    social: {
        twitter: "https://twitter.com/example",
        linkedin: "https://linkedin.com/company/example",
        instagram: "https://instagram.com/example",
    },
    analytics: {
        enable: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
        googleId: "", // Set via env or leave blank
    }
}
