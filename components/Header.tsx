import { navItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 z-50 bg-linear-to-b from-neutral-900 to-80% ">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-3xl text-white inline-block">
          <Image src={"/images/logo.svg"} alt="logo" height={40} width={40} />
        </Link>
        {/* Menu btn */}
        <button className="relative z-70 bg-transparent border-none cursor-pointer">
          <svg
            viewBox="0 0 12 10"
            className="hamburger"
            height="40px"
            width="40px"
          >
            <path d="M10,2 L2,2" className="bar-1"></path>
            <path d="M2,5 L10,5" className="bar-2"></path>
            <path d="M10,8 L2,8" className="bar-3"></path>
          </svg>
        </button>
        {/* Menu wrapper */}
        <div className="menu fixed top-0 left-0 w-full h-svh  z-50 ">
          <div className=" menu-inner flex items-center h-full px-15">
            {/* Menu bg */}
            <div className="menu-bg absolute top-0 left-0 w-full h-full  z-10">
              {[1, 2, 3].map((span) => (
                <span
                  key={span}
                  className="menu-bg h-[33.334%] block bg-neutral-950 w-full "
                />
              ))}
            </div>

            {/* navbar */}
            <nav className="relative z-10 nav container">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="overflow-hidden transition-transform duration-300 ease-in-out"
                  >
                    <Link
                      href={item.href}
                      className="text-white text-6xl lg:text-7xl uppercase font-medium leading-none hover:translate-x-12.2 inline-block hover:opacity-75 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* socail links */}
            <div className="">
              <ul className="">
                {["Facebook", "Twitter", "Instagram"].map((link) => (
                  <li key={link}>
                    <a href="#" className="">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
