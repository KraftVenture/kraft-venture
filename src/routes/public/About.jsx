import React from "react";

const STATS = [
  {
    value: "8.5M+",
    title: "Google Searches",
    desc:
      "8.5 billion daily searches on Google show its importance for information.",
  },
  {
    value: "99%",
    title: "Customer Satisfaction",
    desc:
      "Users absolutely love our seamless, secure, and innovative digital experience.",
  },
  {
    value: "10K+",
    title: "Businesses Empowered",
    desc:
      "Assisting diverse teams globally to effectively streamline their daily operations.",
  },
];

const VALUES = [
  {
    title: "Innovation & Growth",
    desc:
      "We embrace change, challenge norms, and drive meaningful progress.",
    icon: <IconSpark />,
  },
  {
    title: "Security & Reliability",
    desc:
      "Values that truly define our mission and vision statement for the future.",
    icon: <IconShield />,
  },
  {
    title: "Simplicity & Efficiency",
    desc:
      "Work smarter, not harder—streamlined workflows for maximum impact.",
    icon: <IconInfinity />,
  },
];

const TEAM = [
  {
    name: "Ethan Carter",
    role: "CEO & Co-Founder",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Liam Johnson",
    role: "Head of Marketing",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sophia Chen",
    role: "Chief Technology Officer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ava Brown",
    role: "UX/UI Designer",
    img: "https://images.unsplash.com/photo-1524503033411-fd26f86d5c6f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function AboutPage() {
  return (
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 md:px-8">
        {/* Top heading */}
        <section className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to <span className="text-amber">Kraft Venture</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
            We build solutions for better collaboration, simplified workflows,
            and secure experiences—designed to help teams move faster.
          </p>
        </section>

        {/* Welcome section (image + glass card) */}
        <section className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Team collaboration"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.65)] overflow-hidden">
              {/* subtle amber glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

              <h2 className="text-2xl font-semibold sm:text-3xl">
                Journey to Smarter Workplace
              </h2>
              <p className="mt-3 text-sm text-white/70 sm:text-base">
                Completely redefining productivity for the modern, dynamic, and
                ever-evolving global workforce today.
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
                <p>
                  Born from the need for better collaboration, we built a
                  platform that simplifies teamwork and ensures security,
                  reliability, and efficiency.
                </p>
                <p>
                  Our goal is to connect teams with tools for seamless
                  communication, resource sharing, and efficient project
                  management—without complexity.
                </p>
                <p>
                  By integrating strong technology and user-friendly interfaces,
                  we empower teams to work as if they were together, regardless
                  of location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-white/85">
                {s.title}
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Values */}
        <section className="mt-32 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            What We Believe In
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:text-base">
            Values that define our mission and vision for the future that lies ahead.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.6)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/90">
                  {v.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-32 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Meet the Experts
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:text-base">
            Meet the brilliant minds shaping the future with craftsmanship and clarity.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="rounded-3xl border border-white/10 bg-white/[0.06] overflow-hidden backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.6)]"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="text-base font-semibold">{m.name}</div>
                  <div className="mt-1 text-sm text-white/60">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
}

/* ---------------- Icons (no dependency) ---------------- */
function IconSpark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2v6M12 16v6M4 12h6M14 12h6M6.5 6.5l4.2 4.2M13.3 13.3l4.2 4.2M17.5 6.5l-4.2 4.2M10.7 13.3l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.7 1.7L14.8 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconInfinity() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.2 15.5c-1.7 1.7-4.4 1.7-6.1 0s-1.7-4.4 0-6.1 4.4-1.7 6.1 0l7.6 7.6c1.7 1.7 4.4 1.7 6.1 0s1.7-4.4 0-6.1-4.4-1.7-6.1 0l-7.6 7.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

