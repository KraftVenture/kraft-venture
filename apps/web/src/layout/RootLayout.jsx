import { Outlet } from "react-router-dom";
import Navbar from "@/shared/components/ui/Navbar/Navbar";
/**
 * Root layout for public routes
 * Used for marketing site, landing pages, and public-facing content
 */
export function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation will go here */}
      <Navbar />

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer will go here */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Kraft Venture. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
