'use client'
import { ArrowRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';



export default function NewPassword() {
    const [loading, setLoading] = React.useState(false);
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const router = useRouter();
    const searchParams = useSearchParams()

    const userIdFromUrl = searchParams.get('userId');
    const secretFromUrl = searchParams.get('secret');

    const handleChangePass = async (e: any) => {
        e.preventDefault();

        if (newPassword === "" || confirmPassword === "") {
            toast.error("Fields Can't be Empty");
        } else if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
        } else {
            try {
                setLoading(true);
                if (userIdFromUrl && secretFromUrl) {
                    
                }
                router.push('/')

            } catch (err: any) {
                const errorMessage = err?.code;
                console.log(errorMessage)
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 overflow-hidden">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Reseting Your Email</h1>
                <p className="mt-2 text-sm text-gray-600">Please check your inbox for a verification link to complete your registration.</p>

                <form className="mt-8">
                    <div className="space-y-5">
                        {/* New Password */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    New Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="form-inputs"
                                    type="password"
                                    placeholder="New Password"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        {/* Confirm Password */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="form-inputs"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={handleChangePass}
                                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                disabled={loading}
                            >
                                {
                                    loading ?
                                        <ClipLoader
                                            size={23}
                                            color="#fff"
                                        /> :
                                        <>Update <ArrowRight className="ml-2" size={16} /></>
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
