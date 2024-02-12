export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Team 334",
    description: "The 334th Team in FIRST Robotics Competition",
    navItems: [
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Team",
            href: "/team"
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Sponsors",
            href: "/sponsors"
        }

    ],
    links: {
        github: "https://github.com/Team334",
        instagram: "https://instagram.com/team334",
        donate: "https://bthsalumni.org/donate/"
    },
};
