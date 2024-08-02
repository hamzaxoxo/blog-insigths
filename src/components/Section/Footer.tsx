

import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaDribbble, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from '../../../public/logo.png';
import Container from '../Container';

export default function Footer() {

  const resourceLink = [
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Signup",
      path: "/auth/signup",
    },
    {
      name: "Login",
      path: "/auth/login",
    },
  ]

  const legalLinks = [
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms of Service",
      path: "/terms-of-use",
    },
    {
      name: "Disclaimer",
      path: "/disclaimer",
    },
    {
      name: "DMCA",
      path: "/dmca",
    },
  ]

  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "#",
      icon: FaFacebookF,
    },
    {
      name: "Discord",
      url: "#",
      icon: FaDiscord,
    },
    {
      name: "Twitter",
      url: "#",
      icon: FaTwitter,
    },
    {
      name: "GitHub",
      url: "#",
      icon: FaGithub,
    },
    {
      name: "Dribbble",
      url: "#",
      icon: FaDribbble,
    },
  ];

  return (
    <div className='bg-[#232536] py-10'>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-5 justify-between w-full text-base leading-7 text-white max-md:max-w-full">
            <Link
              className="inline-flex items-center gap-3 text-primary lg:pr-8 active"
              href="/"
              aria-current="page"
            >
              <Image src={logo} alt="logo" className="w-40" />
            </Link>
            <div className="flex gap-5 my-auto max-md:flex-wrap">
              <div>Home</div>
              <div>Blog</div>
              <div>About us</div>
              <div>Contact us</div>
              <div className="flex-auto">Privacy Policy</div>
            </div>
          </div>
          <div className="px-16 py-20 mt-14 max-md:px-5 max-md:mt-10 max-md:max-w-full bg-[#2e3040]">
            <div className="flex gap-5 flex-col">
              <div className="text-4xl font-bold tracking-tighter leading-10 text-white flex flex-col sm:w-6/12 w-full ">
                Subscribe to our news letter to get latest updates and news
              </div>
              <div className="flex flex-col w-full gap-5 mt-1">
                <input className="w-full px-6 py-2 text-base leading-7 border border-solid border-neutral-600 text-zinc-500 max-md:px-5" placeholder="Enter your Email" />
                <button className="px-12 py-4 text-lg font-bold leading-6 text-gray-800 whitespace-nowrap bg-amber-300 max-md:px-5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-14 text-base leading-7 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col">
              <div>368 Paris Hill Ave.Brooklyn</div>
              <div className="mt-4">Hello@bloginsigths.com 020 7993 2905</div>
            </div>
            <div className="flex gap-5">
              {
                socialMediaLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a key={index} href={link.url} className="text-white">
                      <Icon size={20} />
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}