import React, { useRef, useEffect } from 'react';
import Card from './Card';
import CardContent from './CardContent';

const Carousel = ({ data, onCardClick }) => {
  const scrollContainerRef = useRef(null);

  const handleNavClick = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNavClick('next');
      } else if (e.key === 'ArrowLeft') {
        handleNavClick('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      {/* Previous Button */}
      <button onClick={() => handleNavClick('prev')} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 z-10 transition-colors hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Carousel Viewport */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 px-2"
      >
        {data.map((item) => (
          <div 
            key={item.id} 
            className="w-10/12 md:w-1/3 flex-shrink-0 snap-center cursor-pointer"
            onClick={() => onCardClick(item)} // Fire the click handler for the parent
          >
            <Card className="h-full flex flex-col pointer-events-none"> {/* pointer-events-none so the parent div handles the click */}
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardContent className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm text-justify line-clamp-3">
                    {item.description}
                  </p>
                </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button onClick={() => handleNavClick('next')} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 z-10 transition-colors hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

export default Carousel;