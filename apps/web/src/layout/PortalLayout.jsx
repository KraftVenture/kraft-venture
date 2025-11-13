import { Outlet } from "react-router-dom";

/**
 * Portal layout for client portal routes
 * Used for client access to projects, tickets, billing, etc.
 * Note: Authentication can be added later when backend is integrated
 */
export function PortalLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Portal navigation will go here */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">Kraft Venture Portal</div>
            {/* Portal navigation items will go here */}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
