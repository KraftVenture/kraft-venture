import Hero from "../../shared/components/ui/Hero/Hero";
import ServicesCarousel from "../../shared/components/ui/Services/ServicesCarousel";
import TestimonialsSection from "../../shared/components/ui/Testimonials/TestimonialsSection";

/**
 * Home page component
 * Public landing page for the marketing site
 */
export function HomePage() {
  return (
    <div>
      <Hero />

      <ServicesCarousel />

      <TestimonialsSection />
    </div>
  );
}
