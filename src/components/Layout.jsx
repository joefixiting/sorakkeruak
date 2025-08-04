import React, { useState } from 'react';
import NavList from './NavList';
import MenuButton from './MenuButton';
import Footer from './Footer';

const Layout = ({ children, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Pariwisata', href: '/pariwisata' },
    { name: 'Budaya', href: '/budaya' },
    { name: 'Lingkungan', href: '/lingkungan' },
    { name: 'Pangan', href: '/pangan' },
    { name: 'Berita Acara', href: '/beritaacara' },
    { name: 'Tentang', href: '/tentang' } // Updated href
  ];

  return (
    <div className="bg-[#0b3848] text-white font-sans">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-3 {
           overflow: hidden;
           display: -webkit-box;
           -webkit-box-orient: vertical;
           -webkit-line-clamp: 2;
        }
      `}</style>

      <MenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
      <NavList
        isOpen={isMenuOpen}
        onToggle={toggleMenu}
        links={navLinks}
        navigate={navigate}
      />

      <main className={`min-h-screen ${isMenuOpen ? 'overflow-hidden' : ''}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
