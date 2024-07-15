import Link from "next/link";
import {
  FaSearch
} from "react-icons/fa";
import { TopBannersocialLinks } from "../defaultData";
export default function TopBanner() {
  return (
    <header className="bg-primary text-white py-4 px-4">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="hidden md:flex space-x-4 text-sm">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/dmca" className="hover:underline">
            DMCA
          </Link>
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Services
          </Link>
        </div>
        <div className="flex w-full md:w-auto justify-between items-center md:justify-end space-x-6">
          <div className="flex space-x-6">
            {
              TopBannersocialLinks.map((link) => {
                return (
                  <a key={link.name} href={link.url} className="hover:text-gray-400">
                    <link.icon />
                  </a>
                )
              })
            }
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-l border-white h-6"></div>
            <a href="#" className="hover:text-gray-400">
              <FaSearch />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
