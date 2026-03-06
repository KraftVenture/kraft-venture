import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

/**
 * Portal Dashboard component
 * Main dashboard for authenticated clients
 */
export function PortalDashboard() {
  const [cookie, _] = useCookies(["adminToken"])
  const navigate = useNavigate()

  useEffect(() => {
    if (!cookie.adminToken) {
      navigate('/')
    }
  }, [cookie])
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        List of Form Submissions
      </h1>
      {/* <p className="text-gray-600 dark:text-gray-400">
        Download
      </p> */}
      <a href={`${import.meta.env.VITE_APP_URL}/export`} download>
        <button style={{ backgroundColor: "red", padding: "0.5vw" }}>Export to Excel</button>
      </a>
    </div>
  );
}
