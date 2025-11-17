import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-6">
      <nav
        className="
          mx-4 w-full max-w-6xl
          rounded-full border border-amber/30
          bg-black/80 backdrop-blur
          shadow-[0_2px_0_0_rgba(255,191,0,0.15)_inset,0_-2px_0_0_rgba(0,0,0,0.6)_inset,0_8px_24px_rgba(0,0,0,0.6)]
          px-4 lg:px-6
        "
      >
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-amber text-black font-black">
              KV
            </span>
            <span className="text-white hover:text-amber font-semibold tracking-wide">
              Kraft Venture
            </span>
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 text-white/90">
            <li>
              <NavLink
                to="/"
                className="hover:text-amber transition"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="group relative">
              <button className="flex items-center gap-1 transition">
                Services
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-y-[1px]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              {/* dropdown (optional) */}
              <div className="invisible absolute left-0 top-8 min-w-[200px] rounded-xl border border-amber/30 bg-black/95 p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                <NavLink
                  to={"/web-design"}
                  className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5"
                >
                  Web Design
                </NavLink>
                <NavLink
                  to="/social-media-marketing"
                  className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5"
                >
                  Social Media Marketing
                </NavLink>
                <NavLink
                  to="/android-app-development"
                  className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5"
                >
                  Android App Development
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-amber transition"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className="hover:text-amber transition"
                activeClassName="active"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="hover:text-amber transition"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* CTA */}
          <NavLink
            to="/get-in-touch"
            className="
              inline-flex items-center gap-3 rounded-full
              text-black
              bg-amber pl-2 pr-4 py-2 font-semibold
              shadow-[0_6px_16px_rgba(255,191,0,0.35)]
              hover:brightness-95 active:scale-[0.99] transition
            "
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white ring-1 ring-black/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Get In Touch
          </NavLink>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/90 hover:text-white"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-white/10">
            <ul className="mt-4 space-y-2 text-white/90">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
