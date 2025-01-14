"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="sticky top-0 z-50 mx-auto flex flex-wrap items-center justify-between p-2 bg-trueGray-100 dark:bg-trueGray-900 bg-opacity-30 backdrop-blur-lg">
      {/* Logo  */}
      <Link href="/">
        <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100 pl-2">
          <Image
            src="/img/logo1.png"
            width={72}
            height={32}
            alt="I"
            className="max-w-full h-auto" // Agar logo responsif
          />
        </span>
      </Link>

      {/* get started  */}
      <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
        <ThemeChanger />
        <div className="hidden mr-3 lg:flex nav__item">
          <Link
            target="_blank"
            href="https://wa.me/+6285810644289"
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
              className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700 top-0"
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
            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
              <>
                {[
                  { href: "/about", label: "About" },
                  { href: "/web-services", label: "Services" },
                  { href: "/projects", label: "Projects" },
                  { href: "/blog", label: "Blog" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none ${pathname === item.href ? 'text-indigo-600' : 'text-gray-500'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  target="_blank"
                  href="https://wa.me/+6285810644289"
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
      <div className="hidden lg:flex lg:gap-x-14 top-0">
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="/about"
        >
          About
          <span className={`absolute -bottom-0 left-0 w-0 h-1 rounded-lg ${pathname === '/about' ? 'bg-indigo-600 w-full' : 'bg-indigo-600 transition-all group-hover:w-full'
            }`}></span>
        </Link>
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="/web-services"
        >
          Services
          <span className={`absolute -bottom-0 left-0 w-0 h-1 rounded-lg ${pathname === '/web-services' ? 'bg-indigo-600 w-full' : 'bg-indigo-600 transition-all group-hover:w-full'
            }`}></span>
        </Link>
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="/projects"
        >
          Projects
          <span className={`absolute -bottom-0 left-0 w-0 h-1 rounded-lg ${pathname === '/projects' ? 'bg-indigo-600 w-full' : 'bg-indigo-600 transition-all group-hover:w-full'
            }`}></span>
        </Link>
        <Link
          className="text-sm text-gray-900 dark:text-gray-100 font-semibold leading-6 relative group"
          href="/blog"
        >
          Blog
          <span className={`absolute -bottom-0 left-0 w-0 h-1 rounded-lg ${pathname === '/blog' ? 'bg-indigo-600 w-full' : 'bg-indigo-600 transition-all group-hover:w-full'
            }`}></span>
        </Link>
      </div>
    </nav>
  );
};
