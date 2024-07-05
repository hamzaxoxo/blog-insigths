/* eslint-disable @next/next/no-img-element */
import React from "react";
export default function Author() {
  return (
    <div className="flex items-center justify-between">
      <span className="block text-gray-900 text-sm">4 min read</span>
      <div className="flex align-center gap-2">
        <div className="flex flex-col justify-center">
          <div className="font-semibold text-sm">
            <a href="https://testomat.io/author/tetiana-khomenko/">
              Tetiana Khomenko
            </a>
          </div>
          <span className="text-right text-gray-900 text-xs">June 20, 2022</span>
        </div>

        <div className="flex items-center">
          <a href="https://testomat.io/author/tetiana-khomenko/">
            <img
              alt="Tetiana Khomenko"
              src="https://testomat.io/wp-content/uploads/2022/11/Tetiana-Khomenko-150x150.jpeg"
              className="avatar photo rounded-full border-2 border-white"
              height={36}
              width={36}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
