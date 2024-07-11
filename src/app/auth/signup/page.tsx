import Signup from '@/components/Auth/Signup';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Create a new account to enjoy personalized features and settings. Join us today and start your journey with our service.',
    keywords: ['sign up', 'create account', 'user registration', 'new account'],
};

const Page = () => {
    return (
        <Signup />
    );
}

export default Page;
