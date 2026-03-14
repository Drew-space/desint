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
        // markers: true,
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
              Choosing the perfect color palette for your home can completely
              transform the space. From bold accent walls to subtle neutral
              tones, the right colors reflect your personality, create the
              desired mood, and enhance the overall design. Learn expert tips to
              balance shades, textures, and lighting for a harmonious and
              inviting home environment.
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
