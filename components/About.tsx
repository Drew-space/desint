// "use client";

// import { status } from "@/data/data";
// import { useEffect, useRef } from "react";

// import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

// const About = () => {
//   const aboutRef = useRef<HTMLElement | null>(null);
//   useGSAP(
//     () => {
//       const aboutTextSplit = SplitText.create(".text", {
//         type: "words, lines",
//         linesClass: "line",
//       });

//       const aboutTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: aboutRef.current,
//           start: "top center",
//           markers: true,
//         },
//       });

//       aboutTl.from(aboutTextSplit.words, {
//         yPercent: 100,
//         ease: "power2.out",
//         duration: 1,
//         stagger: 0.01,
//       });
//     },
//     { scope: aboutRef },
//   );
//   return (
//     <section ref={aboutRef} className="py-16 bg-neutral-950 text-neutral-50">
//       <div className="container space-y-8 ">
//         <p className="text max-w-2xl mx-auto text-xl text-center">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque
//           cumque impedit at, illo velit porro. Accusamus illum cumque ipsam
//           porro dolorem, quia perferendis dolorum unde itaque veritatis quam
//           non.
//         </p>
//         {/* status */}
//         <div className="grid gap-8 lg:grid-cols-3 lg:divide-x max-w-max mx-auto">
//           {status.map((item) => (
//             <div key={item.id} className="px-8 text-center text ">
//               <h2 className=" text text-5xl">{item.value}</h2>
//               <p>{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";

import { status } from "@/data/data";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

const About = () => {
  const aboutRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const textSplit = SplitText.create(".about-text", {
        type: "words, lines",
        linesClass: "line overflow-hidden",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true,
          },
        })
        .from(textSplit.words, {
          yPercent: 100,
          ease: "power2.out",
          duration: 1,
          stagger: 0.02,
        });
    },
    { scope: aboutRef },
  );

  return (
    <section ref={aboutRef} className="py-16 bg-neutral-950 text-neutral-50">
      <div className="container space-y-8">
        <p className="about-text max-w-5xl mx-auto text-xl text-center">
          Beautiful interior spaces are created by blending modern design
          principles with functionality and timeless elegance. Every project is
          carefully crafted to bring comfort, personality, and harmony into
          homes and workspaces. non.
        </p>

        <div className="grid gap-8 lg:grid-cols-3 lg:divide-x max-w-max mx-auto">
          {status.map((item) => (
            <div key={item.id} className="px-8 text-center about-text">
              <h2 className="text-5xl font-semibold">{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
