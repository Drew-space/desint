"use client";
import { servicesItems } from "@/data/data";
import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

const Services = () => {
  const serviceRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const servicesTextSplit = SplitText.create(".text", {
        type: "words, lines",
        linesClass: "line",
      });

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top center",
        },
      });

      aboutTl.from(servicesTextSplit.words, {
        yieldPercent: 100,
        ease: "power2.out",
        duration: 1,
        stagger: 0.01,
      });

      //parallax effect
      const imgs = gsap.utils.toArray(".service-img", serviceRef.current) as HTMLImageElement[];

      imgs.forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    {
      scope: serviceRef,
    },
  );

  return (
    <section ref={serviceRef} className="section pb-20 lg:pb-28 max-sm:text-white">
      <div className="container">
        {/* Title*/}
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <h1 className=" text ">Our Services</h1>
          <p className="section-title  text max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.
          </p>
        </div>

        {/* wrapper */}
        <div className="space-y-16 mt-20 lg:mt-32">
          {servicesItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-start max-w-3xl w-full odd:mx-auto "
            >
              {/* conetent */}
              <div className="absolute top-6 left-0 z-20">
                <p>service 0{item.id}</p>
                <h2 className="text-5xl lg:text-7xl max-w-1/2 w-full font-medium ">
                  {item.title}
                </h2>
              </div>
              {/* image */}
              <div className="max-w-max h-96 ml-auto relative overflow-hidden aspect-16/10 z-10">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={740}
                  height={622}
                  className="service-img absolute bottom-0 left-0 w-full h-[150%] object-cover object-center "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   
  );
};

export default Services;
