import About from "@/components/About";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <About />
      <Services />
      <OurProcess />
    </ReactLenis>
  );
}
