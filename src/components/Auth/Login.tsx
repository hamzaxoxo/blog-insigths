'use client'
import authService from '@/appwrite/auth';
import { login } from '@/store/authSlice';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import googleIcon from '../../../public/google-logo.png';
import CoverPage from './CoverPage';

export default function Login() {

    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [googleLoading, setGoogleLoading] = React.useState(false);
    const [password, setPassword] = React.useState('');

    const dispatch = useDispatch();
    const router = useRouter();
    React.useEffect(() => {
        const checkUser = async () => {
            const currentUser = await authService.getCurrentUser();
            if (currentUser) {
                router.push('/');
            }
        };
        checkUser();
    }, [router]);
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (email === "" || password === "") {
            toast.error("Fields Can't be Empty");
        } else {
            try {
                setLoading(true);
                const session = await authService.login({
                    email: email,
                    password: password,
                });
                if (session) {
                    const userData = await authService.getCurrentUser();
                    if (userData) {
                        dispatch(login({ userData }))
                        router.push('/')
                    }
                }

                toast.success("Logged In Successfully");
            } catch (err: any) {
                const errorMessage = err?.message;
                toast.error(errorMessage)
            } finally {
                setLoading(false);
            }
        }
    }
    const handleGoogleLogin = async () => {
        setGoogleLoading(true);
        console.log("Clicked");
        await authService.googleLogin()
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setGoogleLoading(false);
            })
    }
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* left side */}
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24  h-screen overflow-hidden">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign In</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/auth/signup"
                                title=""
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="space-y-5">
                                {/* Email */}
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="form-inputs"
                                            type="email"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                {/* Password */}
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            Password
                                        </label>
                                        <Link
                                            href="/auth/forget"
                                            title=""
                                            className="text-sm font-semibold text-black hover:underline"
                                        > Forgot password?
                                        </Link>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="form-inputs"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    {
                                        loading ?
                                            <ClipLoader color='#fff' size={23} /> :
                                            <>Sign in <ArrowRight className="ml-2" size={16} /></>
                                    }
                                </button>
                            </div>
                        </form>

                        <div>
                            <div className="flex items-center my-6 space-x-2">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <p className="text-sm font-semibold text-gray-400">Or continue with</p>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    onClick={handleGoogleLogin}
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    {
                                        googleLoading ?
                                            <ClipLoader color='#000' size={23} /> :
                                            <>
                                                <span className="mr-2 inline-block">
                                                    <Image src={googleIcon} alt='google-icon' />
                                                </span>
                                                Continue with Google
                                            </>
                                    }

                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* right side */}
                <CoverPage />
            </div>
        </section >
    )
}