import { useAppDispatch, useAppSelector } from '@/store/store';
import Logo from './Logo';
import UserProfile from './UserProfile';
import React from 'react';
import { fetchUser } from '../user/getUser';
import Container from '../Container';
import Link from 'next/link';
const AddBlogNavbar = () => {
    const [loading, setLoading] = React.useState(true);
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state?.users?.user);
    React.useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchUser());
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);
    return (
        <Container className="px-10 flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
                <Logo />
                <span className="text-sm text-gray-600">Draft in {user?.fullName}</span>
                <span className="text-sm text-gray-500">Saved</span>
            </div>
            <div className="flex items-center space-x-4">
                <Link href={'#'} className="bg-green-600 text-white px-4 py-1 rounded-full">
                    Publish
                </Link>
                {loading ? (
                    <div className="animate-pulse rounded-full bg-slate-700 h-10 w-10" />
                ) : (
                    user ? <UserProfile dispatch={dispatch} user={user} /> : ""
                )}
            </div>
        </Container>
    );
};

export default AddBlogNavbar;
