"use client";

import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import {
  SiTypescript,
  SiCodeigniter,
  SiLaravel,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "Semantic HTML",
    focus: "Accessibility-first layouts",
    period: "2019 → Present",
    icon: TfiHtml5,
    gradient: "from-orange-500 to-amber-400",
  },
  {
    name: "Modern CSS",
    focus: "Design systems & responsive UI",
    period: "2020 → Present",
    icon: IoLogoCss3,
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    name: "JavaScript",
    focus: "Interactive product flows",
    period: "2021 → Present",
    icon: DiJavascript,
    gradient: "from-yellow-400 to-amber-500",
  },
  // {
  //   name: "TypeScript",
  //   focus: "Robust, typed interfaces",
  //   period: "2023 → Present",
  //   icon: SiTypescript,
  //   gradient: "from-blue-500 to-indigo-500",
  // },

  {
    name: "Tailwind CSS",
    focus: "Fast UI development",
    period: "2024 → Present",
    icon: SiTailwindcss,
    gradient: "from-cyan-400 to-emerald-300",
  },
  {
    name: "CodeIgniter",
    focus: "Lightweight APIs & portals",
    period: "2024 → Present",
    icon: SiCodeigniter,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Laravel",
    focus: "Scalable backend architecture",
    period: "2024 → Present",
    icon: SiLaravel,
    gradient: "from-rose-500 to-red-500",
  },
];

const capabilityHighlights = [
  {
    label: "Core Stack",
    value: "Laravel, CodeIgniter, Next.js, Tailwind CSS",
  },
  {
    label: "Tooling",
    value: "Git, Docker, CI/CD, Figma Handoff",
  },
  {
    label: "Delivery",
    value: "Agile Sprints, QA, Production Releases",
  },
];

const Skill = () => {
  return (
    <section className="relative overflow-hidden py-24 " id="Skill">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          {/* Left Content */}
          <div className="max-w-xl space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Capabilities
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
                Building reliable products with modern technologies
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-300">
              I specialize in developing scalable web applications,
              high-performance APIs, and intuitive user interfaces using
              Laravel, CodeIgniter, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {capabilityHighlights.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.04]
                    p-6
                    backdrop-blur-xl
                    shadow-xl shadow-black/20
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-amber-400/30
                  "
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    {item.label}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="flex-1">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {skills.map(({ name, focus, period, icon: Icon, gradient }) => (
                <div
                  key={name}
                  className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.04]
                      p-6
                      backdrop-blur-xl
                      shadow-xl shadow-black/20
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:border-amber-400/40
                      hover:bg-white/[0.06]
                    "
                >
                  {/* Glow */}
                  <div
                    className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl transition-all duration-300 group-hover:opacity-20`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
                  >
                    <Icon className="text-2xl text-slate-900" />
                  </div>

                  {/* Content */}
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    {period}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {focus}
                  </p>

                  {/* Accent Line */}
                  <div
                    className={`mt-5 h-1 w-14 rounded-full bg-gradient-to-r ${gradient}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
