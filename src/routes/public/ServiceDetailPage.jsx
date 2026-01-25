import React, { useMemo } from "react";
import { useParams, NavLink } from "react-router-dom";
import { SERVICES } from "../../shared/components/ui/Services/services.data";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const service = useMemo(
    () => SERVICES.find((s) => s.slug === slug),
    [slug]
  );

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white grid place-items-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Service not found</h1>
          <NavLink to="/" className="mt-4 inline-block text-amber font-semibold">
            Go back home →
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:px-8">
        <NavLink to="/" className="text-sm text-white/60 hover:text-amber">
          ← Back
        </NavLink>

        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
          {service.title}
        </h1>

        <p className="mt-4 max-w-2xl text-white/60">
          {service.long?.overview || service.short}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
            <h2 className="text-xl font-semibold">What’s Included</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              {(service.long?.includes || service.bullets).map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-amber" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
            <h2 className="text-xl font-semibold">Expected Outcomes</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              {(service.long?.outcomes || []).map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-amber" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <NavLink
              to="/get-in-touch"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-amber px-4 py-3 font-semibold text-black hover:brightness-95 transition"
            >
              Get In Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}
