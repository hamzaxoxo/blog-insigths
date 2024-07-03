"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { GanttChart, XIcon } from "lucide-react";

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
  }, []);

  return (
    <div className="relative flex h-16 items-center justify-between px-8 sm:px-20">
      <Link
        className="inline-flex items-center gap-3 text-black lg:pr-8 active"
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
          className={`${
            open
              ? "flex flex-col absolute w-full border top-16 -right-0 shadow-md bg-white"
              : "mx-5 hidden flex-col items-center md:flex md:flex-row"
          }`}
        >
          <Link
            className="py-2 px-5 poppins-font font-medium text-sm sm:rounded hover:bg-gray-400 w-full"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="py-2 px-5 poppins-font font-medium text-sm sm:rounded hover:bg-gray-400 w-full"
            href="/profile"
          >
            Updates
          </Link>
          <Link
            className="py-2 px-5 poppins-font font-medium text-sm sm:rounded hover:bg-gray-400 w-full"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="py-2 px-5 poppins-font font-medium text-sm sm:rounded hover:bg-gray-400 w-full"
            href="/profile"
          >
            Profile
          </Link>
        </nav>
        <Link
          title="Login to Create Amazing Blogs"
          className="w-full items-center justify-center rounded-xl border-2 border-black bg-black px-6 py-1 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
          href="/login"
        >
          Subscribe
        </Link>
        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex items-center justify-center pl-5 text-gray-800 hover:text-black focus:text-black focus:outline-none md:hidden"
        >
          {open ? <XIcon /> : <GanttChart />}
        </button>
      </div>
    </div>
  );
}
