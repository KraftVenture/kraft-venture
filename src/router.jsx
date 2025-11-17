import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { PortalLayout } from "./layout/PortalLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { HomePage } from "./routes/public/HomePage";
import { PortalDashboard } from "./routes/portal/PortalDashboard";
import { AdminDashboard } from "./routes/admin/AdminDashboard";
import About from "./routes/public/About";

/**
 * Main router configuration
 * Routes are organized by layout:
 * - Public routes (marketing, landing pages)
 * - Portal routes (client portal)
 * - Admin routes (admin dashboard)
 */
export function Router() {
  return (
    <Routes>
      {/* Public routes - Marketing site, landing pages */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Add more public routes here */}
      </Route>

      {/* Client portal routes - Client portal access */}
      <Route path="/portal" element={<PortalLayout />}>
        <Route index element={<PortalDashboard />} />
        {/* Add more portal routes here */}
      </Route>

      {/* Admin routes - Admin dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        {/* Add more admin routes here */}
      </Route>
    </Routes>
  );
}
