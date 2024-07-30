'use client';
import { SendHorizontal } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';
import userDefaultImage from '../../../public/logo.png';
import ProfileSkeleton from '@/components/Profile/ProfileSkeleton';
// import authService from '@/appwrite/auth';

const Profile = () => {
    const [email, setEmail] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [emailVerification, setEmailVerification] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [isLoadingUserData, setIsLoadingUserData] = React.useState(false);

    React.useEffect(() => {
        const getUser = async () => {
            try {
                const res = await authService.getCurrentUser();
                setFullName(res?.name || '');
                setEmail(res?.email || '');
                setEmailVerification(res?.emailVerification || false);
            } catch (error) {
                console.error('Error fetching user:', error);
                toast.error('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoadingUserData(true);
        try {
            await authService.updateUser(fullName);
            toast.success('Profile updated successfully.');
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile.');
        } finally {
            setIsLoadingUserData(false);
        }
    };

    return (
        <div className="p-6 flex items-center justify-center mt-20">
            <div className="container max-w-screen-lg mx-auto py-20">
                {loading ? (
                    <ProfileSkeleton />
                ) : (
                    <form className="mt-10 px-10" onSubmit={handleSubmit}>
                        <div className="flex justify-center items-center relative -top-20">
                            <Image
                                className="shadow-lg absolute border-2 border-primary w-40 h-40 rounded-full object-cover"
                                src={userDefaultImage}
                                alt={fullName}
                            />
                        </div>
                        <div className="mt-10 space-y-5">
                            <div className="flex flex-col gap-5 sm:flex sm:flex-row">
                                {/* Full Name */}
                                <div className="w-full">
                                    <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                                        Full Name{ }
                                    </label>

                                    <div className="mt-2">
                                        <input
                                            id="fullName"
                                            className="form-inputs"
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="w-full">
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        Email{" "}
                                    </label>
                                    <span className={`
                                px-2 py-1 text-xs font-semibold rounded-full
                                ${emailVerification ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                            `}>{emailVerification ? 'Verified' : 'Unverified'}</span>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            className="form-inputs"
                                            type="email"
                                            value={email}
                                            disabled
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                disabled={isLoadingUserData}
                            >
                                {isLoadingUserData ? (
                                    <ClipLoader color="white" size={24} />
                                ) : (
                                    <>
                                        Update Profile
                                        <SendHorizontal className="ml-2" size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Profile;
