import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "./testimonials.data";

function ArrowButton({ direction, onClick, disabled }) {
  const label = direction === "prev" ? "Previous testimonials" : "Next testimonials";

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

function TestimonialCard({ t }) {
  return (
    <article
      className={[
        "h-full rounded-3xl border border-white/10",
        "bg-white/[0.06] backdrop-blur",
        "shadow-[0_10px_40px_rgba(0,0,0,0.55)]",
        "p-5 sm:p-6 md:p-7",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-white/85">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-black/40 border border-white/10">
            <span className="text-white/80 font-semibold">{t.sourceLabel}</span>
          </span>
          <span className="font-semibold">{t.ratingText}</span>
        </div>

        <time className="shrink-0 text-xs sm:text-sm text-white/60">
          {t.dateText}
        </time>
      </div>

      <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-white/85">
        “{t.quote}”
      </p>

      <div className="mt-6 sm:mt-7 flex items-center gap-4">
        <img
          src={t.avatarUrl}
          alt={`${t.name} avatar`}
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-white/10"
          loading="lazy"
        />
        <div>
          <div className="text-sm sm:text-base font-semibold text-white">
            {t.name}
          </div>
          <div className="text-xs sm:text-sm text-white/60">{t.company}</div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < max - 2);
  };

  const scrollByAmount = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    // On small screens scroll ~1 card; on larger scroll ~one viewport width.
    const isSmall = window.innerWidth < 640;
    return isSmall ? Math.round(el.clientWidth * 0.92) : Math.round(el.clientWidth * 0.98);
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

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateButtons();

    const onScroll = () => updateButtons();
    const onResize = () => updateButtons();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // keyboard: left/right arrows when focused
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    el.addEventListener("keydown", onKeyDown);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-8 md:py-20">
        {/* Header: mobile stacks, desktop aligns */}
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Loved by <span className="text-amber">65k+</span> People
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-white/60">
              Every single testimonial is a testament to the profound impact we
              strive to create every single day.
            </p>
          </div>

          {/* Arrows: On mobile show below text; on desktop right side */}
          <div className="flex items-center gap-3 md:mt-2">
            <ArrowButton direction="prev" onClick={scrollPrev} disabled={!canPrev} />
            <ArrowButton direction="next" onClick={scrollNext} disabled={!canNext} />
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-8 sm:mt-10">
          <div
            ref={scrollerRef}
            tabIndex={0}
            aria-label="Testimonials carousel"
            className={[
              "flex gap-4 sm:gap-6 overflow-x-auto pb-3",
              "scroll-smooth snap-x snap-mandatory",
              "focus:outline-none",
              "[&::-webkit-scrollbar]:h-2",
              "[&::-webkit-scrollbar-track]:bg-transparent",
              "[&::-webkit-scrollbar-thumb]:bg-white/10",
              "[&::-webkit-scrollbar-thumb]:rounded-full",
            ].join(" ")}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className={[
                  "snap-start",
                  // ✅ Mobile: one card nearly full width (looks best)
                  "min-w-[92%]",
                  // ✅ Small tablets: 2 cards
                  "sm:min-w-[70%]",
                  "md:min-w-[48%]",
                  // ✅ Desktop: 3 cards
                  "lg:min-w-[32%]",
                ].join(" ")}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Mobile hint hidden on bigger screens */}
          <div className="mt-3 text-xs text-white/40 sm:hidden">
            Swipe to see more → (or use arrows)
          </div>
        </div>
      </div>
    </section>
  );
}
