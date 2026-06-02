"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="relative isolate overflow-hidden py-24 sm:py-28"
      id="top-hero"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[minmax(0,1fr)_600px] md:items-center lg:gap-24">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Based in Rawalpindi
            <span className="h-1 w-1 rounded-full bg-orange-400" />
            Available for 2026 collaborations
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Building resilient digital products for service-led brands
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              I combine thoughtful UX with pragmatic engineering across PHP,
              Laravel, and modern JavaScript. Each release focuses on clarity,
              performance, and measurable outcomes that support growing teams.
            </p>
            <p className="text-xl font-medium text-orange-300">
              <span className="mr-2 text-slate-200">
                I translate ideas into
              </span>
              <Typewriter
                options={{
                  strings: [
                    "production-ready platforms",
                    "polished user journeys",
                    "scalable engineering systems",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#Project"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/40 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
            >
              View Case Studies
              <span aria-hidden className="text-lg">
                →
              </span>
            </Link>
            <Link
              href="#Contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-amber-400 hover:text-amber-200"
            >
              Book a call
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { value: "25+", label: "Production launches" },
              { value: "8", label: "Industries served" },
              { value: "2 yrs", label: "Hands-on experience" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center"
              >
                <p className="text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end md:-translate-y-35">
          <div className="relative w-full max-w-[1400px] rounded-3xl p-0">
            <div className="absolute -left-12 top-66 hidden h-20 w-20 rounded-full border border-orange-400/50 md:block" />
            <Image
              src="/assets/raja2.png"
              alt="Abdullah Azhar portrait"
              width={800}
              height={800}
              priority
              className="h-auto w-full object-contain"
            />
            {/* <div className="mt-5 rounded-2xl border border-white/10 bg-[#040a25]/70 px-5 py-4 text-sm text-slate-300">
              <p className="font-semibold text-white">Recent release</p>
              <p>
                Launched a booking portal with multi-tenant dashboards and
                granular analytics.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
