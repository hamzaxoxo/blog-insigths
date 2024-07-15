'use client'
import authService from '@/appwrite/auth';
import CoverPage from '@/components/Auth/CoverPage';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';

export default function Signup() {
    const [loading, setLoading] = React.useState(false);
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();
    const router = useRouter();
    const [googleLoading, setGoogleLoading] = React.useState(false);
    
    React.useEffect(() => {
        const checkUser = async () => {
            const currentUser = await authService.getCurrentUser();
            if (currentUser) {
                router.push('/');
            }
        };
        checkUser();
    }, [router]);

    const handleRegister = async (e: any) => {
        e.preventDefault();

        if (fullName === "" || email === "" || password === "") {
            toast.error("Fields Can't be Empty");
        } else {
            try {
                setLoading(true);
                const userData = await authService.createAccount({
                    email: email,
                    password: password,
                    name: fullName
                });
                toast.success("We have sent a verifivcation link to email address");
                router.push('/auth/login')
            } catch (err: any) {
                const errorMessage = err?.code;
                if (errorMessage === "EMAIL_TAKEN") {
                    toast.error("Email already exists");
                    setEmail('');
                } else {
                    toast.error(err?.message);
                }
            } finally {
                setLoading(false);
            }
        }
    };
    const handleGoogleLogin = async () => {
        setGoogleLoading(true);
        await authService.googleLogin()
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setGoogleLoading(false);
            })
    }

    return (
        <section className='relative'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* left side */}
                <CoverPage />
                {/* right side */}
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 h-screen overflow-hidden">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign Up</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link
                                href="/auth/login"
                                title=""
                                className="account-link font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Get into your account
                            </Link>
                        </p>
                        <form className="mt-8">
                            <div className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="form-inputs"
                                            type="text"
                                            placeholder="Full Name"
                                            onChange={(e) => setFullName(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
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
                                <div>
                                    <p className="my-3 text-xs text-gray-600 text-left">
                                        You have agreed our Terms and Condition .
                                    </p>
                                    <button
                                        type="submit"
                                        onClick={handleRegister}
                                        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        disabled={loading}
                                    >
                                        {
                                            loading ?
                                                <ClipLoader
                                                    size={23}
                                                    color="#fff"
                                                /> :
                                                <>Get started <ArrowRight className="ml-2" size={16} /></>
                                        }

                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </section >
    )
}