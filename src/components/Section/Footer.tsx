import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaDribbble, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from "../../../public/logo.png";
import { FootersocialLinks } from "../defaultData";

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
    <div className="flex flex-col justify-center px-20 py-16 bg-gray-800 max-md:px-5 bg-[#232536]">
      <div className="flex gap-5 justify-between w-full text-base leading-7 text-white max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8ac520fac5539627ac852492b5ec42f80a3dfd288f6b3ec7ccbec330ffbf29?apiKey=0262c9a8fe64483788a22fad731b4e53&&apiKey=0262c9a8fe64483788a22fad731b4e53"
          className="shrink-0 max-w-full aspect-[5] w-[140px]"
        />
        <div className="flex gap-5 my-auto max-md:flex-wrap">
          <div className="grow">Home</div>
          <div>Blog</div>
          <div>About us</div>
          <div>Contact us</div>
          <div className="flex-auto">Privacy Policy</div>
        </div>
      </div>
      <div className="px-16 py-20 mt-14 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full bg-[#2e3040]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full">
              Subscribe to our news letter to get latest updates and news
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 mt-1 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <input className="grow px-6 py-2 text-base leading-7 border border-solid border-neutral-600 text-zinc-500 w-fit max-md:px-5" placeholder="Enter your Email" />
              <div className="px-12 py-4 text-lg font-bold leading-6 text-gray-800 whitespace-nowrap bg-amber-300 max-md:px-5">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-14 text-base leading-7 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col">
          <div>Finstreet 118 2561 Fintown</div>
          <div className="mt-4">Hello@finsweet.com 020 7993 2905</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5da8ba649e34d02f1f6b7e87d148d73d343e368b1c38dfcf41835d4a6eb01ab5?apiKey=0262c9a8fe64483788a22fad731b4e53&&apiKey=0262c9a8fe64483788a22fad731b4e53"
          className="shrink-0 self-start mt-1 w-36 max-w-full aspect-[9.09]"
        />
      </div>
    </div>
  );
}