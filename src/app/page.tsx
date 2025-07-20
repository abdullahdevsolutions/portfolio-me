"use client"
import Link from "next/link";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Home() {
  return (
   <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      {/* <Link href={"/"}> */}
      <a href="#top-hero">
      <button className="border border-black w-[145px] h-10 bg-red-700 text-white fixed bottom-20 right-3 pr-[12px] ">Back to Top<FaArrowAltCircleUp className="absolute top-2.5 text-xl right-1"/></button>
      </a>
      {/* </Link> */}
   </div>
  );
}
