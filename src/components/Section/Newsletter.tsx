import React from "react";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 py-24">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-8 gap-y-16 lg:max-w-none">
          <div className="flex justify-center">
            <div className="max-w-lg lg:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-center">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 text-center">
                Stay up-to-date with our latest articles, tutorials, and reviews by
                subscribing to our newsletter. Never miss a post again! We don't
                spam, just helpful articles to help you grow. Unsubscribe at any
                time.
              </p>
              <div id="mc_embed_signup" className="mt-8">
                <form className="validate flex flex-col justify-center items-center w-full mb-4 md:flex-row md:px-16">
                  <div id="mc_embed_signup_scroll">
                    <div className="md:flex md:justify-between sm:gap-x-4">
                      <div className="mb-4 mx-auto">
                        <input
                          type="email"
                          placeholder="Type your email..."
                          name="EMAIL"
                          className="required inline-flex text-left flex-grow w-full h-12 px-4 sm:mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-4 mx-auto sm:text-center">
                        <button
                          name="subscribe"
                          className="inline-flex items-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-gray-600"
                        >Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-primary opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
          }}
        />
      </div>
    </div >


  );
}
