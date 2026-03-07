import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ReactLenis from "lenis/react";
import Image from "next/image";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <About />
      <Services />
    </ReactLenis>
  );
}
