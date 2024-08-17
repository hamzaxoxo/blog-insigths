'use client';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

export default function Forget() {
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState('');

    const hnadleRequest = async (e: any) => {
        e.preventDefault();

        if (email.trim() === "") {
            toast.error("Fields Can't be Empty");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post('/api/auth/request-password', { email });
            toast.success(res?.data?.message);
            setEmail('')
        } catch (err: any) {
            toast.error(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 overflow-hidden">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h1 className="text-3xl font-bold leading-tight text-black sm:text-3xl">Reset Your Password with Ease!</h1>
                <p className="mt-2 text-sm text-gray-600">Please enter your email to reset access to your password.</p>

                <form className="mt-8" onSubmit={hnadleRequest}>
                    <div className="space-y-5">
                        {/* Email Address */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email" className="text-base font-medium text-gray-900">
                                    Email Address
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="email" className="form-inputs"
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} required
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                disabled={loading}
                            >
                                {loading ? <ClipLoader size={23} color="#fff" /> : "Reset Password"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
