"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Section/Footer";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { Suspense } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup";


  return (
    <Suspense>
      {!isAuthPage && <Navbar />}
      {children}
      {/* <Analytics /> */}
      {!isAuthPage && <Footer />}
    </Suspense>
  );
}
