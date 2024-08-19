import { AppDispatch } from '@/store/store';
import { User, clearUser } from '@/store/usersSlice';
import axios from 'axios';
import { LogOut, NotebookPen, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import userDefaultImage from '../../../public/avatar.avif';
import { MdCancel } from "react-icons/md";

interface UserProfileProps {
    user: User;
    dispatch: AppDispatch;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, dispatch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const userName = user?.fullName?.toLowerCase() || 'default-username';

    const handleLogOut = async () => {
        setIsOpen(!isOpen)

        try {
            const response = await axios.get('/api/auth/logout');
            dispatch(clearUser());
        } catch (error) {
            console.error('Failed to fetch user', error);
            return null;
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm focus:outline-none">
                <div className='rounded-full'>
                    <Image
                        className="rounded-full"
                        src={user?.photo || userDefaultImage}
                        alt="User photo"
                        width={40}
                        height={40}
                    />
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div>
                        <div className="rounded-t-md bg-amber-200 block px-4 py-2 text-sm text-gray-50">
                            <p className="flex gap-2 font-medium text-gray-800">{user?.fullName || 'Username'}
                                <span className='text-xs font-bold rounded-full' title={
                                    user?.isVerified ? 'Verified' : 'Not verified'
                                }>
                                    {user?.isVerified ? <FaCheckCircle size={16} color='#116a3f' /> : <MdCancel size={16} color='#951f1f' />}
                                </span>
                            </p>
                            <p className="text-xs text-gray-800">{user?.email || 'user@example.com'}</p>
                        </div>
                        <Link
                            href={`/profile/${userName}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <UserIcon className="h-4 w-4 mr-2 inline" aria-hidden="true" />
                            Profile
                        </Link>
                        {user?.isVerified ? (
                            <Link
                                href={`/new-blog`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(!isOpen)}
                                title="Create a new post"
                            >
                                <NotebookPen className="h-4 w-4 mr-2 inline" aria-hidden="true" />
                                Add Post
                            </Link>
                        ) : (
                            <button
                                className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                                title="Verify your email address to create a new post"
                                disabled
                            >
                                <NotebookPen className="h-4 w-4 mr-2 inline" aria-hidden="true" />
                                Add Post
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <LogOut className="h-4 w-4 mr-2 inline" aria-hidden="true" />
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
