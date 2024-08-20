import { LogOut, Sparkles, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import userDefaultImage from '../../../public/user.jpg';
import axios from 'axios';
import { logout } from '@/actions/auth';


interface UserProfileProps {
    user: any;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm focus:outline-none"
            >
                {/* <div className="hidden md:block text-right">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                        ${user?.emailVerification ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {user?.emailVerification ? 'Verified' : 'Unverified'}
                    </span>
                    <div className="font-medium text-gray-700">{user?.fullName || 'Username'}</div>
                    <div className="text-xs text-gray-500">{user?.email || 'user@example.com'}</div>
                </div> */}
                <div className='border-2 border-primary p-1 rounded-full'>
                    <Image
                        className="rounded-full"
                        src={user?.photo || user?.image || userDefaultImage}
                        alt="User photo"
                        width={40}
                        height={40}
                    />
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div>
                        <div className="rounded-t-md bg-gray-400 block px-4 py-2 text-sm text-gray-50"
                        >
                            <Sparkles className="h-4 w-4 mr-2 inline" aria-hidden="true" />
                            <span>
                                {user?.name || 'Username'}
                            </span>
                        </div>
                        <Link
                            href={`/profile/${user?.name}` || '/profile'}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <UserIcon className="h-4 w-4 mr-2 inline" aria-hidden="true" />
                            Profile
                        </Link>
                        <button
                            type="button"
                            onClick={() => {
                                logout()
                                setIsOpen(!isOpen)
                            }
                            }
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
