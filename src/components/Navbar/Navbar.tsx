"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { GanttChart, XIcon } from "lucide-react";
import TopBanner from "../Section/TopBanner";

const links = [
  { href: "/blogs", label: "Blogs" },
  { href: "/profile", label: "Updates" },
  { href: "/contact", label: "Contact" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const closeNavbarOnSmallDevices = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", closeNavbarOnSmallDevices);
    return () => {
      window.removeEventListener("resize", closeNavbarOnSmallDevices);
    };
  }, []);

  return (
    <div className="border-b">
      <TopBanner />
      <div className="relative flex h-16 items-center justify-between px-4 md:px-36">
        <Link
          className="inline-flex items-center gap-3 text-primary lg:pr-8 active"
          href="/"
          aria-current="page"
        >
          <Image src={logo} alt="AstroSaas" className="h-8 w-8" />
          <div className="font-display text-lg font-extrabold tracking-wide flex gap-2">
            <span>Thug</span>
            <span className="hidden sm:block"> of Blogs</span>
          </div>
        </Link>
        <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <nav
            className={`fixed top-16 w-4/5 h-full bg-white transform transition-transform duration-500 flex flex-col ${
              open
                ? "z-10 right-0 shadow-md translate-x-0 pt-14 text-right gap-4 px-5"
                : "-right-0 translate-x-full md:static md:translate-x-0 md:flex-row md:items-center md:w-auto"
            }`}
          >
            {open && (
              <div className="w-fit bg-primary hover:bg-gray-900 text-md rounded text-gray-50 font-medium px-2 py-0.5">
                MENU
              </div>
            )}
            {links.map((link) => (
              <Link
                key={link.href}
                onClick={()=> setOpen(false)}
                className={`poppins-font sm:rounded  w-full ${
                  open
                    ? "border-b-[3px] border-primary text-lg font-semibold"
                    : "py-2 font-medium px-5 text-sm hover:bg-gray-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            title="Login to Create Amazing Blogs"
            className="inline-flex w-full items-center justify-center rounded-xl border-2 border-primary bg-primary px-6 py-2 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary lg:w-auto"
            href="/login"
          >
            Subscribe
          </Link>
          <button
            type="button"
            onClick={handleOpen}
            className="inline-flex items-center justify-center pl-5 text-gray-800 hover:text-primary focus:text-primary focus:outline-none md:hidden z-10"
          >
            {open ? <XIcon /> : <GanttChart />}
          </button>
        </div>
      </div>
    </div>
  );
}
