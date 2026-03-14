"use client";

import { navItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useRef } from "react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

const Header = () => {
  const headerRef = useRef(null);
  const menuBtn = useRef<HTMLButtonElement | null>(null);

  //   () => {
  //     const menuBarT1 = gsap.timeline();
  //     menuBarT1
  //       .to(".bar-1", {
  //         duration: 0.5,
  //         attr: { d: "M8,2 L2,8" },
  //         x: 1,
  //         ease: "power2.inOut",
  //       })
  //       .to(
  //         ".bar-2",
  //         {
  //           duration: 0.5,
  //           autoAlpha: 0,
  //         },
  //         "<",
  //       )
  //       .to(
  //         ".bar-3",
  //         {
  //           duration: 0.5,
  //           attr: { d: "M8,8 L2,2" },
  //           x: 1,
  //           ease: "power2.inOut",
  //         },
  //         "<",
  //       );

  //     menuBarT1.reverse();

  //     //nav tl
  //     const navTl = gsap.timeline({ paused: true });
  //     navTl
  //       .to(".menu", {
  //         duration: 0,
  //         display: "block",
  //         ease: "expo.inOut",
  //       })
  //       .from(".menu-bg span", {
  //         duration: 1,
  //         x: "100%",
  //         stagger: 0.1,
  //         ease: "expo.inOut",
  //       })
  //       .from(".link", {
  //         duration: 1,
  //         y: "-100",
  //         stagger: 0.1,
  //         ease: "expo.inOut",
  //       });

  //     navTl.reverse();
  //     const toggleMenu = () => {
  //       menuBarT1.reversed(!menuBarT1.reversed());
  //       navTl.reversed(!navTl.reversed());
  //     };

  //     menuBtn.current?.addEventListener("click", toggleMenu);
  //     return () => {
  //       menuBtn.current?.removeEventListener("click", toggleMenu);
  //     }

  //   },
  //   { scope: headerRef },
  // );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const menuBarT1 = gsap.timeline();

      menuBarT1
        .to(".bar-1", {
          duration: 0.5,
          attr: { d: "M8,2 L2,8" },
          x: 1,
          ease: "power2.inOut",
        })
        .to(
          ".bar-2",
          {
            duration: 0.5,
            autoAlpha: 0,
          },
          "<",
        )
        .to(
          ".bar-3",
          {
            duration: 0.5,
            attr: { d: "M8,8 L2,2" },
            x: 1,
            ease: "power2.inOut",
          },
          "<",
        );

      menuBarT1.reverse();

      // nav timeline
      const navTl = gsap.timeline({ paused: true });
      navTl
        .to(".menu", {
          duration: 0,
          display: "block",
          ease: "expo.inOut",
        })
        .from(".menu-bg span", {
          duration: 1,
          x: "100%",
          stagger: 0.1,
          ease: "expo.inOut",
        })
        .from(
          ".link",
          {
            duration: 1.5,
            y: "100%",
            stagger: 0.2,
            ease: "expo.inOut",
          },
          "-=0.5",
        )
        .from(
          ".social-list",
          {
            duration: 1,
            y: "-100%",
            opacity: 0,
            stagger: 0.1,
            ease: "expo.inOut",
          },
          "-=0.5",
        );

      // .from(".social-list", {
      //   duration: 1,
      //   y: "-100",
      //   opacity: 0,
      //   stagger: 0.1,
      //   ease: "expo.inOut",
      // });

      navTl.reverse();

      const toggleMenu = () => {
        menuBarT1.reversed(!menuBarT1.reversed());
        navTl.reversed(!navTl.reversed());
      };

      menuBtn.current?.addEventListener("click", toggleMenu);

      return () => {
        menuBtn.current?.removeEventListener("click", toggleMenu);
      };
    }, headerRef); // GSAP scope

    return () => ctx.revert(); // cleanup animations
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full py-4 z-50 bg-linear-to-b from-neutral-900 to-80% "
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-3xl text-white inline-block">
          <Image src={"/images/logo.svg"} alt="logo" height={40} width={40} />
        </Link>
        {/* Menu btn */}
        <button
          ref={menuBtn}
          className="relative z-70 bg-transparent border-none cursor-pointer"
        >
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
        <div className="menu fixed top-0 left-0 w-full h-svh  hidden z-50 ">
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
                      className="link text-white text-6xl lg:text-7xl uppercase font-medium leading-none inline-block hover:opacity-75 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* socail links */}
            <div className="absolute bottom-10 left-0 z-10 lg:px-32 px-15">
              <ul className="flex items-center text-white gap-7">
                {["Facebook", "Twitter", "Instagram"].map((link) => (
                  <li key={link} className="social-list">
                    <a href="#" className="uppercase font-medium">
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
