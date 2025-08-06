import React, { useState, useRef, useEffect } from 'react';

// --- 1. KOMPONEN BARU UNTUK MENAMPILKAN GAMBAR FULLSCREEN ---
const ImageModal = ({ src, onClose }) => (
  // Latar belakang gelap (overlay)
  <div 
    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
    onClick={onClose} // Klik di luar gambar akan menutup modal
  >
    {/* Tombol close di pojok kanan atas */}
    <button 
      className="absolute top-4 right-4 text-white text-3xl hover:opacity-80"
      onClick={onClose}
    >
      &times;
    </button>
    <img
      src={src}
      alt="Fullscreen view"
      className="max-w-full max-h-full object-contain"
      onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar diklik
    />
  </div>
);

// Komponen reusable untuk ikon panah (tidak ada perubahan)
const Arrow = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
      direction === 'left' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'
    }`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      )}
    </svg>
  </button>
);


export const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  // --- 2. STATE BARU UNTUK MODAL ---
  const [modalImage, setModalImage] = useState(null);
  
  const listRef = useRef(null);

  useEffect(() => {
    setActiveIndex(Math.floor(images.length / 2));
  }, [images]);

  const goToPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goToNext = () => setActiveIndex((prev) => Math.min(prev + 1, images.length - 1));

  useEffect(() => {
    if (listRef.current?.children[activeIndex]) {
      listRef.current.children[activeIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeIndex, images]);

  return (
    <>
      <div className="w-full relative">
        <Arrow onClick={goToPrev} direction="left" disabled={activeIndex === 0} />

        <div
          ref={listRef}
          className="flex items-center gap-4 overflow-x-auto py-8 px-12 scrollbar-hide"
        >
          {images.map((image, index) => (
            // --- 3. TAMBAHKAN ONCLICK DAN CURSOR-POINTER ---
            <div
              key={`${image.src}-${index}`}
              className={`flex-shrink-0 transition-transform duration-300 ease-in-out cursor-pointer ${
                activeIndex === index ? 'transform scale-125 z-10' : 'transform scale-100 opacity-70'
              }`}
              onClick={() => setModalImage(image.src)} // <-- Klik untuk membuka modal
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-64 h-40 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <Arrow onClick={goToNext} direction="right" disabled={activeIndex === images.length - 1} />
      </div>

      {/* --- 4. RENDER MODAL JIKA ADA GAMBAR YANG DIPILIH --- */}
      {modalImage && (
        <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
      )}
    </>
  );
};