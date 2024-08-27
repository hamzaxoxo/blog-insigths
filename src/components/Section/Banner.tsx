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
    <header className={`${path === "/contact" ? '' : 'bg-pinkish'}`}>
      <div className="text-center flex gap-4 flex-col px-6 pt-[64px]">
        <p className="text-4xl tracking-widest text-secondary space-y-2 sm:text-5xl">
          {title}
        </p>
        {path === "/about" ? (
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
