import Image from "next/image";
import Link from "next/link";
import blog2 from "../../../public/blog2.png";
export default function ThumbRight() {
  return (
    <div className="group mb-5 md:flex sm:flex-row flex flex-col justify-center gap-2 items-center">
      <Image
        className="sm:w-60 rounded-lg object-cover"
        src={blog2}
        alt="blog image"
        width={500}
        height={500}
      />
      <div className="gap-2 md:ml-6 md:mt-0 flex flex-col justify-center">
        <Link
          href="/"
          className="w-fit bg-primary hover:bg-gray-900 text-xs rounded text-gray-50 font-medium px-2 py-0.5 inline-block"
        >
          #playwright
        </Link>
        <Link
          href="#"
          className="sm:text-lg text-xl font-semibold text-gray-900"
        >
          Unlocking Success: Essential Blogging Insights for ...
        </Link>
      </div>
    </div>
  );
}
