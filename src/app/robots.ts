import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                disallow: ['/admin', '/private'],
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/'
            },
            {
                userAgent: 'Bingbot',
                disallow: ['/no-bing']
            }
        ],
        sitemap: `${process.env.NEXT_BASE_URL}/sitemap.xml`
    }
}
