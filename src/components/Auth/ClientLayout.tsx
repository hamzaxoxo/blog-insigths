"use client";

import authService from "@/appwrite/auth";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Section/Footer";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { Suspense } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup";
  const router = useRouter();
  const searchParams = useSearchParams()

  const userIdFromUrl = searchParams.get('userId');
  const secretFromUrl = searchParams.get('secret');
  // verify email
  React.useEffect(() => {
    if (userIdFromUrl === "" && secretFromUrl === "") {
      router.push('/auth/login');
    }
    const verifyEmail = async () => {
      try {
        if (userIdFromUrl && secretFromUrl) {
          await authService.verifyEmail(userIdFromUrl, secretFromUrl);
          router.push('/');
        }
      } catch (err) {
        console.log(err)
      }
    }
    verifyEmail();
  }, [router, userIdFromUrl, secretFromUrl]);

  return (
    <Suspense>
      {!isAuthPage && <Navbar />}
      {children}
      {/* <Analytics /> */}
      {!isAuthPage && <Footer />}
    </Suspense>
  );
}
