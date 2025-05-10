"use client";

import { Button } from "@/components/ui/button";
import { FAQ } from "@/sections/faq";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { HowItWorks } from "@/sections/how-works";
import { Navbar } from "@/sections/navbar";
import { Pricing } from "@/sections/pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col antialiased">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
