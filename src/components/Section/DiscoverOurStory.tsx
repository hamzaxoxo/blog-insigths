import * as React from "react";
import Container from "../Container";
import Image from "next/image";
import DiscoverPost from "../../../public/discover.png";
export default function DiscoverOurStory() {
    return (
        <Container className="p-20 flex flex-col items-start text-base font-bold text-gray-800 md:pr-5">
            <div className="flex relative flex-col items-end px-20 pt-32 min-h-[705px] w-[949px] md:pt-24 md:pl-5">
                <Image
                    alt="DiscoverPost"
                    loading="lazy"
                    src={DiscoverPost}
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex  flex-col p-20 mr-0 bg-white w-[706px] md:px-5 absolute -bottom-0 border-black border left-[30rem]">
                    <div className="self-start font-semibold leading-none text-gray-800 uppercase tracking-[3px]">
                        Why we started{" "}
                    </div>
                    <div className="mt-9 text-5xl tracking-tighter leading-[64px] md:w-full md:text-4xl md:leading-[60px]">
                        It started out as a simple idea and evolved into our passion
                    </div>
                    <div className="mt-7 leading-7 text-zinc-500 md:w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip.
                    </div>
                    <div className="gap-3 self-start px-12 py-4 mt-9 text-lg leading-none bg-amber-300 md:px-5">
                        Discover our story &gt;
                    </div>
                </div>
            </div>
        </Container>
    );
}