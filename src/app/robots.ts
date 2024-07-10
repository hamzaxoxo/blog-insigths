import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                disallow:  ["/admin"],
                allow: '/'
            },
        ],
        sitemap: `${process.env.NEXT_BASE_URL}/sitemap.xml`
    }
}
