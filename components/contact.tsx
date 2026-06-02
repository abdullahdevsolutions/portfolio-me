const contactDetails = [
  {
    label: "Email",
    value: "abdullahazharhere@gmail.com",
    link: "mailto:abdullahazharhere@gmail.com",
  },
  {
    label: "Phone",
    value: "+92 318 505 3342",
    link: "tel:+923185053342",
  },
  {
    label: "Location",
    value: "RailView Society, Rawalpindi",
  },
];

const Contact = () => {
  return (
    <section className="relative py-24" id="Contact">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_1.05fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/80">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Let’s scope your next release
              </h2>
              <p className="text-base text-slate-300">
                Share your idea, current roadmap, or product challenges. I
                typically respond within one business day with next steps and an
                optional discovery call invite.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-amber-200/10 bg-[rgba(47,30,26,0.7)] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
                    {detail.label}
                  </p>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="mt-1 inline-flex text-sm font-medium text-amber-200 transition-colors hover:text-amber-100"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-100">
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <iframe
                title="Rawalpindi"
                className="h-64 w-full"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.468983196785!2d73.12506469312969!3d33.599219779706935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec815a1fdd3d%3A0x618260545f5dfd6e!2sGulzar%20e%20Quaid%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707169161684!5m2!1sen!2s"
                allowFullScreen
                style={{ filter: "grayscale(0.1) contrast(1.1) opacity(0.85)" }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200/10 bg-[rgba(42,27,23,0.88)] p-8 shadow-xl shadow-black/40">
            <h3 className="text-2xl font-semibold text-white">
              Start the conversation
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Provide a brief outline and I&rsquo;ll follow up with a tailored
              response.
            </p>
            <form
              action="https://formspree.io/f/xqkrpdoj"
              method="POST"
              target="_blank"
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.35em] text-amber-200/70"
                >
                  Name
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-amber-200/15 bg-[rgba(59,38,32,0.75)] px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-amber-300 focus:outline-none focus:ring-0"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.35em] text-amber-200/70"
                >
                  Email
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-amber-200/15 bg-[rgba(59,38,32,0.75)] px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-amber-300 focus:outline-none focus:ring-0"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-xs uppercase tracking-[0.35em] text-amber-200/70"
                >
                  Project Focus
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-amber-200/15 bg-[rgba(59,38,32,0.75)] px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-amber-300 focus:outline-none focus:ring-0"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Booking platform refresh"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.35em] text-amber-200/70"
                >
                  Message
                </label>
                <textarea
                  className="mt-2 w-full rounded-xl border border-amber-200/15 bg-[rgba(59,38,32,0.75)] px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-amber-300 focus:outline-none focus:ring-0"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Share context, timelines, or links."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Send Message
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
