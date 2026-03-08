"use client";

import { processItems } from "@/data/data";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, ScrollTrigger } from "@/lib/gsap";

const OurProcess = () => {
  const processRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const processTextSplit = SplitText.create(".text", {
        type: "words, lines",
        linesClass: "line",
      });

      const processTextSplitT1 = gsap.timeline({
        scrollTrigger: {
          trigger: processRef.current,
          start: "top center",
          //   markers: true,
        },
      });

      processTextSplitT1.from(processTextSplit.words, {
        yPercent: 100,
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.01,
      });

      //card animation

      const cards = gsap.utils.toArray<HTMLDivElement>(".card");
      const spacer = 20;
      const minScale = 0.8;

      const distributor = gsap.utils.distribute({
        base: minScale,
        amount: 0.2,
      });

      cards.forEach((card, index) => {
        const scaleVal = distributor(index, cards[index], cards);

        const tween = gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top",
            scrub: true,
            invalidateOnRefresh: true,
            markers: true,
          },
          ease: "none",
          scale: scaleVal,
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer} top`,
          endTrigger: ".cards",
          end: `bottom top+=${200 + cards.length * spacer}`,
          pin: true,
          pinSpacing: false,
          id: "pin",
          invalidateOnRefresh: true,
          markers: true,
        });
      });
    },
    { scope: processRef },
  );

  return (
    <section ref={processRef} className="section text-blue-500  ">
      <div className="container">
        {/*title*/}
        <div className="flex flex-col gap-3 lg:flex-row">
          <p className="text ">Our Process</p>
          <h2 className="text section-title max-w-2xl">
            Our Porfolio showcase the diversity of our creativity
          </h2>
        </div>
        {/* wrapper */}
        <div className="mx-auto max-w-3/4 space-y-10 cards mt-20 lg:mt-24">
          {processItems.map((item) => (
            // card
            <div
              key={item.id}
              className="card bg-neutral-900 space-y-3 text-neutral-50 p-5 sm:p-10 lg:px-16 border mb-6 rounded-xl"
            >
              <span className="text-4xl sm:text-5xl font-semibold inline-block">
                0{item.id}{" "}
              </span>
              <h2 className="text-2xl">{item.title} </h2>
              <p> {item.text} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
