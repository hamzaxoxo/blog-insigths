import Forget from '@/components/Auth/Forget'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Forgot Password',
    description: 'If you have forgotten your password, enter your email to receive a reset link. Easily regain access to your account.',
    keywords: ['forgot password', 'password reset', 'account recovery', 'user authentication, blog insigths'],
};

export default function page() {
    return (
        <Forget />
    )
}
