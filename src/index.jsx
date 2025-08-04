import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import '../tailwind.css';
import { LandingPage } from "./screens/LandingPage";
import { PanganPage } from "./screens/PanganPage";
import { TentangPage } from "./screens/TentangPage";
import { PariwisataPage } from "./screens/PariwisataPage";
import { LingkunganPage } from "./screens/LingkunganPage";
import { BudayaPage } from "./screens/BudayaPage";
import { BeritaAcaraPage } from "./screens/BeritaAcaraPage";
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

  // --- EFEK INI DITAMBAHKAN ---
  // Secara otomatis scroll ke atas setiap kali halaman (path) berubah.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]); // Efek ini bergantung pada `path`

  let PageComponent;
  switch (path) {
    case '/pangan':
      PageComponent = <PanganPage />;
      break;
    case '/tentang':
      PageComponent = <TentangPage />;
      break;
    case '/pariwisata': 
      PageComponent = <PariwisataPage />;
      break;
    case '/lingkungan': 
      PageComponent = <LingkunganPage />;
      break;
    case '/budaya':
      PageComponent = <BudayaPage />; 
      break;
    case '/beritaacara':
      PageComponent = <BeritaAcaraPage />; 
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