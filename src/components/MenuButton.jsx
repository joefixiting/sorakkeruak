import React from 'react';

const MenuButton = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle navigation menu"
      className={`fixed top-4 h-10 w-10 text-white/80 hover:text-white z-40
                  transition-all duration-500 ease-in-out
                  ${isOpen ? 'right-4' : 'right-4 sm:right-6 lg:right-8'}`}
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-4 w-6 -translate-x-1/2 -translate-y-1/2"
      >
        <span
          className={`absolute left-0 block h-[3px] w-full rounded-full bg-current
                      transition-all duration-300 ease-in-out
                      ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}
        ></span>
        <span
          className={`absolute left-0 block h-[3px] w-full rounded-full bg-current
                      transition-all duration-300 ease-in-out
                      ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;