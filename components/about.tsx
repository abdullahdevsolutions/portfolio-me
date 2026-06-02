import Image from "next/image";

const highlights = [
  {
    title: "Full-stack delivery",
    description:
      "Design, build, and deploy performant web products across Laravel, Next.js, and modern UI systems.",
  },
  {
    title: "Product mindset",
    description:
      "Translate stakeholder goals into measurable roadmaps while keeping usability and maintainability front and center.",
  },
  {
    title: "Operational discipline",
    description:
      "Production-ready workflows with CI/CD, code review rituals, and pragmatic documentation habits.",
  },
  {
    title: "Collaborative leadership",
    description:
      "Partner with founders, PMs, and designers to deliver reliable releases on fast-moving engagements.",
  },
];

const timeline = [
  {
    year: "2025",
    role: "Full-stack Developer",
    company: "Ramiant Technologies",
    summary:
      "Leading platform enhancements for service-sector clients with integrations across booking, invoicing, and analytics.",
  },
  {
    year: "2023",
    role: "Front-end Engineer",
    company: "Freelance Collaborations",
    summary:
      "Delivered responsive marketing and customer portals for agencies in the UAE and Europe.",
  },
];

const About = () => {
  return (
    <section className="relative py-24" id="About">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[minmax(0,1.15fr)_1fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/80">
              About
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Engineering partner for product-led teams
            </h2>
          </div>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            I bring end-to-end ownership to every engagement: refining
            requirements, designing information architecture, writing clean
            code, and delivering deployments that scale. The outcomes span
            booking platforms, customer portals, and operational dashboards
            built across PHP, Laravel, CodeIgniter, and the modern JavaScript
            ecosystem.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/20"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/assets/about.png"
              alt="Working session"
              width={560}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="rounded-3xl border border-amber-200/10 bg-[rgba(42,27,23,0.88)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">
              Experience Snapshot
            </p>
            <div className="mt-6 space-y-6">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="border-l border-amber-200/20 pl-6"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
                    {item.year}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {item.role}
                  </p>
                  <p className="text-sm font-medium text-amber-200">
                    {item.company}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
