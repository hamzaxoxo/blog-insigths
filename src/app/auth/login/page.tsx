import Login from '@/components/Auth/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Access your account by logging in with your credentials. Secure and quick login to manage your profile, settings, and more.',
    keywords: ['login', 'user login', 'account access', 'user authentication'],
};

const Page = () => {
    return (
        <Login />
    );
}

export default Page;
