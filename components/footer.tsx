"use client";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050a24]/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/abdullah.jpg"
            alt="Abdullah Azhar"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-white/15"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Abdullah Azhar
            </p>
            <p className="text-sm text-slate-300">
              Full-stack developer & product contributor
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
          <Link
            href="#About"
            className="transition-colors duration-200 hover:text-amber-200"
          >
            About
          </Link>
          <Link
            href="#Skill"
            className="transition-colors duration-200 hover:text-amber-200"
          >
            Skills
          </Link>
          <Link
            href="#Project"
            className="transition-colors duration-200 hover:text-amber-200"
          >
            Work
          </Link>
          <Link
            href="#Contact"
            className="transition-colors duration-200 hover:text-amber-200"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="https://www.facebook.com/abdullah.azhar.7549/"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-200 hover:border-amber-400 hover:text-amber-200"
          >
            <BiLogoFacebookSquare className="text-lg" />
          </Link>
          <Link
            href="https://www.instagram.com/the.abdullah1.0"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-200 hover:border-amber-400 hover:text-amber-200"
          >
            <SiInstagram className="text-lg" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdullah-azhar-162844242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-200 hover:border-amber-400 hover:text-amber-200"
          >
            <FaLinkedin className="text-lg" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-7xl px-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Abdullah Azhar. Crafted with intention to
          help teams scale service-driven products.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
