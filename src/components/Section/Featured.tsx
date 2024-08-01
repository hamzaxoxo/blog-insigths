import Image from "next/image";
import featuredImage from "../../../public/featuredImage.png";


export default function Featured() {
  return (
    <div className="flex flex-col my-20 max-w-[1400px] mx-auto">
      <div className="flex gap-5 px-5 w-full text-4xl font-bold leading-10 text-gray-800 max-md0:flex-wrap md0:max-w-full">
        <div className="flex-auto tracking-tighter">Featured Post</div>
        <div className="flex-auto tracking-tighter">All Posts</div>
        <div className="my-auto text-base leading-7 text-violet-800">
          View All
        </div>
      </div>
      <div className="mt-11 w-full md0:mt-10 md0:max-w-full">
        <div className="flex gap-5 md0:flex-col">
          <div className="flex flex-col w-[59%] max-md0:ml-0 md0:w-full">
            <div className="flex flex-col grow p-8 font-bold text-gray-800 md0:px-5 md0:mt-8 md0:max-w-full">
              <Image
                alt="featured image"
                loading="lazy"
                src={featuredImage}
                className="w-full aspect-[1.89] object-cover md0:max-w-full"
              />
              <div className="mt-9 text-sm font-medium leading-5 text-violet-800 md0:max-w-full">
                By <span className="text-violet-800">John Doe</span> l May 23,
                2022
              </div>
              <div className="mt-7 text-3xl tracking-tighter leading-10 -md0:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <div className="mt-7 text-base leading-7 text-zinc-500 md0:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </div>
              <div className="self-start px-12 py-4 mt-9 text-lg leading-6 bg-amber-300 max-md0:px-5">
                Read More &gt;
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] md0:ml-0 md0:w-full">
            <div className="flex flex-col grow max-md0:mt-8 max-md0:max-w-full">
              <div className="flex flex-col items-start py-8 pr-20 pl-8 bg-white md0:px-5 md0:max-w-full">
                <div className="text-sm font-medium leading-5 text-violet-800">
                  By <span className="text-violet-800">John Deo</span> l Aug 23,
                  2021{" "}
                </div>
                <div className="mt-4 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </div>
              </div>
              <div className="flex flex-col items-start py-8 pr-20 pl-8 bg-orange-50 md0:px-5 md0:max-w-full">
                <div className="text-sm font-medium leading-5 text-violet-800">
                  By <span className="text-violet-800">John Doe</span> Aug 23,
                  2021{" "}
                </div>
                <div className="mt-4 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </div>
              </div>
              <div className="flex flex-col items-start py-8 pr-20 pl-8 bg-white md0:px-5 md0:max-w-full">
                <div className="text-sm font-medium leading-5 text-violet-800">
                  By <span className="text-violet-800">John Doe</span> Aug 23,
                  2021{" "}
                </div>
                <div className="mt-4 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </div>
              </div>
              <div className="flex flex-col items-start py-8 pr-20 pl-8 bg-white md0:px-5 md0:max-w-full">
                <div className="text-sm font-medium leading-5 text-violet-800">
                  By <span className="text-violet-800">John Doe</span> Aug 23,
                  2021{" "}
                </div>
                <div className="mt-4 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

