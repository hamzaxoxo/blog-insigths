import * as React from "react";
import Container from "../Container";
import Image from "next/image";
import BuissIcon from '../../../public/icons/buisness.svg'
import StartupIcon from '../../../public/icons/startup.svg'
import EconomyIcon from '../../../public/icons/economy.svg'
import TechIcon from '../../../public/icons/tech.svg'
import Link from "next/link";

interface CategoryProps {
    name: string;
    tagline: string;
    icon: string;
}

const categoryList: CategoryProps[] = [
    { name: "Business", tagline: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: BuissIcon },
    { name: "Startup", tagline: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: StartupIcon },
    { name: "Economy", tagline: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: EconomyIcon },
    { name: "Technology", tagline: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: TechIcon },
];

export default function ChooseCategory({ titile, textAlign }: { titile: string, textAlign: boolean }) {
    return (
        <Container className={`pb-20 px-5 flex flex-col ${textAlign ? "items-center" : "items-start"}`}>
            <h1 className="text-4xl font-bold tracking-tighter leading-none text-gray-800">
                {titile}
            </h1>
            <div className="mt-12 w-full">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        categoryList.map((list, index) => [
                            <Link href={'/'} key={index} className="flex flex-col grow items-start px-8 py-9 border-2 border-zinc-200 hover:bg-[#FFD050]">
                                <div className="bg-orange-50 rounded-md p-3">
                                    <Image
                                        alt="icon"
                                        loading="lazy"
                                        src={list.icon}
                                        className="object-cover w-[28px]"
                                    />
                                </div>
                                <h1 className="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800">
                                    {list.name}
                                </h1>
                                <p className="mt-3 text-base leading-7 text-zinc-500">
                                    {list.tagline}
                                </p>
                            </Link>
                        ])
                    }
                </div>
            </div>
        </Container>
    );
}