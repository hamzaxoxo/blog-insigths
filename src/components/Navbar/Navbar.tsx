"use client";
import { GanttChart, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../public/logo.png';
import TopBanner from '../Section/TopBanner';
import UserProfile from './UserProfile';
import { RootState, AppDispatch } from '@/store/store';
import { fetchUsers } from '@/store/usersSlice';

const links = [
  { href: '/blogs', label: 'Blogs' },
  { href: '/updates', label: 'Updates' },
  { href: '/contact', label: 'Contact' },
  { href: '/profile', label: 'Profile' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const dispatch: AppDispatch = useDispatch();
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const { users, status, error } = useSelector((state: RootState) => state.users);

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

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
            {authStatus ? (
              users.length > 0 ? (
                <UserProfile user={users[0]} />
              ) : (
                <div>Loading...</div>
              )
            ) : (
              <Link
                href="/auth/login"
                className="w-full items-center justify-center rounded-md border-2 border-primary bg-primary px-6 py-1 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary lg:w-auto"
              >
                Login
              </Link>
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
