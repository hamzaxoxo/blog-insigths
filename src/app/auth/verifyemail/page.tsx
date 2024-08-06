'use client'
import React from "react";
import Lottie from "lottie-react";
import check from '../../../../public/gifs/check.json'
import error from '../../../../public/gifs/error.json'
import Container from "@/components/Container";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import axios from "axios";

export default function Page() {

    const searchParams = useSearchParams()
    const token = searchParams.get('token');
    const [invalid, setInvalid] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        document.title = "Email Verified Successfully | Blog Insigths"
        if (!token) {
            redirect('/');
        }
    }, [token])

    React.useEffect(() => {
        const verifyEmail = async () => {
            try {
                const res = await axios.post('/api/auth/user/verifyemail', { token });
                console.log(res?.data?.message);
                setLoading(false);
            } catch (error: any) {
                console.log(error?.response?.data);
                setInvalid(true);
                setLoading(false);
            }
        };
        if (token) {
            verifyEmail();
        }
    }, [token]);

    return (

        <Container className="py-16 px-4 mx-auto max-w-screen-xl">
            <div className="flex gap-4 justify-center flex-col items-center text-center">
                <div className="w-40">
                    {loading ? (
                        <div className="animate-pulse rounded-full bg-slate-50 h-40 w-40" />
                    ) : invalid ? (
                        <Lottie animationData={error} loop={true} />
                    ) : (
                        <Lottie animationData={check} loop={true} />
                    )}
                </div>
                <h2 className="text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
                    {invalid ? "Email Verification Failed" : "Email Verified Successfully"}
                </h2>
                <p className="font-light text-gray-500 md:text-lg">
                    {invalid ? "There was an error verifying your email. Please try again." : "Your email has been verified successfully. You can now login to your account."}
                </p>

                <Link href={'/auth/login'} className="px-12 py-3 h-[46px] text-lg font-bold leading-6 text-gray-800 bg-amber-200 md:px-5">
                    {invalid ? "Retry" : "Login now"}
                </Link>
            </div>
        </Container>
    );
}