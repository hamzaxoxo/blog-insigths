
import Profile from '@/components/Profile/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'User Profile',
    description: 'View and update your profile information including your full name and email address.',
    keywords: ['User Profile', 'Update Profile', 'Account Settings', 'MyApp'],
    openGraph: {
        title: 'User Profile | MyApp',
        description: 'View and update your profile information including your full name and email address.',
        url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/profile`,
        siteName: 'Blog Insigths',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'MyApp Profile Image',
            },
        ],
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'User Profile | Blog Insigths',
        description: 'View and update your profile information including your full name and email address.',
        images: ['/logo.png'],
        site: '@BlogInsigths',
    },
};
export default function page() {

    return (
        <Profile />
    )
}
