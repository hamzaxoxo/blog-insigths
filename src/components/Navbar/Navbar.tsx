'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import LoginModal from '../Auth/LoginModal';
import Button from '../Buttons/Button';
import Container from '../Container';
import { navLinks } from '../defaultData/NavLinks';
import Logo from './Logo';
import UserProfile from './UserProfile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  const [open, setOpen] = React.useState(false);
  const onCloseModal = () => setOpen(false);  

  return (
    <div className='bg-[#232536] sticky top-0 z-10'>
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
              {user ? <UserProfile user={user} /> : <SignInButton color="#fff" setOpen={setOpen} />}
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
                {user ? <UserProfile user={user} /> : <SignInButton />}
              </ul>
            </nav>
          )}
      </Container>
      {
        open && <LoginModal open={open} onCloseModal={onCloseModal} />
      }
    </div>
  );
};

function SignInButton({ setOpen }: any) {
  return (
    <Button variant="primary" className='!px-[45px]' onClick={() => setOpen(true)}>
      Subscribe
    </Button>
  );
}

export default Navbar;
