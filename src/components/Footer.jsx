
function Footer() {
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#29294b] px-5 pb-6 pt-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-3xl font-bold tracking-wider"
            >
              EV-R<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              Moving towards a smarter future with modern electric mobility.
              Discover a better way to ride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Quick Links
            </h3>

            <div className="flex flex-col items-start gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Stay Connected
            </h3>

            <p className="max-w-xs text-sm leading-7 text-slate-300">
              Have a question about our electric scooters? Visit our contact
              section and send us a message.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-3 border border-cyan-400 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:text-[#29294b]"
            >
              CONTACT US
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EV-R. All rights reserved.</p>

          <a
            href="#home"
            className="w-fit transition-colors duration-300 hover:text-cyan-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
