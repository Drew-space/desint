import Image from "next/image";
import React from "react";
import SocialIcons from "./SocialIcons";
import { footerItems } from "@/data/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-16 lg:pt-24">
      <div
        className="container divide-y divide-neutral-900
                            "
      >
        {/* footer top */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1fr_0.6fr_0.6fr_0.6fr] pb-20   ">
          {/* wrapper */}
          <div className="space-y-4">
            {/* logo */}
            <div className="">
              <span className="inline-block">
                <Image
                  src="/images/logo.svg"
                  alt="footer logo"
                  width={40}
                  height={40}
                />
              </span>
              <p className="text-3xl font-semibold">Dreamzint</p>
            </div>
            <p className="">
              Create beautiful and functional interior spaces that reflect
              modern style, comfort, and timeless design. Our goal is to
              transform ideas into spaces that feel both elegant and truly
              personal.
            </p>
            <SocialIcons />
          </div>
          {/* list */}
          {footerItems.map((item) => (
            <div className="" key={item.id}>
              <p className="text-lg font-semibold"> {item.title} </p>
              <ul className="space-y-2 mt-3">
                {item.list.map((label, index) => (
                  <li key={index}>
                    <a href="#" className="text-neutral-300 hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* footer bottom */}
        <p className="text-center py-4">
          &copy; Copy {new Date().getFullYear()} made by{" "}
          <Link
            href={"https://github.com/Drew-space"}
            className="underline font-semibold"
          >
            Drew
          </Link>
          ❤️ AllRights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
