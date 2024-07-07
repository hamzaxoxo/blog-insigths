import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pages = [
        { name: "Privacy Policy", path: "privacy-policy" },
        { name: "Terms of Service", path: "terms-of-service" },
        { name: "DMCA", path: "dmca" },
        { name: "Contact", path: "contact" },
        { name: "About", path: "about" }
    ];

    return pages.map((page) => ({
        url:`${process.env.NEXT_BASE_URL}/${page.path}`,
        lastModified: new Date(),
    }));
}
