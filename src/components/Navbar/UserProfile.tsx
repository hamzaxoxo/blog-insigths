import { logout } from '@/actions/auth';
import { LogOut, Sparkles, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import userDefaultImage from '../../../public/user.jpg';

interface UserProfileProps {
    user: any;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm focus:outline-none border-2 border-primary p-1 rounded-full"
            >
                {
                    !user ? (
                        <Skeleton
                            circle
                            height="100%"
                            containerClassName='rounded-full'
                        />) : (
                        <Image
                            className="rounded-full"
                            src={user?.photo || user?.image || userDefaultImage}
                            alt="User photo"
                            width={35}
                            height={35}
                        />
                    )
                }
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div>
                        <div className="rounded-t-md bg-amber-200 block px-4 py-2 text-sm text-gray-800"
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
                            onClick={async () => {
                                await logout();
                                setIsOpen(!isOpen)
                                window.location.reload();
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
