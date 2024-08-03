import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';
import Container from '../Container';
import { NavbarProps } from '../defaultData/NavLinks';
import { legalLinks, socialMediaLinks } from '../defaultData/SocialLinks';

export default function Footer() {

  const navLinks: NavbarProps['navLinks'] = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/sitemap.xml", label: "Sitemap" },
  ];
  return (
    <div className='bg-[#232536] px-5 py-10'>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex md:flex-row flex-col gap-5 justify-between w-full text-base leading-7 text-white md:w-full">
            <Link href="/" >
              <Image src={logo} alt="logo" className="w-40" />
            </Link>
            <ul className="list-outside flex gap-5 my-auto flex-wrap">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="px-5 text-[16px] font-montserrat leading-normal text-gray-50">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="relative group">
                <div className="flex items-center gap-2  pb-2">
                  <button className="text-[16px] leading-normal text-gray-50">
                    Legal Links
                  </button>
                  <ChevronDown size={20} />
                </div>
                <div className="invisible absolute -sm:left-64 md:right-10 z-50 w-48 flex flex-col bg-amber-200 text-gray-800 group-hover:visible rounded-md">
                  {legalLinks.map((link) => (
                    <Link key={link.name} href={link.path} className="block py-2 pl-2 font-semibold text-gray-500 hover:bg-amber-100 rounded-md hover:text-seconday">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <div className="px-6 py-20 mt-14 md:mt-10 bg-[#2e3040]">
            <div className='flex lg:flex-row flex-col gap-10 justify-between items-center'>

              <div className="leading-10 text-4xl sm:text-[40px] max-w-2xl font-bold text-white text-center md:text-center lg:text-left">
                Subscribe to our newsletter to get the latest updates and news
              </div>
              <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col items-center gap-4">
                <input className="bg-transparent sm:w-[300px] w-full px-4 py-3 text-base leading-7 border border-neutral-600 text-zinc-500 md:px-5" placeholder="Enter your Email" />
                <button className="xl:w-[179px] lg:w-full w-full px-8 py-3 text-lg font-bold leading-6 text-gray-800 whitespace-nowrap bg-amber-300 hover:bg-amber-400 md:px-5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>


          <div className="flex gap-5 justify-between mt-14 text-base leading-7 text-white flex-wrap md:mt-10 md:w-full">
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