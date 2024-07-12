import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pages = [
        { name: "Blog Insigths", path: "" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "DMCA", path: "/dmca" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
        { name: "Disclaimer", path: "/disclaimer" },
        { name: "Blogs", path: "/blogs" },
        { name: "Login", path: "/login" },
        { name: "Sign Up", path: "/signup" },
    ];

    return pages.map((page) => ({
        url: `${process.env.NEXT_PUBLIC_URL}${page.path}`,
        lastModified: "2024-07-06T18:41:18.531Z",
    }));
}
