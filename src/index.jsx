import { StrictMode, useState, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import '../tailwind.css';
import Layout from "./components/Layout";

// --- PERUBAHAN 1: Impor semua halaman menggunakan React.lazy ---
const LandingPage = lazy(() => import("./screens/LandingPage").then(module => ({ default: module.LandingPage })));
const PanganPage = lazy(() => import("./screens/PanganPage").then(module => ({ default: module.PanganPage })));
const TentangPage = lazy(() => import("./screens/TentangPage").then(module => ({ default: module.TentangPage })));
const PariwisataPage = lazy(() => import("./screens/PariwisataPage").then(module => ({ default: module.PariwisataPage })));
const LingkunganPage = lazy(() => import("./screens/LingkunganPage").then(module => ({ default: module.LingkunganPage })));
const BudayaPage = lazy(() => import("./screens/BudayaPage").then(module => ({ default: module.BudayaPage })));
const BeritaAcaraPage = lazy(() => import("./screens/BeritaAcaraPage").then(module => ({ default: module.BeritaAcaraPage })));

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

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
    case '/beritaacara': // Pastikan path ini sesuai dengan link di NavList
      PageComponent = <BeritaAcaraPage />; 
      break;
    default:
      PageComponent = <LandingPage />;
  }

  return (
    <Layout navigate={navigate}>
      {/* --- PERUBAHAN 2: Bungkus komponen halaman dengan Suspense --- */}
      <Suspense fallback={<div className="min-h-screen flex justify-center items-center">Loading...</div>}>
        {PageComponent}
      </Suspense>
    </Layout>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);