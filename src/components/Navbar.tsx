"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  return (
    <nav className="mx-auto flex flex-wrap max-w-7xl items-center justify-between p-6">
      {/* Logo  */}
      <Link href="/">
        <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <span>
            <Image
              src="/img/logo.svg"
              width="32"
              alt="I"
              height="32"
              className="w-8"
            />
          </span>
          <span>Innovarex</span>
        </span>
      </Link>

      {/* get started  */}
      <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
        <ThemeChanger />
        <div className="hidden mr-3 lg:flex nav__item">
          <Link
            target="_blank"
            href="https://wa.me/+6282248289273"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              aria-label="Toggle Menu"
              className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {open && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!open && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </Disclosure.Button>

            {/* <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
              <>
                <Link
                  href="/about"
                  className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  About
                </Link>
                <Link
                  href="/web-service"
                  className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  Services
                </Link>
                <Link
                  href="#projects"
                  className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  Blog
                </Link>
                <Link
                  target="_blank"
                  href="https://wa.me/+6289510678123"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                >
                  Let&apos;s Talk
                </Link>
              </>
            </Disclosure.Panel> */}

            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
              <>
                {[
                  { href: "/about", label: "About" },
                  { href: "/web-service", label: "Services" },
                  { href: "#projects", label: "Projects" },
                  { href: "/blog", label: "Blog" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  target="_blank"
                  href="https://wa.me/+6289510678123"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                >
                  Let&apos;s Talk
                </Link>
              </>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* menu  */}
      <div className="hidden lg:flex lg:gap-x-12">
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="/about"
        >
          About
          <span className="absolute -bottom-0 left-0 w-0 h-1 rounded-lg bg-indigo-600 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="#services"
        >
          Services
          <span className="absolute -bottom-0 left-0 w-0 h-1 rounded-lg bg-indigo-600 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="#projects"
        >
          Projects
          <span className="absolute -bottom-0 left-0 w-0 h-1 rounded-lg bg-indigo-600 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="/blog"
        >
          Blog
          <span className="absolute -bottom-0 left-0 w-0 h-1 rounded-lg bg-indigo-600 transition-all group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
};
