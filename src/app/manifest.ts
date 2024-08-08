import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Blog Insigths',
        short_name: 'Blog Insigths',
        description: 'Stay updated with the latest programming tutorials, web development insigths, and expert advice.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f9f9f9',
        theme_color: '#333',
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
