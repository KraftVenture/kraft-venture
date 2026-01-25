import { Element } from "react-scroll";
import Hero from "../../shared/components/ui/Hero/Hero";
import ServicesCarousel from "../../shared/components/ui/Services/ServicesCarousel";
import TestimonialsSection from "../../shared/components/ui/Testimonials/TestimonialsSection";
import { useEffect } from "react";

/**
 * Home page component
 * Public landing page for the marketing site
 */
export function HomePage() {

  useEffect(() => {
  const fn = () => {
    scroller.scrollTo("testimonials", {
      smooth: true,
      duration: 500,
      offset: -110,
    });
  };
  window.addEventListener("kv-scroll-testimonials", fn);
  return () => window.removeEventListener("kv-scroll-testimonials", fn);
}, []);

  return (
    <div>
      <Hero />

      <ServicesCarousel />

      <Element name="testimonials">
        <TestimonialsSection />
      </Element>
    </div>
  );
}
