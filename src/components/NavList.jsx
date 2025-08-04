import React from 'react';

const NavList = ({ isOpen, onToggle, links, navigate }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-20
                   transition-opacity duration-300 ease-in-out
                   ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onToggle}
        aria-hidden="true"
      ></div>
      <nav
        // --- LEBAR DIPERKECIL LAGI DI SINI ---
        className={`fixed top-0 right-0 h-full w-56 sm:w-72 bg-[#0b3848]/25 backdrop-blur-md shadow-lg z-30
                   transform transition-transform duration-500 ease-in-out
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-8 pt-24 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/')) {
                  e.preventDefault();
                  navigate(link.href);
                }
                onToggle();
              }}
              className="text-white text-lg hover:text-[#f0843b] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavList;