import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { FootersocialLinks } from "../defaultData";
export default function Footer() {
  const footerLinks = [
    {
      name: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      name: "Terms of Service",
      link: "terms-of-use",
    },
    {
      name: "DMCA",
      link: "dmca",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact",
    },
  ]
  return (
    <section className="z-0 overflow-hidden bg-gray-200 py-8 relative bottom-0 w-full">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center sm:justify-between justify-center">
          <div className="w-auto p-8">
            <div className="inline-flex items-center">
              <Image width={80} height={80} src={logo} alt="logo" />
              <div>
                <p className="ml-2 font-display text-xl font-extrabold tracking-wide">
                  Blog Insigths
                </p>
                <span className="block text-sm text-gray-700 sm:text-center">
                  © {new Date().getFullYear()}{" "}
                  <a href="https://github.com/hamzadevlpr" className="underline" target="_blank">
                    @hamzadevelpr
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center justify-center">
              {
                footerLinks.map((link, index) => (
                  <li key={index} className="p-5">
                    <Link
                      className="font-medium text-gray-600 hover:underline"
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              {
                FootersocialLinks.map((link) => {
                  return (
                    <div key={link.name} className="w-auto p-1.5">
                      <a href={link.url} className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                        <link.icon />
                      </a>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
