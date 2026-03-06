import { BrowserRouter, useLocation } from "react-router-dom";
import { Router } from "./router";
import { useEffect } from "react";
import { Toaster } from "sonner";

function App() {

  const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
  };
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
