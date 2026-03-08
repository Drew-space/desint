import { blogItems } from "@/data/data";
import Image from "next/image";
import React from "react";
import SocialIcons from "./SocialIcons";

const Blog = () => {
  return (
    <section className=" section pb-24 lg:pb-28 ">
      <div className="container">
        {/* title */}
        <h1 className="section-title max-w-sm">Browse our news & articles</h1>

        {/* wrapper */}
        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          {/* content */}
          <div className="space-y-4 flex flex-col">
            <h3 className="text text-3xl font-semibold lg:text-4xl">
              12 Expert Tips for Choosing the Perfect Solar System for Your Home
            </h3>
            <p className="">
              We provide reliable solar installation services designed to help
              homes and businesses reduce energy costs and embrace clean,
              renewable power. Our experienced team ensures every system is
              carefully planned and installed to deliver long-term efficiency
              and sustainability.
            </p>
            <p className=""> Design - Dec 20, 2026</p>
            <div className="mt-auto">
              <SocialIcons />
            </div>
          </div>
          {/* image */}
          <div className="max-w-max mx-auto">
            <Image
              src="/images/blog-img-1.png"
              alt="blog imge "
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
              <h3 className="text-2xl lg:text-3xl font-bold"> {item.title} </h3>
              <p className="max-w-md"> {item.text} </p>
              <p>{item.date} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
