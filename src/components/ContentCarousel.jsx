import React, { useState, useRef, useEffect } from 'react';

// Arrow sub-component (can be kept inside or imported if shared)
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

// Note: We use 'items' and 'onItemClick' to be more generic than 'images'
export const ContentCarousel = ({ items, onItemClick }) => {
  // Initialize to the center item
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const listRef = useRef(null);

  useEffect(() => {
    setActiveIndex(Math.floor(items.length / 2));
  }, [items.length]);

  const goToPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goToNext = () => setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));

  useEffect(() => {
    if (listRef.current?.children[activeIndex]) {
      listRef.current.children[activeIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeIndex, items]);

  // This component doesn't render its own modal. It tells the parent what was clicked.
  return (
    <div className="w-full relative">
      <Arrow onClick={goToPrev} direction="left" disabled={activeIndex === 0} />

      <div
        ref={listRef}
        className="flex items-center gap-4 overflow-x-auto py-8 px-12 scrollbar-hide"
      >
        {items.map((item, index) => (
          <div
            key={item.id || index} // Use item.id if available, otherwise fallback to index
            className={`flex-shrink-0 transition-transform duration-300 ease-in-out cursor-pointer ${
              activeIndex === index ? 'transform scale-125 z-10' : 'transform scale-100 opacity-70'
            }`}
            // Pass the entire 'item' object on click
            onClick={() => onItemClick && onItemClick(item)}
          >
            <img
              src={item.image} // Assumes the item object has an 'image' property
              alt={item.title} // Assumes the item object has a 'title' property
              className="w-64 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      <Arrow onClick={goToNext} direction="right" disabled={activeIndex === items.length - 1} />
    </div>
  );
};