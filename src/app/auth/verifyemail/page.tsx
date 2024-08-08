'use client'
import React from "react";
import Lottie from "lottie-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import check from '../../../../public/gifs/check.json'
import error from '../../../../public/gifs/error.json'
import Container from "@/components/Container";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import axios from "axios";

export default function Page() {

    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [invalid, setInvalid] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        document.title = "Email Verified Successfully | Blog Insights";
        if (!token) {
            redirect('/');
        }
    }, [token]);

    React.useEffect(() => {
        const verifyEmail = async () => {
            try {
                const res = await axios.post('/api/auth/user/verifyemail', { token });
                setLoading(false);
                setTimeout(() => {
                    redirect('/auth/login');
                }, 60000);
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
                        <Skeleton circle={true} height={160} width={160} />
                    ) : invalid ? (
                        <Lottie animationData={error} loop={true} />
                    ) : (
                        <Lottie animationData={check} loop={true} />
                    )}
                </div>
                <h2 className="text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
                    {loading ? <Skeleton width={300} /> : invalid ? "Email Verification Failed" : "Email Verified Successfully"}
                </h2>
                <p className="font-light text-gray-500 md:text-lg">
                    {loading ? <Skeleton width={250} /> : invalid ? "There was an error verifying your email or the token is invalid. Please try again." : "Your email has been verified successfully. You can now login to your account.  You will be redirected to the login page in a minute. If not, click the button below."}
                </p>



                {loading ?
                    (<Skeleton width={150} height={46} />) :
                    (
                        <Link href={'/auth/login'} className="px-12 py-3 h-[46px] text-lg font-bold leading-6 text-gray-800 bg-amber-200 md:px-5">
                            {invalid ? "Retry" : "Login now"}
                        </Link>
                    )
                }
            </div>
        </Container>
    );
}
