"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Section/Footer";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup" || pathname === '/blogs/add';
  return (
    <Suspense>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </Suspense>
  );
}
