import { FaDiscord, FaDribbble, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link, SocialMediaLink } from '../Type/Types';


export const resourceLink: Link[] = [
    {
        name: "Blogs",
        path: "/blogs",
    },
    {
        name: "Signup",
        path: "/auth/signup",
    },
    {
        name: "Login",
        path: "/auth/login",
    },
];

export const legalLinks: Link[] = [
    {
        name: "Privacy Policy",
        path: "/privacy-policy",
    },
    {
        name: "Terms of Service",
        path: "/terms-of-use",
    },
    {
        name: "Disclaimer",
        path: "/disclaimer",
    },
    {
        name: "DMCA",
        path: "/dmca",
    },
];

export const socialMediaLinks: SocialMediaLink[] = [
    {
        name: "Facebook",
        url: "#",
        icon: FaFacebookF,
    },
    {
        name: "Discord",
        url: "#",
        icon: FaDiscord,
    },
    {
        name: "Twitter",
        url: "#",
        icon: FaTwitter,
    },
    {
        name: "GitHub",
        url: "#",
        icon: FaGithub,
    },
    {
        name: "Dribbble",
        url: "#",
        icon: FaDribbble,
    },
];
