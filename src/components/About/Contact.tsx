import React from "react";
import Image from "next/image";
import heroImg from "../../../public/img/hero.png";

const ContactSection = () => {
  return (
    <div className="bg-white dark:bg-trueGray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-12">
        <div className="space-y-6">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-center">
            <h1 className="mx-auto text-5xl font-bold w-min sm:-tracking-normal text-gray-800 dark:text-white sm:text-5xl">
              Let&apos;s Collaborate!
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 mx-auto">
            <div className="mx-auto lg:w-3/4 py-8">
              <Image
                className="rounded-lg w-full sm:-mx-8"
                src={heroImg}
                alt="Project"
              />
            </div>
            <div className="w-full md:w-full h-auto my-auto mx-0 text-xl text-gray-800 shadow-lg dark:bg-indigo-600 rounded-lg">
              <div className="p-10">
                <div className="mb-5 flex justify-stretch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    ></path>
                  </svg>
                  <span className="pl-6">+62 858-1064-4289</span>
                </div>
                <div className="mb-5 flex justify-stretch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                  <span className="pl-6">
                    <a
                      className=""
                      href="mailto:aryundhazza@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      aryundhazza@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex justify-stretch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-28 h-28 -mt-9 sm:w-56 sm:h-56 sm:-mt-20 md:w-25 md:h-25 md:-mt-20 lg:w-20 lg:h-20 lg:-mt-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    ></path>
                  </svg>
                  <span className="pl-6">
                    <a
                      className=""
                      href="https://goo.gl/maps/Tv1ZnK9dhUxDtGkq8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jl. Pepaya V No.71B, RT.3/RW.5, Jagakarsa, Kec. Jagakarsa,
                      Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
