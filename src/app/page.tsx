"use client";

import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Work } from "@/components/portfolio/sections/Work";
import { Services } from "@/components/portfolio/sections/Services";
import { Experience } from "@/components/portfolio/sections/Experience";
import { Testimonials } from "@/components/portfolio/sections/Testimonials";
import { Contact } from "@/components/portfolio/sections/Contact";
import { Footer } from "@/components/portfolio/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Cursor />
      <Header />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
