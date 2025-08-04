
import React from 'react';

const Footer = () => {
  const socialMediaLinks = [
    { name: "Instagram", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "Email", href: "#" },
  ];

  return (
    <footer className="bg-black/20 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div className="text-xs">
          <h4 className="font-bold text-lg text-[#f0843b]">SORAK KERUAK</h4>
          <p className="mt-2 text-white/80">KKN-PPM UGM Periode II Tahun 2025</p>
          <p className="mt-4 text-white/60">Copyright © 2025 Sorak Keruak</p>
        </div>
        <nav className="text-sm">
          <p className="font-bold mb-2">Follow Us On:</p>
          <div className="flex flex-col items-center md:items-start gap-1">
            {socialMediaLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white/80 hover:text-[#f0843b] transition-colors">{link.name}</a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;