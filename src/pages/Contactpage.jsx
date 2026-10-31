
function ContactPage() {
  const contactInfo = [
    {
      number: "01",
      title: "Visit Our Studio",
      detail: "Discover the EV-R experience",
      icon: "⌖",
    },
    {
      number: "02",
      title: "Email Us",
      detail: "hello@ev-r.com",
      icon: "✉",
    },
    {
      number: "03",
      title: "Our Availability",
      detail: "Monday – Saturday · 9 AM – 6 PM",
      icon: "◷",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f4faff] pt-28 text-[#101c3a]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 md:px-10">
        <div className="contact-heading grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-600">
              Let's Connect
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              We'd love to
              <span className="block text-cyan-500">hear from you.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500 md:text-lg">
              Have a question about EV-R? We're here to help you discover
              a better way to move.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-cyan-400" />
              <span className="text-sm font-semibold tracking-wide text-slate-500">
                Your next journey starts here
              </span>
            </div>
          </div>

          <div className="contact-visual relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dff6ff] via-[#c5edff] to-[#a8dcf5] p-8 md:min-h-[390px]">
            <div className="absolute h-56 w-56 rounded-full border border-white/70 md:h-72 md:w-72" />
            <div className="absolute h-40 w-40 rounded-full border border-white/70 md:h-56 md:w-56" />

            <div className="absolute right-8 top-8 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_30px_8px_rgba(34,211,238,0.35)]" />

            <div className="relative z-10 text-center">
              <span className="text-8xl text-[#101c3a] md:text-9xl">✉</span>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-[#101c3a]/70">
                We're listening
              </p>
            </div>

            <div className="absolute bottom-6 left-6 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs font-bold tracking-wider text-[#101c3a] backdrop-blur-md">
              EV-R · CONNECT
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <article
              key={item.number}
              className="contact-card group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-3xl text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-[#101c3a]">
                  {item.icon}
                </span>

                <span className="text-sm font-bold tracking-widest text-slate-300">
                  {item.number}
                </span>
              </div>

              <h2 className="mt-7 text-xl font-extrabold">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Form Design */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-10">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#101c3a] md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Get in Touch
              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                Let's make
                <span className="block text-cyan-400">things happen.</span>
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-slate-300">
                Share your thoughts with us. Every great journey begins
                with a conversation.
              </p>

              <div className="mt-10 h-1 w-16 rounded-full bg-cyan-400" />

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                EV-R Electric Mobility
              </p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12">
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-bold text-[#101c3a]"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-bold text-[#101c3a]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-bold text-[#101c3a]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold text-[#101c3a]"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="Tell us what's on your mind..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <button
                type="button"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#101c3a] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-[#101c3a] hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Send a Message
                <span className="text-lg">↗</span>
              </button>

              <p className="mt-4 text-xs text-slate-400">
                Contact form preview — message submission is not connected.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
