import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "UAE Cleaning Services",
    company: "onzo.ae",
    description:
      "Service marketplace with real-time booking, staff routing, and multilingual customer dashboards.",
    href: "https://onzo.ramiant.com/",
    image: "/assets/onzo.webp",
    stack: "Laravel, Tailwind, MySQL",
  },
  {
    title: "Statement Management Platform",
    company: "wycglobal.co.uk",
    description:
      "Secure ingestion workflow for finance teams with audit trails and granular export permissions.",
    href: "https://system.wycglobal.co.uk/",
    image: "/assets/statement.webp",
    stack: "CodeIgniter, Bootstrap, AWS",
  },
  {
    title: "SofaClean Booking Portal",
    company: "sofaclean.ch",
    description:
      "Responsive bookings with route optimization and CRM integrations for Swiss cleaning crews.",
    href: "https://sofaclean.ch/en",
    image: "/assets/sofaclean.jpg",
    stack: "Laravel, Tailwind",
  },
  {
    title: "AppCoding Corporate Site",
    company: "appcoding.tech",
    description:
      "Product storytelling site presenting service packages, case studies, and inbound lead capture.",
    href: "https://appcoding.tech/",
    image: "/assets/appcoding.jpg",
    stack: "Next.js, Tailwind, Vercel",
  },
  {
    title: "Deal Tours",
    company: "deal.tours",
    description:
      "Travel packages marketplace with seasonal promos, payment flows, and partner onboarding dashboard.",
    href: "https://deal.tours/",
    image: "/assets/dealtours.jpg",
    stack: "Laravel, Tailwind, Alpine.js",
  },
  {
    title: "Hajj Booking Experience",
    company: "hajjbookings.pk",
    description:
      "Pilgrimage itinerary planner with capacity management, documentation workflows, and SMS automation.",
    href: "https://hajjbookings.pk/",
    image: "/assets/hajj.jpg",
    stack: "Laravel, Livewire",
  },
  {
    title: "VisaWorld Advisory",
    company: "visaworldinfo.com",
    description:
      "Conversion-focused marketing site driving leads for immigration services across multiple regions.",
    href: "https://visaworldinfo.com/",
    image: "/assets/visaworld.jpg",
    stack: "Next.js, Tailwind",
  },
  {
    title: "Disposal Services Portal",
    company: "disposal.ch",
    description:
      "Logistics scheduling platform powering recycling pickups, notifications, and billing flows.",
    href: "https://disposal.ch/",
    image: "/assets/disposal.jpg",
    stack: "CodeIgniter, Tailwind",
  },
  {
    title: "Portfolio Refresh",
    company: "abdullah-azhar",
    description:
      "Personal brand hub with selectable case studies and a refined storytelling arc for prospects.",
    href: "https://abdullah-azhar-portfolio.vercel.app/",
    image: "/assets/Portfolio.PNG",
    stack: "Next.js, Tailwind",
  },
  {
    title: "Microsoft Landing Clone",
    company: "Exploration",
    description:
      "Interactive recreation of the Microsoft marketing homepage to sharpen component-driven layouts.",
    href: "https://microsoft-blue.vercel.app/",
    image: "/assets/Microsoft.PNG",
    stack: "Next.js, Tailwind",
  },
  {
    title: "Facebook Experience Clone",
    company: "Exploration",
    description:
      "Prototyped social feed experience highlighting responsive patterns and reusable UI primitives.",
    href: "https://facebook-clone-iota-gules.vercel.app/",
    image: "/assets/Facebook.PNG",
    stack: "Next.js, Tailwind",
  },
];

const Project = () => {
  return (
    <section className="relative py-24" id="Project">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-6 top-8 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 pb-16 lg:flex-row lg:items-end">
          <div className="max-w-xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/80">
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Digital products with measurable impact
            </h2>
            <p className="text-base text-slate-300">
              A snapshot of platforms and experiments delivered for service
              operators, agencies, and international teams. Each project
              balances polish with operational efficiency.
            </p>
          </div>
          <Link
            href="#Contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:border-amber-400 hover:text-amber-200"
          >
            Discuss a similar build
            <span aria-hidden>↗</span>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a24] via-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-orange-200">
                  {project.company}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{project.stack}</span>
                  <Link
                    href={project.href}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-amber-200 transition-colors duration-200 hover:text-amber-100"
                  >
                    View&nbsp;project
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
