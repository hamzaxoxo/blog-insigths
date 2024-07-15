
import { useDispatch } from 'react-redux';
import React from 'react';
import authService from '@/appwrite/auth';
import { login, logout } from '@/store/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    }, [dispatch]);
};
