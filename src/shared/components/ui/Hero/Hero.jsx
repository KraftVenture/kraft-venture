import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative z-10 mx-auto flex min-h-[50vh] flex-col items-center px-4 py-8 text-center md:px-8 md:py-24">
        {/* Heading */}
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl">
          Powering Your Projects
          <span className="block text-amber">with Kraft Venture</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
          We help you design, build, and manage high-performance products with
          clarity, speed, and transparency.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          {/* Primary */}
          <Link
            to="/get-in-touch"
            className="px-2"
          >
            <button className="inline-flex items-center gap-3 rounded-full bg-amber px-2 py-2 text-sm font-semibold text-black shadow-[0_14px_40px_rgba(255,191,0,0.4)] transition hover:brightness-95 active:translate-y-[1px]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
                <ArrowRight className="h-6 w-6" />
              </span>
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
