export interface Sponsor {
    name: string;
    tier: 'platinum' | 'gold' | 'silver' | 'community';
    logo: string;
    url: string;
}

export const sponsors: Sponsor[] = [
    {
        name: "Acme Corp",
        tier: "platinum",
        logo: "/src/assets/placeholder/logo-placeholder.svg",
        url: "https://example.com"
    },
    {
        name: "Globex",
        tier: "gold",
        logo: "/src/assets/placeholder/logo-placeholder.svg",
        url: "https://example.com"
    },
    {
        name: "Soylent Corp",
        tier: "silver",
        logo: "/src/assets/placeholder/logo-placeholder.svg",
        url: "https://example.com"
    }
];
