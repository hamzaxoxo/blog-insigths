import NewPassword from '@/components/Auth/NewPassword'
import { Metadata } from 'next';
import React, { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'New Password',
    description: 'Create a strong new password to secure your account. Follow the guidelines to ensure your password is unique and safe.',
    keywords: ['new password', 'reset password', 'create password', 'account security'],
};

export default function page() {
    return (
        <Suspense>
            <NewPassword />
        </Suspense>
    )
}
