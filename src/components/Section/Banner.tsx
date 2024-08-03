import React from "react";

export default function Banner({ title }: any) {
  return (
    <header className="bg-primary text-white py-4 sm:px-36">
      <div className="text-center relative isolate overflow-hidden px-6 py-10 sm:px-10 xl:py-10">
        <p className="text-4xl font-bold tracking-widest text-white sm:text-5xl">
          {title}
        </p>
        
      </div>
    </header>
  );
}
