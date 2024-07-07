import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='flex gap-6'>
      <div
        className="pr-4 lg:pr-6 tns-item tns-slide-active"
        id="relatedSlider-item0"
      >
        <div className="mb-12 shadow-sm rounded-xl">
          <a
            className="text-xl font-bold"
            href="https://testomat.io/blog/typescript-best-practices-tools-for-qa-engineer/"
          >
            <Image
              width={360}
              height={192}
              src="https://testomat.io/wp-content/uploads/2024/06/Typescript_best_tools-360x192.png"
              className="rounded-t-xl w-full wp-post-image"
              alt="TypeScript tools for QA"
              decoding="async"
              loading="lazy"
            />{" "}
          </a>
          <div className="py-6 px-6">
            <div className="mb-2 md:min-h-[3.5rem]">
              <a
                href="https://testomat.io/tag/testing-tool/"
                className="bg-indigo-100 hover:bg-indigo-100 text-sm rounded text-indigo-800 font-semibold  px-2 inline-block mr-2 mb-1"
              >
                testing tool
              </a>{" "}
            </div>
            <h5 className="font-bold text-xl mb-3 md:min-h-[3.5rem] lg:min-h-[5.25rem]">
              <a href="https://testomat.io/blog/typescript-best-practices-tools-for-qa-engineer/">
                TypeScript: Best Practices &amp; Tools for QA Engineer
              </a>
            </h5>
            <div className="entry-summary text-base text-grayscale-500 mb-11 md:min-h-[9rem] ">
              <a href="https://testomat.io/blog/typescript-best-practices-tools-for-qa-engineer/">
                <p>
                  JavaScript is a popular programming language commonly used for web
                  development. According to the StackOverflow Survey of 2023, it has
                  been the top-used programming language for 10 years.
                </p>
              </a>
            </div>
            <div className="flex align-center">
              <div className="flex align-center mb-2">
                <div className="mr-3 flex">
                  <div className="min-w-[3rem] ">
                    <a href="https://testomat.io/author/editor/">
                      <Image
                        alt="Olga Sheremeta"
                        src="https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png"
                        className="avatar photo rounded-full border-2 border-white"
                        height={48}
                        width={48}
                      />
                    </a>{" "}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="font-semibold text-sm">
                    <a href="https://testomat.io/author/editor/">Olga Sheremeta</a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <time
                dateTime="2024-07-02T19:57:02+02:00"
                itemProp="datePublished"
                className="text-grayscale-500 text-xs"
              >
                Jul 02, 24
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Page;
