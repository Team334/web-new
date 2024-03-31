export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Team 334",
    description: "The 334th Team in FIRST Robotics Competition",
    navItems: [
        {
            label: "About",
            href: "/about",
            color: "foreground"
        },
        {
            label: "Team",
            href: "/team",
            color: "foreground"
        },
        {
            label: "Blog",
            href: "/blog",
            color: "foreground"
        },
        {
            label: "Sponsors",
            href: "/sponsors",
            color: "danger"
        },
        {
            label: "Donate",
            href: "/donate",
            color: "success"
        },
        {
            label: "FAQ",
            href: "/faq",
            color: "warning"
        }
    ],
    links: {
        github: "https://github.com/Team334",
        instagram: "https://instagram.com/team334",
        donate: "https://bthsalumni.org/donate/",
        youtube: "https://youtube.com"
    },
};
