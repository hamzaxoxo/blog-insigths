import { MetadataRoute } from "next";

async function fetchBlogPosts() {
    return [
        { slug: 'post-title', lastModified: '2024-08-25T12:34:56.789Z' },
        { slug: 'another-post', lastModified: '2024-08-22T12:34:56.789Z' },
    ];
}

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
        { name: "Login", path: "/auth/login" },
        { name: "Sign Up", path: "/auth/signup" },
    ];

    const blogPosts = await fetchBlogPosts();

    // Map static pages
    const staticPages = pages.map((page) => ({
        url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}${page.path}`,
        lastModified: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
    }));

    const dynamicBlogPosts = blogPosts.map((post) => ({
        url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changefreq: 'weekly',
        priority: 0.9,
    }));

    return [...staticPages, ...dynamicBlogPosts];
}
