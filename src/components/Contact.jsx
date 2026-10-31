
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#f5f8fb] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            Get in Touch
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#29294b] sm:text-4xl lg:text-5xl">
            Ready for Your
            <span className="block text-cyan-500">Next Adventure?</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
            Have questions about our electric scooters? Send us a message
            and let us help you find your perfect ride.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan-200 bg-cyan-50 text-xl text-cyan-600">
                ✉
              </div>
              <div>
                <h3 className="font-bold text-[#29294b]">Email Us</h3>
                <p className="mt-1 text-sm text-slate-500">
                  hello@ev-r.example
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan-200 bg-cyan-50 text-xl text-cyan-600">
                ↗
              </div>
              <div>
                <h3 className="font-bold text-[#29294b]">Our Promise</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Smarter rides for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-slate-200 bg-white p-6 sm:p-9">
          <h3 className="text-2xl font-bold text-[#29294b]">
            Send Us a Message
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Fill in the details below.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                required
                className="w-full resize-y border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 border border-[#29294b] bg-[#29294b] px-6 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500"
            >
              SEND MESSAGE
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {submitted && (
              <p
                role="status"
                className="border border-cyan-200 bg-cyan-50 p-3 text-sm text-cyan-800"
              >
                Form submitted locally! Messages are not being sent yet.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
