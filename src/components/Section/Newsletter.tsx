import React from "react";

export default function Newsletter() {
  return (
    <div className="flex h-full justify-center items-center pb-20">
      <div className="flex flex-wrap items-center max-w-7xl w-full p-5 mx-auto text-left border border-gray-700 rounded lg:flex-nowrap md:p-20">
        <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
          <h3 className="mb-2 text-3xl sm:text-5xl font-bold text-gray-700">
            Subscribe to Newsletter
          </h3>
          <p className="text-gray-500 ">
            Stay Ahead with Blog Insigths! Join our mailing list for exclusive,
            impactful updates
          </p>
        </div>
        <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
          <form>
            <input type="hidden" name="tags" defaultValue="earlyaccess" />
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 mt-5 text-white text-lg bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap"
              >
                {" "}
                Subscribe{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}
