"use client"
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Project from "@/components/project";
import About from "@/components/about";
import Skill from "@/components/skill";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />

      <Link
        href="#top-hero"
        aria-label="Back to top"
        className="fixed bottom-6 right-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition-all duration-200 hover:border-amber-400 hover:text-amber-200 lg:bottom-10 lg:right-10"
      >
        Back to Top
        <FaArrowAltCircleUp className="text-lg" />
      </Link>
    </main>
  );
}
