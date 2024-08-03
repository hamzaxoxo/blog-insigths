
import Image from "next/image";
import React from "react";
import { FootersocialLinks } from "../defaultData";

interface AuthorProps {
  image: string;
  name: string;
  role: string;
}


export default function Author({ image, name, role }: AuthorProps) {
  return (
    <div className="flex flex-col leading-none">
      <button className="flex flex-col items-center px-14 py-10 w-full h-fit bg-zinc-100 hover:bg-orange-50">
        <Image
          alt={name}
          loading="lazy"
          src={image}
          className="object-contain w-32 max-w-full rounded-full aspect-square"
          width={128}
          height={128}
        />
        <div className="mt-5 text-2xl font-bold tracking-tighter text-gray-800">
          {name}
        </div>
        <div className="self-stretch mt-1.5 text-sm text-center text-zinc-500">
          {role}
        </div>
        <div className="flex gap-5 mt-5">
          {
            FootersocialLinks.map((item) => (
              <a key={item.name} href={item.url}>
                <item.icon />
              </a>
            ))
          }
        </div>
      </button>
    </div>
  );
}


