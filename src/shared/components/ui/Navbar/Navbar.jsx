import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const navLinkBase = "text-white/85 hover:text-amber transition font-medium";
const navLinkActive = "text-amber";

const SERVICES = [
  { label: "Web Design", to: "/web-design" },
  { label: "Social Media Marketing", to: "/social-media-marketing" },
  { label: "Android App Development", to: "/android-app-development" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();
  const drawerRef = useRef(null);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when clicking outside the drawer (overlay click)
  useEffect(() => {
    function onClickOutside(e) {
      if (!mobileOpen) return;
      const el = drawerRef.current;
      if (el && !el.contains(e.target)) setMobileOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [mobileOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, [mobileOpen]);

  return (
    <>
      {/* Top pill navbar */}
      <header className="w-full flex justify-center pt-6">
        <nav
          className="
            mx-4 w-full max-w-6xl
            z-30
            rounded-full border border-amber/30
            bg-black/80 backdrop-blur
            px-4 lg:px-6
          "
        >
          <div className="h-16 flex items-center justify-between gap-3">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-amber text-black font-black">
                KV
              </span>
              <span className="text-white font-semibold tracking-wide hover:text-amber transition">
                Kraft Venture
              </span>
            </NavLink>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => cx(navLinkBase, isActive && navLinkActive)}
                >
                  Home
                </NavLink>
              </li>

              <li className="relative group">
                {/* Desktop dropdown on hover + click */}
                <DesktopServices />
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => cx(navLinkBase, isActive && navLinkActive)}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) => cx(navLinkBase, isActive && navLinkActive)}
                >
                  Testimonials
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) => cx(navLinkBase, isActive && navLinkActive)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <NavLink
                to="/get-in-touch"
                className="
                  hidden sm:inline-flex items-center gap-3 rounded-full
                  bg-amber pl-2 pr-4 py-2 font-semibold text-black
                  shadow-[0_6px_16px_rgba(255,191,0,0.35)]
                  hover:brightness-95 active:scale-[0.99] transition
                "
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white ring-1 ring-black/10">
                  <ArrowRight className="h-6 w-6" />
                </span>
                Get In Touch
              </NavLink>

              <button
                type="button"
                className="
                  lg:hidden grid h-10 w-10 place-items-center rounded-full
                  border border-white/10 bg-white/5 text-white/90
                  hover:bg-white/10 transition
                  focus:outline-none focus:ring-2 focus:ring-amber/60
                "
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ✅ Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* drawer */}
          <div
            ref={drawerRef}
            className="
              absolute right-0 top-0 h-full w-[88%] max-w-sm
              bg-black border-l border-amber/30
              shadow-[0_30px_80px_rgba(0,0,0,0.8)]
              p-5
              flex flex-col
            "
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between">
              <NavLink to="/" className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-amber text-black font-black">
                  KV
                </span>
                <span className="text-white font-semibold text-lg">
                  Kraft Venture
                </span>
              </NavLink>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="
                  grid h-10 w-10 place-items-center rounded-full
                  border border-white/10 bg-white/5 text-white/90
                  hover:bg-white/10 transition
                "
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav items */}
            <div className="mt-6 space-y-2">
              <MobileNavItem to="/" label="Home" />
              <MobileAccordion
                title="Services"
                open={servicesOpen}
                setOpen={setServicesOpen}
              >
                <div className="mt-2 space-y-1">
                  {SERVICES.map((s) => (
                    <MobileNavItem key={s.to} to={s.to} label={s.label} inset />
                  ))}
                </div>
              </MobileAccordion>
              <MobileNavItem to="/about" label="About" />
              <MobileNavItem to="/testimonials" label="Testimonials" />
              <MobileNavItem to="/contact-us" label="Contact Us" />
            </div>

            {/* CTA pinned at bottom */}
            <div className="mt-auto pt-6">
              <NavLink
                to="/get-in-touch"
                className="
                  inline-flex w-full items-center justify-center gap-3 rounded-2xl
                  bg-amber px-4 py-3 font-semibold text-black
                  hover:brightness-95 transition
                "
              >
                Get In Touch
                <ArrowRight className="h-6 w-6" />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Desktop Services dropdown (hover + click friendly) ---------- */
function DesktopServices() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (btnRef.current?.contains(e.target)) return;
      if (menuRef.current?.contains(e.target)) return;
      setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((s) => !s)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 text-white/85 hover:text-amber transition font-medium"
        aria-expanded={open}
      >
        Services
        <ChevronDown className={cx("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          ref={menuRef}
          onMouseLeave={() => setOpen(false)}
          className="
            absolute left-0 top-10 z-50 min-w-[240px]
            rounded-2xl border border-amber/30
            bg-black/95 backdrop-blur
            shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            p-2
          "
        >
          {SERVICES.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cx(
                  "block rounded-xl px-3 py-2 text-sm transition",
                  isActive
                    ? "bg-amber text-black font-semibold"
                    : "text-white/85 hover:bg-white/5 hover:text-white"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

/* -------------------- Mobile components -------------------- */
function MobileNavItem({ to, label, inset }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(
          "block rounded-2xl px-4 py-3 text-sm font-medium transition",
          inset && "ml-3",
          isActive ? "bg-amber text-black" : "text-white/85 hover:bg-white/5"
        )
      }
    >
      {label}
    </NavLink>
  );
}

function MobileAccordion({ title, open, setOpen, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="
          w-full flex items-center justify-between
          rounded-2xl px-4 py-3 text-sm font-medium
          text-white/85 hover:bg-white/5 transition
        "
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown className={cx("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && <div className="pt-1">{children}</div>}
    </div>
  );
}
