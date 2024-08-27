export interface NavbarProps {
    navLinks: {
        label: string;
        href: string;
    }[];
}

export const navLinks: NavbarProps['navLinks'] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
];
