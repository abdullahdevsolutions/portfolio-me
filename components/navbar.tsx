"use client";
import Link from "next/link";
import Image from "next/image";
import { IoCloudDownloadSharp } from "react-icons/io5";

const navItems = [
  { href: "#About", label: "About" },
  { href: "#Skill", label: "Skills" },
  { href: "#Project", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(42,27,23,0.72)] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl">
      <header className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3 text-slate-100">
          <Image
            src="/assets/abdullah.jpg"
            alt="Abdullah Azhar"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border border-white/20 shadow-lg shadow-black/40"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
              Portfolio of
            </p>
            <p className="text-lg font-semibold text-white md:text-xl">
              Abdullah <span className="text-amber-300">Azhar</span>
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200 md:gap-8 md:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition-colors duration-200 hover:text-amber-200"
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full scale-x-0 bg-gradient-to-r from-amber-400 via-amber-200 to-transparent transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#Contact"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-amber-400 hover:text-amber-200 md:inline-flex"
          >
            Let&apos;s Talk
          </Link>
          <a
            href="/assets/Abdullah Azhar.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Download CV
            <IoCloudDownloadSharp className="text-base" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
