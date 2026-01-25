import { Outlet } from "react-router-dom";
import Navbar from "@/shared/components/ui/Navbar/Navbar";
import Footer from "../shared/components/ui/Footer/Footer";
/**
 * Root layout for public routes
 * Used for marketing site, landing pages, and public-facing content
 */
export function RootLayout() {
  return (
    <div className="min-h-screen">
      {/* Navigation will go here */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer will go here */}
      <Footer />
    </div>
  );
}
