"use client";

import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// export const metadata = {
//   title: "CPG - ihSakib",
// };
export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("handleClickOutside");
      if (
        !menuRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <html lang="en">
      <head>
        <title>CPG</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body className="flex flex-col min-h-svh">
        <header className="bg-white border-b border-neutral-200">
          <nav className=" mx-auto px-6 py-3 md:px-10 lg:px-20 flex justify-between items-center">
            {/**website logo */}
            <Link href="/">
              {" "}
              <img
                src="./site_logo.png"
                alt="Site Logo"
                className="h-10 sm:h-11 md:h-12"
              />
            </Link>

            {/***desktop menu*/}
            <ul className="space-x-6  hidden sm:flex">
              <li>
                <Link href="/" className="text-blue-500 hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/generate"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Generate
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-500 hover:text-blue-700"
                >
                  About
                </Link>
              </li>
            </ul>

            {/**mobile menu button  */}
            <div className="sm:hidden">
              {" "}
              <i
                ref={btnRef}
                onClick={toggleMenu}
                className="fas fa-bars text-lg "
              ></i>
            </div>
          </nav>

          {/**mobile menu */}
          <div
            ref={menuRef}
            className={`fixed z-[1000] top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out shadow-lg`}
          >
            <ul className="mt-6">
              <li
                onClick={toggleMenu}
                className="  hover:bg-gray-600  border-b border-gray-700"
              >
                <Link className="p-4 pl-6 w-full block" href="/">
                  Home
                </Link>
              </li>

              <li
                onClick={toggleMenu}
                className="  hover:bg-gray-600  border-b border-gray-700"
              >
                <Link className="p-4 pl-6 w-full block" href="/generate">
                  Generate
                </Link>
              </li>

              <li
                onClick={toggleMenu}
                className="  hover:bg-gray-600 border-b border-gray-700"
              >
                <Link className="p-4 pl-6 w-full block" href="/guidelines">
                  Guidelines
                </Link>
              </li>
              <li
                onClick={toggleMenu}
                className=" hover:bg-gray-600 border-b border-gray-700"
              >
                <Link className="p-4 pl-6 w-full block" href="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </header>

        <main className="container mx-auto p-4">{children}</main>
        <footer className="mt-auto">
          <div className=" bg-white text-neutral-600 p-4 border-t border-neutral-100  text-center mt-20 md:mt-32">
            &copy; {new Date().getFullYear()}{" "}
            <a className="text-neutral-700" href="https://github.com/ihSakib">
              ihSakib
            </a>
            . All rights reserved.
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
