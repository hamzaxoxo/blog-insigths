
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'platform-lookaside.fbsbx.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
