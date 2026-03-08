"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
import { RiCornerDownRightLine } from "@remixicon/react";
// import { title } from "process";

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const titleSplit = SplitText.create(".title", {
      type: "chars, lines",
      smartWrap: true,
      linesClass: "line",
    });
    const textSplit = SplitText.create(".text", {
      type: "words, lines",
      smartWrap: true,
      linesClass: "line",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top center",
      },
    });

    tl.from(titleSplit.chars, {
      yPercent: 100,
      ease: "power2.out",
      duration: 1,
      stagger: 0.05,
    }).from(textSplit.words, {
      yPercent: 100,
      ease: "power2.out",
      duration: 1,
      stagger: 0.01,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-neutral-950 text-white relative min-h-screen bg-no-repeat bg-cover z-20 bg-center flex flex-col bg-[url(/images/hero-img.jpg)] "
    >
      <div className="container flex flex-1 flex-col  justify-between  py-10 hero-wrapper">
        <h1 className="font-semibold max-sm:text-[85px] text-[90px] sm:text-5xl lg:text-[185px] my-auto title ">
          Dreamzint
        </h1>
        {/* Wrapper */}
        <div className="flex flex-col  lg:flex-row lg:items-center md:justify-between  space-y-5">
          <p className=" text lg:max-w-2xl  ">
            {" "}
            Dreamzint crafts elegant interiors that blend comfort,
            functionality, and timeless style, turning your vision into a true
            home.
          </p>
          <button className="bg-neutral-50 text-black px-6 py-3 font-semibold flex items-center justify-center gap hover:bg-neutral-300 transition-colors">
            <span>
              {" "}
              <RiCornerDownRightLine />{" "}
            </span>
            Contact us
          </button>
          {/* <p className="shrink-0 lg:ml-8 text">Scroll down</p> */}
        </div>
      </div>

      {/* for the gradient */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-neutral-950 to-95% -z-10" />
    </section>
  );
};

export default Hero;
