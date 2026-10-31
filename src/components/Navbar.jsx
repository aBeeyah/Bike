import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PRODUCTS", href: "/products" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
];

  const closeMenu = () => setMenuOpen(false);

  const linkStyle =
    "relative text-sm font-semibold tracking-wide text-slate-700 transition-colors duration-300 hover:text-cyan-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full";

  const loginStyle =
    "border border-slate-800 px-6 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700";

  return (
    <>
      {/* Main Navbar */}
      <nav className="absolute left-0 top-0 z-40 w-full px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold tracking-wider text-slate-900"
          >
            EV-R<span className="text-cyan-500">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={linkStyle}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Login */}
          <a
            href="#contact"
            className={`hidden rounded-none md:inline-flex ${loginStyle}`}
          >
            LOGIN
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white/80 text-slate-900 transition hover:bg-cyan-50 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Dark Overlay */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-slate-950/50 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right-side Offcanvas */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[80%] max-w-sm flex-col border-l border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wider text-slate-900"
          >
            EV-R<span className="text-cyan-500">.</span>
          </a>

          {/* Close Button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center border border-slate-300 text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-3 pt-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              style={{
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
              }}
              className={`relative w-fit py-3 text-sm font-semibold tracking-wide text-slate-700 transition-all duration-300 hover:text-cyan-600 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Login */}
        <a
          href="#contact"
          onClick={closeMenu}
          className={`mt-auto block rounded-none py-3 text-center ${loginStyle}`}
        >
          LOGIN
        </a>
      </aside>
    </>
  );
}

export default Navbar;
