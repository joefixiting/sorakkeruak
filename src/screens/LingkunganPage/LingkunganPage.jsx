import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { ImageCarousel } from "../../components/ImageCarousel";

// Gambar latar dan galeri masih pakai yang lama
import TanjungLuarBackground from '../../assets/images/LingkunganBackground.webp';
import KetapangRayaBackground from '../../assets/images/CUDBackground.webp';
import tlGallery1 from '../../assets/images/LK2.webp';
import tlGallery2 from '../../assets/images/LK1.webp';
import tlGallery3 from '../../assets/images/LK3.webp';
import tlGallery4 from '../../assets/images/LK4.webp';
import tlGallery5 from '../../assets/images/LK5.webp';
import krGallery1 from '../../assets/images/LK7.webp';
import krGallery2 from '../../assets/images/LK8.webp';
import krGallery3 from '../../assets/images/LK6.webp';
import krGallery4 from '../../assets/images/LK9.webp';
import krGallery5 from '../../assets/images/LK10.webp';

export const LingkunganPage = () => {
  const mangroveGallery = [
    { src: tlGallery1, alt: 'Penanaman mangrove oleh peserta' },
    { src: tlGallery2, alt: 'Akar mangrove yang ditanam' },
    { src: tlGallery3, alt: 'Relawan menanam mangrove' },
    { src: tlGallery4, alt: 'Peserta menanam bibit mangrove' },
    { src: tlGallery5, alt: 'Pemandangan area penanaman mangrove' },
  ];

  const cleanUpGallery = [
    { src: krGallery1, alt: 'Peserta clean-up di pantai' },
    { src: krGallery2, alt: 'Sampah plastik yang dikumpulkan' },
    { src: krGallery3, alt: 'Pembersihan garis pantai oleh relawan' },
    { src: krGallery4, alt: 'Sampah organik dan anorganik terpilah' },
    { src: krGallery5, alt: 'Tim clean-up berpose bersama' },
  ];

  const pageData = [
    {
      title: "Aksi Penanaman Mangrove.",
      paragraphs: [
        "Kegiatan penanaman mangrove yang dilakukan di pesisir Desa Tanjung Luar menjadi bagian penting dalam upaya konservasi lingkungan pesisir. Mangrove memiliki peran vital dalam melindungi garis pantai dari abrasi, menyediakan habitat bagi berbagai biota laut, serta menyerap emisi karbon.",
        "Dalam kegiatan ini, peserta dari berbagai kalangan ikut serta menanam ratusan bibit mangrove. Selain sebagai aksi nyata pelestarian lingkungan, kegiatan ini juga menjadi media edukasi bagi masyarakat mengenai pentingnya menjaga ekosistem pesisir yang berkelanjutan."
      ],
      background: TanjungLuarBackground,
      gallery: mangroveGallery,
      galleryTitle: "Galeri Penanaman Mangrove",
    },
    {
      title: "Clean-Up Day: Bersih-Bersih Pantai.",
      paragraphs: [
        "Pantai adalah salah satu ekosistem yang rentan terhadap pencemaran, terutama oleh sampah plastik. Melalui kegiatan Clean-Up Day yang dilaksanakan di sepanjang pesisir Ketapang Raya, ratusan kilogram sampah berhasil dikumpulkan dan dipilah.",
        "Kegiatan ini tidak hanya bertujuan untuk membersihkan lingkungan, tetapi juga untuk meningkatkan kesadaran masyarakat akan dampak negatif sampah terhadap biota laut dan kesehatan manusia. Dengan semangat gotong royong, peserta menunjukkan bahwa menjaga kebersihan lingkungan adalah tanggung jawab bersama."
      ],
      background: KetapangRayaBackground,
      gallery: cleanUpGallery,
      galleryTitle: "Galeri Clean-Up Day",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
    window.scrollTo(0, 0);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev < pageData.length - 1 ? prev + 1 : prev));
    window.scrollTo(0, 0);
  };

  const currentView = pageData[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out" alt="Background" src={currentView.background} key={currentView.background}/>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0b3848]/0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>

        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {currentIndex > 0 && (
            <button onClick={goToPrevious} className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </button>
          )}

          <section className="py-20 sm:py-28 text-center flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-[#0b3848] opacity-40 rounded-lg blur-xl"></div>
              <h1 className="relative text-5xl sm:text-7xl font-display">
                {currentView.title}
              </h1>
            </div>

            <div className="relative max-w-2xl">
              <div className="absolute inset-0 bg-[#0b3848] opacity-50 rounded-full blur-2xl"></div>
              <div className="relative flex flex-col gap-4 mx-auto text-sm sm:text-base text-white/90 text-justify p-4 font-sans">
                {currentView.paragraphs.map((p, index) => <p key={index}>{p}</p>)}
              </div>
            </div>
          </section>

          {currentIndex < pageData.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </button>
          )}
        </div>
      </div>

      {/* Gallery */}
      <section className="relative pb-24 -mt-0">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-display">
            {currentView.galleryTitle}
          </h2>
          <ImageCarousel images={currentView.gallery} />
        </div>
      </section>
    </>
  );
};
