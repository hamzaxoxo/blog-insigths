// src/components/ProfileSkeleton.tsx

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProfileSkeleton = () => {
    return (
        <div className="container max-w-screen-lg mx-auto">
            <div className="flex justify-center items-center relative -top-20">
                <Skeleton
                    circle
                    height={160}
                    width={160}
                    className="shadow-lg absolute"
                />
            </div>
            <div className="mt-10 space-y-5">
                <div className="flex flex-col gap-5 sm:flex sm:flex-row">
                    {/* Full Name */}
                    <div className="w-full">
                        <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <Skeleton height={40} />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="w-full">
                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <Skeleton height={40} />
                        </div>
                    </div>
                </div>
                <Skeleton height={48} />
            </div>
        </div>
    );
};

export default ProfileSkeleton;
