
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.graphassets.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.inc.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
