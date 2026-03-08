"use client";

import { blogItems } from "@/data/data";
import Image from "next/image";
import React from "react";
import SocialIcons from "./SocialIcons";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, ScrollTrigger } from "@/lib/gsap";

const Blog = () => {
  const blogRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    // text split

    const blogTextSplit = SplitText.create(".text", {
      type: "words, lines",
      linesClass: "line",
    });

    const blogTextSplitT1 = gsap.timeline({
      scrollTrigger: {
        trigger: blogRef.current,
        start: "top center",
        markers: true,
      },
    });

    blogTextSplitT1.from(blogTextSplit.words, {
      yPercent: 100,
      ease: "power2.inOut",
      duration: 1,
      stagger: 0.01,
    });
  }, {});

  return (
    // <section >
    //   <div className="container">
    //     {/* title */}
    //     <h2 className="section-title max-w-sm text ">
    //       Browse our news & articles
    //     </h2>

    //     {/* wrapper */}
    //     <div className="grid gap-8 lg:grid-cols-2 mt-16">
    //       {/* content */}
    //       <div className="space-y-4 flex flex-col">
    //         <h3 className="text text-3xl font-semibold lg:text-4xl text ">
    //           12 Expert Tips for Choosing the Perfect Solar System for Your Home
    //         </h3>
    //         <p className="text">
    //           We provide reliable solar installation services designed to help
    //           homes and businesses reduce energy costs and embrace clean,
    //           renewable power. Our experienced team ensures every system is
    //           carefully planned and installed to deliver long-term efficiency
    //           and sustainability.
    //         </p>
    //         <p className="text"> Design - Dec 20, 2026</p>
    //         <div className="mt-auto">
    //           <SocialIcons />
    //         </div>
    //       </div>
    //       {/* image */}
    //       <div className="max-w-max mx-auto">
    //         <Image
    //           src="/images/blog-img-1.png"
    //           alt="blog imge "
    //           width={490}
    //           height={343}
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //     </div>
    //     {/* wrapper */}
    //     <div className="grid gap-6 mt-8 border-t border-gray-200 pt-7 lg:grid-cols-2 lg:gap-11">
    //       {blogItems.map((item) => (
    //         <div className="space-y-3" key={item.id}>
    //           <h3 className=" text text-2xl lg:text-3xl font-bold">
    //             {" "}
    //             {item.title}{" "}
    //           </h3>
    //           <p className="max-w-md text "> {item.text} </p>
    //           <p className="text">{item.date} </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section ref={blogRef} className=" section pb-24 lg:pb-28 ">
      <div className="container">
        {/* title */}
        <h2 className="section-title max-w-sm text ">
          Browse our news & articles
        </h2>

        {/* wrapper */}
        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          {/* content */}

          <div className="space-y-4 flex flex-col">
            <h3 className="text text-3xl font-semibold lg:text-4xl text ">
              12 design trick for picking the perfect home and color palatte
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              asperiores accusantium iusto vel modi, non magni magnam libero
              aliquid maiores delectus, ullam molestias itaque? Soluta, laborum
              temporibus? Vitae, quia praesentium?
            </p>
            <p className="text"> Design - Dec 20, 2026</p>{" "}
            <div className="mt-auto">
              <SocialIcons />{" "}
            </div>
          </div>
          {/* image */}
          <div className="w-full max-w-lg mx-auto">
            <Image
              src={"/images/blog-img-1.png"}
              alt="blog image"
              width={490}
              height={343}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* wrapper */}
        <div className="grid gap-6 mt-8 border-t border-gray-200 pt-7 lg:grid-cols-2 lg:gap-11">
          {blogItems.map((item) => (
            <div className="space-y-3" key={item.id}>
              <h3 className=" text text-2xl lg:text-3xl font-bold">
                {" "}
                {item.title}{" "}
              </h3>
              <p className="max-w-md text "> {item.text} </p>
              <p className="text">{item.date} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
