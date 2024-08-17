"use client";

import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from '../Container';
import { navLinks } from '../defaultData/NavLinks';
import Logo from './Logo';
import UserProfile from './UserProfile';
import { User } from '@/store/usersSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';



const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        console.log(response.data.data);
        setUser(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user', error);
        setLoading(false);
        return null;
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='bg-[#232536]'>
      <Container>
        <header>
          <nav className="flex h-[80px] items-center justify-between">
            <Logo />
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
              {loading ? (
                <div className="animate-pulse rounded-full bg-slate-700 h-10 w-10" />
              ) : (
                user ? <UserProfile user={user} /> : <SignInButton color="#fff" />
              )}
            </ul>

            <button
              className="px-5 hidden max-lg:block cursor-pointer text-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RxHamburgerMenu className="text-xl" />
            </button>
          </nav>
        </header>
        {isMenuOpen && (
          <div>
            <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-[#2E3040]">
              <div
                className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer text-gray-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                {loading ? (
                  <div className="animate-pulse rounded-full bg-slate-700 h-20 w-20" />
                ) : (
                  user ? <UserProfile user={user} /> : <SignInButton color="#fff" />
                )}
              </ul>
            </nav>
          </div>
        )}
      </Container>
    </div>
  );
};

function SignInButton({ color }: any) {
  return <Link href={'/auth/login'} className={`px-12 py-3 h-[46px] text-lg font-bold leading-6 text-gray-800 whitespace-nowrap bg-[${color}] md:px-5`}>
    Subscribe
  </Link>;
}

export default Navbar;
