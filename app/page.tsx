import About from "@/components/About";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
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
      <Blog />
      <Cta />
    </ReactLenis>
  );
}
