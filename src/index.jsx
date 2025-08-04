import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import '../tailwind.css';
import { LandingPage } from "./screens/LandingPage";
import { PanganPage } from "./screens/PanganPage";
import { TentangPage } from "./screens/TentangPage"; // Import the new page
import { PariwisataPage } from "./screens/PariwisataPage"; // Import the new page
import { LingkunganPage } from "./screens/LingkunganPage"; // Import the new page
import Layout from "./components/Layout";

const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  const navigate = (newPath) => {
    window.history.pushState({}, newPath, window.location.origin + newPath);
    setPath(newPath);
  };

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  let PageComponent;
  switch (path) {
    case '/pangan':
      PageComponent = <PanganPage />;
      break;
    case '/tentang': // New route for the "Tentang" page
      PageComponent = <TentangPage />;
      break;
    case '/pariwisata': 
      PageComponent = <PariwisataPage />;
      break;
      case '/lingkungan': 
      PageComponent = <LingkunganPage />;
      break;

    default:
      PageComponent = <LandingPage />;
  }

  return (
    <Layout navigate={navigate}>
      {PageComponent}
    </Layout>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);