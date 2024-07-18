import { Menu, Transition } from '@headlessui/react';
import { FileText, LogOut, PlusIcon, SettingsIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import userDefaultImage from '../../../public/user.jpg';
import { Fragment } from 'react';
import Link from 'next/link';
import authService from '@/appwrite/auth';
import { logout } from '@/store/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

interface User {
    $id: string;
    photo?: string;
    name?: string;
    email?: string;
    emailVerification?: boolean;
}

interface ProfileDropDownProps {
    user: User;
}

export default function ProfileDropDown({ user }: ProfileDropDownProps) {
    const userName = user?.name?.toLowerCase() || 'default-username';
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
    }
    const router = useRouter();
    const dispatch = useDispatch();
    
    const handleLogOut = async () => {
        await authService.logout()
            .then(() => {
                dispatch(logout());
                // window.location.reload()
                router.push('/')
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            })
    }


    return (
        <Menu as="div" className="relative ml-3">
            <div className="flex justify-end items-center overflow-hidden">
                <Menu.Button className="flex items-center gap-4 text-sm">
                    <div className="md:hidden flex flex-col justify-end items-end">
                        <div className="flex gap-2">
                            <span className={`
                                px-2 py-1 text-xs font-semibold rounded-full
                                ${user?.emailVerification ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                            `}>{user?.emailVerification ? 'Verified' : 'Unverified'}</span>

                            <span>{user?.name}</span>
                        </div>
                        <span>{user?.email}</span>
                    </div>
                    <div className='border-2 border-primary p-1 animate-pulse sm:h-8 h-8 sm:w-8 w-8 rounded-full flex justify-center items-center'>
                        <Image
                            className="object-cover"
                            src={user?.photo || userDefaultImage}
                            alt="User photo"
                            width={40}
                            height={40}
                        />
                    </div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute -right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                href={`/profile/${userName}`}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'px-4 py-2 text-sm text-gray-700 flex gap-3 items-center'
                                )}
                            >
                                <UserIcon className="h-4 w-4" aria-hidden="true" />
                                {user.name || 'Profile'}
                            </Link>
                        )}
                    </Menu.Item>
                    {/* <Menu.Item>
                        {({ active }) => (
                            <Link
                                href="/blogs/add"
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'px-4 py-2 text-sm text-gray-700 flex gap-3 items-center'
                                )}
                            >
                                <PlusIcon className="h-4 w-4" aria-hidden="true" />
                                Create a blog
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                href="/blogs"
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'px-4 py-2 text-sm text-gray-700 flex gap-3 items-center'
                                )}
                            >
                                <FileText className="h-4 w-4" aria-hidden="true" />
                                My Posts
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                href="/settings"
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'px-4 py-2 text-sm text-gray-700 flex gap-3 items-center'
                                )}
                            >
                                <SettingsIcon className="h-4 w-4" aria-hidden="true" />
                                Settings
                            </Link>
                        )}
                    </Menu.Item> */}
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                type="button"
                                onClick={handleLogOut}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'px-4 py-2 text-sm text-gray-700 flex gap-3 items-center'
                                )}
                            >
                                <LogOut className="h-4 w-4" aria-hidden="true" />
                                Sign out
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu >
    );
}
