'use client';

import { usePathname } from "next/navigation";
import React from "react";
interface BannerProps {
  title?: string;
  updated?: string;
}
export default function Banner({ title, updated }: BannerProps) {
  const path = usePathname();
  return (
    <header className="bg-pinkish text-white py-4 sm:px-36">
      <div className="text-center relative isolate overflow-hidden px-6 py-10 sm:px-10 xl:py-10">
        <p className="text-4xl font-bold tracking-widest text-secondary space-y-2 sm:text-5xl">
          {title}
        </p>
        {
          path === "/contact" ? (
            <p className="text-[16px] font-normal tracking-widest opacity-50">
              Get in touch with us
            </p>
          ) : path === "/about" ? (
            <p className="text-[16px] font-normal tracking-widest opacity-50">
              Know more about us
            </p>
          ) : (
            <p className="text-[16px] font-normal tracking-widest opacity-50">
              Last updated on {updated}
            </p>
          )
        }
      </div>
    </header>
  );
}
