"use client";
import { RiCornerDownRightLine } from "@remixicon/react";
import React from "react";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, ScrollTrigger } from "@/lib/gsap";

const Cta = () => {
  const ctaRef = useRef<HTMLElement | null>(null);
  const bigImgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // text split
      const ctaTextSplit = SplitText.create(".text", {
        type: "words, lines",
        linesClass: "line overflow-hidden",
      });

      const ctsTextSplitT1 = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          // markers: true,
        },
      });

      ctsTextSplitT1.from(ctaTextSplit.words, {
        yPercent: 100,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

      gsap.to(".img-cover", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    {
      scope: ctaRef,
    },
  );
  return (
    <section
      ref={ctaRef}
      className="py-20 h-screen flex flex-col justify-center relative w-full overflow-hidden "
    >
      <div className="container space-y-5 cta-wrapper">
        <h2 className="text-white max-w-4xl text-6xl lg:text-8xl font-semibold w-full pb-1 leading-tight text ">
          Let&lsquo;s work together Get a quote today
        </h2>
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center border-t border-neutral-300 pt-5 space-y-5">
          {/* btn */}
          <button className="bg-neutral-50 px-6 py-3 font-semibold flex items-center justify-center gap hover:bg-neutral-300 transition-colors">
            <span>
              {" "}
              <RiCornerDownRightLine />{" "}
            </span>
            Book a Consoltation
          </button>
          {/* content */}
          <div className="text-white space-y-3 sm:space-y-5 ">
            <p className="max-w-lg text-lg text">
              Transform your space with expert interior design solutions that
              combine style, comfort, and functionality. Let us help bring your
              vision to life with thoughtful planning and professional
              craftsmanship.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* bg image */}
      <div ref={bigImgRef} className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={"/images/cta-img.png"}
          alt="cta image"
          className="img-cover w-full h-[150%] object-cover absolute bottom-0 left-0 block"
        />
      </div>
      {/* ovelay */}
      <div className="bg-neutral-950/45 absolute top-0 h-full w-full -z-10" />
    </section>
  );
};

export default Cta;
