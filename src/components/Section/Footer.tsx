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
    <footer className="bg-primary relative">
      <div className="w-full py-6 lg:py-8">
        <div className="py-6 max-w-7xl mx-auto px-10 sm:px-0  md:flex md:justify-between gap-10">
          <div className="text-white">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src={logo}
                className="h-16 w-16 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Blog Insigths
              </span>
            </a>
            <div className="mb-10 space-x-10 sm:ml-20 ml-0 sm:w-[28rem] w-full">
              <p>Discover expert  insights and tutorials on programming, web development, and more at Blog Insights. Explore comprehensive articles to enhance your skills and stay updated with the latest in technology.</p>
            </div>

          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {
                  resourceLink.map((res, index) => {
                    return (
                      <Link
                        key={index}
                        href={res.path}
                        className="hover:underline "
                      >
                        <li className="mb-4">
                          {res.name}
                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {
                  FootersocialLinks.map((link, index) => {
                    return (
                      <Link key={index} href={link.url} className="hover:underline">
                        <li className="mb-4">
                          {link.name}
                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {
                  legalLinks.map((link, index) => {
                    return (
                      <Link key={index} href={link.path} className="hover:underline">
                        <li className="mb-4">
                          {link.name}
                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between">
          <div className="flex w-full sm:flex-row flex-col justify-between items-center">
            <span className="px-10 text-sm text-gray-500 text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Blog Insigths
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {socialMediaLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    className={`text-gray-500 hover:text-gray-900 dark:hover:text-white ${index > 0 ? 'ms-5' : ''}`}
                  >
                    <Icon className="w-4 h-4 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">{link.name} page</span>
                  </a>
                );
              })}

            </div>
          </div>
        </div>
      </div>

     
    </footer>


  );
}
