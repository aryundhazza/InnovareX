import React from "react";
import Image from "next/image";
import heroImg from "../../../public/img/hero.png";

const HeroSection = () => {
  return (
    <main>
      <section
        id="hero"
        className="bg-white dark:bg-trueGray-900 pb-8 sm:pb-12 lg:pb-12"
      >
        <div className="overflow-hidden pt-8 sm:pt-12 lg:py-48 lg:relative">
          <div className="mx-auto max-w-md sm:max-w-3xl lg:grid lg:max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800 dark:text-white pb-4">
                  PT Innovarex Solusi Digital
                </h1>
                <div className="flex">
                  <hr className="w-10 h-1 bg-black text-black rounded-lg" />
                  <hr className="w-4 h-1 bg-black text-black rounded-lg opacity-20 ml-1" />
                </div>
                <p className="mt-6 text-xl text-gray-500 dark:text-gray-300">
                  Hadir untuk memberikan solusi digital yang tepat dan efektif
                  bagi bisnis Anda. Kami memahami bahwa setiap bisnis memiliki
                  kebutuhan yang unik
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex gap-4">
                <a
                  href="#profile"
                  className="rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                >
                  Read More
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/+6285810644289"
                  className="rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10 hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-200 dark:bg-indigo-600 lg:left-80 lg:right-0 lg:w-full"></div>
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                  width="404"
                  height="392"
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative pl-4 sm:px-0 lg:pl-12 sm:mx-auto sm:max-w-3xl lg:h-full lg:max-w-none 2xl:pr-[550px] lg:text-center">
                <Image
                  src={heroImg}
                  className="mx-auto md:w-auto lg:w-auto lg:max-w-none lg:h-full h-96"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
