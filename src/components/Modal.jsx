import React, { useEffect } from 'react';

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#0B3848] rounded-lg shadow-2xl max-w-2xl w-full h-[70vh] flex flex-col relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20"
          aria-label="Tutup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Static Header Part */}
        <div className="flex-shrink-0">
          <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <div className="text-center pb-4">
            <h2 className="text-3xl font-bold text-white">{data.title}</h2>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-hidden flex-grow relative">
          {/* Inner scrolling content with consistent padding */}
          <div className="absolute inset-0 overflow-y-auto scrollbar-hide px-6 pb-6">
            <p className="text-white/80 text-justify whitespace-pre-wrap">{data.description}</p>
          </div>
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B3848] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;