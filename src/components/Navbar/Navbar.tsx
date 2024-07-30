"use client";
import { GanttChart, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../public/logo.png';
import TopBanner from '../Section/TopBanner';
import { login } from '@/store/authSlice';
// import authService from '@/appwrite/auth';
import AlertBox from '@/utils/AlertBox';
import UserProfile from './UserProfile';
import axios from 'axios';
import instance from '@/service/axios';

const links = [
  { href: '/blogs', label: 'Blogs' },
  { href: '/updates', label: 'Updates' },
  { href: '/contact', label: 'Contact' },
  { href: '/profile', label: 'Profile' },
];


interface User {
  $id: string;
  photo?: string;
  name?: string;
  email?: string;
  emailVerification?: boolean;
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const authSelector = useSelector((state: any) => state.auth.status);
  const [loading, setLoading] = React.useState(true);
  const [emailVerification, setEmailVerification] = React.useState<boolean | null>(false);
  const [userData, setUserData] = React.useState<User | null>(null);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const closeNavbarOnSmallDevices = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', closeNavbarOnSmallDevices);
    return () => {
      window.removeEventListener('resize', closeNavbarOnSmallDevices);
    };
  }, []);

  React.useEffect(() => {
    const getCurrentUser = async () => {
      try {
        setLoading(true);
        const userData: any = await instance.get('/api/auth/user');
        if (userData) {
          setUserData(userData);
          dispatch(login(userData));
          setEmailVerification(userData.emailVerification ?? null);
        } else {
          setEmailVerification(null);
        }
      } catch (err: any) {
        console.error('Error getting user data', err);
      } finally {
        setLoading(false);
      }
    };
    getCurrentUser();
  }, [dispatch]);

  return (
    <div className="border-b">

      <TopBanner />
      <div className="relative flex h-16 items-center justify-between px-8">
        <Link
          className="inline-flex items-center gap-3 text-primary lg:pr-8 active"
          href="/"
          aria-current="page"
        >
          <Image src={logo} alt="AstroSaas" className="h-20 w-20" />
          <p className="font-display text-xl font-extrabold tracking-wide">
            Blog Insights
          </p>
        </Link>
        <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <nav
            className={`fixed top-16 w-4/5 h-full bg-white transform transition-transform duration-500 flex flex-col ${open
              ? 'z-10 right-0 shadow-md translate-x-0 pt-14 text-right gap-4 px-5'
              : '-right-0 translate-x-full md:static md:translate-x-0 md:flex-row md:items-center md:w-auto'
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
                onClick={() => setOpen(false)}
                className={`poppins-font sm:rounded w-full ${open
                  ? 'border-b-[3px] border-primary text-lg font-semibold'
                  : 'py-2 font-medium px-5 text-sm hover:bg-gray-400'
                  }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            {!authSelector ? (
              <Link
                href="/auth/login"
                className="w-full items-center justify-center rounded-md border-2 border-primary bg-primary px-6 py-1 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary lg:w-auto"
              >
                Login
              </Link>
            ) : (
              userData && <UserProfile user={userData} />
            )}
          </nav>
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
