"use client";
import Image from 'next/image';
import logo from '../../../public/logo.png';
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import Container from '../Container';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
  ];
  return (
    <div className='bg-[#232536]'>
      <Container>
        <header>
          <nav className="flex h-[80px] items-center justify-between">
            <Link
              className="inline-flex items-center gap-3 text-primary lg:pr-8 active"
              href="/"
              aria-current="page"
            >
              <Image src={logo} alt="AstroSaas" className="w-40" />
            </Link>
            <ul className="list-outside flex justify-center items-center gap-10 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-montserrat leading-normal text-gray-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <button className="px-12 py-2 h-[46px] text-[16px] font-bold leading-6 text-gray-800 whitespace-nowrap bg-gray-50 max-md:px-5">
                Subscribe
              </button>
            </ul>

            <div
              className="hidden max-lg:block cursor-pointer text-gray-50"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-xl" />
            </div>
          </nav>
        </header>
        {isMenuOpen && (
          <div>
            <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-[#2E3040]">
              <div
                className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer text-gray-50"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <AiOutlineClose className="text-4xl" />
              </div>
              <ul className="list-outside lg:hidden flex flex-col items-center justify-center h-full">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[16px] text-gray-50 leading-10"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <button className="px-12 py-2 h-[46px] mt-5 text-lg font-bold leading-6 text-gray-800 whitespace-nowrap bg-amber-300 hover:bg-amber-400 md:px-5">
                  Subscribe
                </button>
              </ul>
            </nav>
          </div>
        )}
      </Container>
    </div>
  );
};
export default Navbar;