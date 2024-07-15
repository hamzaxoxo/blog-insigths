'use client';

import authService from '@/appwrite/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<null | { name: string }>({ name: '' });
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const currentUser = await authService.getCurrentUser();
                if (!currentUser) {
                    router.push('/');
                } else {
                    setUser({ name: currentUser.name });
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                toast.error('Failed to verify authentication.');
                router.push('/');
            }
        };
        checkAuth();
    }, [router]);
    return (
        <main>
            {user ? children : null}
        </main>
    );
};

export default AuthLayout;
