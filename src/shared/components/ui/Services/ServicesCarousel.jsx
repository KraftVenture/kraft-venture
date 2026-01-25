import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "./services.data";

const cx = (...c) => c.filter(Boolean).join(" ");

export default function ServicesCarousel() {
  const navigate = useNavigate();
  const scrollerRef = useRef(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [paused, setPaused] = useState(false);

  const scrollByAmount = useMemo(() => {
    return () => {
      const el = scrollerRef.current;
      if (!el) return 0;
      // Mobile: scroll by ~one card, Desktop: by viewport
      const isSmall = window.innerWidth < 640;
      return isSmall ? Math.round(el.clientWidth * 0.92) : Math.round(el.clientWidth * 0.98);
    };
  }, []);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < max - 2);
  };

  const scrollPrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  };

  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  };

  // Auto slide (pause on hover/focus)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= max - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
      }
    }, 6000);

    return () => clearInterval(id);
  }, [paused, scrollByAmount]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateButtons();

    const onScroll = () => updateButtons();
    const onResize = () => updateButtons();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const onKey = (e) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    el.addEventListener("keydown", onKey);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-8 md:py-20">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Services Built for <span className="text-amber">Growth</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:text-base sm:mx-0">
              Swipe through our services. Tap any card to view full details.
            </p>
          </div>

          {/* Arrows: hidden on mobile, show from sm */}
          <div className="hidden sm:flex items-center justify-center gap-3">
            <ArrowButton direction="prev" onClick={scrollPrev} disabled={!canPrev} />
            <ArrowButton direction="next" onClick={scrollNext} disabled={!canNext} />
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-8 sm:mt-10">
          <div
            ref={scrollerRef}
            tabIndex={0}
            aria-label="Services carousel"
            onTouchStart={() => setPaused(true)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className={cx(
              "flex gap-4 sm:gap-6 overflow-x-auto pb-3",
              "scroll-smooth snap-x snap-mandatory",
              "focus:outline-none",
              "[&::-webkit-scrollbar]:h-2",
              "[&::-webkit-scrollbar-track]:bg-transparent",
              "[&::-webkit-scrollbar-thumb]:bg-white/10",
              "[&::-webkit-scrollbar-thumb]:rounded-full"
            )}
          >
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className={cx(
                  "snap-start",
                  // ✅ better mobile sizes
                  "min-w-[88%]",
                  "sm:min-w-[70%]",
                  "md:min-w-[48%]",
                  "lg:min-w-[32%]"
                )}
              >
                <ServiceCard
                  service={s}
                  onClick={() => navigate(`/services/${s.slug}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Card: mobile compact + clear CTA -------- */
function ServiceCard({ service, onClick }) {
  return (
    <div
      className="
        h-full rounded-3xl border border-white/10
        bg-white/[0.06] backdrop-blur
        shadow-[0_18px_55px_rgba(0,0,0,0.65)]
        p-5 sm:p-7
        transition hover:border-amber/30
        flex flex-col
      "
    >
      {/* Title */}
      <h3 className="mt-2 sm:mt-5 text-md sm:text-2xl font-semibold leading-snug">
        {service.title}
      </h3>

      {/* ✅ Description clamped */}
      <p className="mt-2 text-xs sm:text-base text-white/60 leading-relaxed line-clamp-3">
        {service.short}
      </p>

      {/* ✅ Bullets fixed count (clamped) */}
      <ul className="mt-5 space-y-2 text-xs sm:text-sm text-white/75">
        {service.bullets.slice(0, 3).map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-amber" />
            <span className="leading-relaxed line-clamp-1">{b}</span>
          </li>
        ))}
      </ul>

      {/* ✅ Push button to bottom ALWAYS */}
      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={onClick}
          className="
            inline-flex w-full items-center justify-center gap-2
            rounded-2xl bg-amber px-4 py-3
            text-sm font-semibold text-black
            hover:brightness-95 transition
            focus:outline-none focus:ring-2 focus:ring-amber/60
          "
        >
          View Details
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}


function ArrowButton({ direction, onClick, disabled }) {
  const label = direction === "prev" ? "Previous services" : "Next services";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={[
        "grid h-11 w-11 place-items-center rounded-xl",
        "bg-white/10 text-white border border-white/10",
        "transition hover:bg-white/15 active:translate-y-[1px]",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:translate-y-0",
        "focus:outline-none focus:ring-2 focus:ring-amber/60 focus:ring-offset-2 focus:ring-offset-black",
      ].join(" ")}
    >
      {direction === "prev" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
