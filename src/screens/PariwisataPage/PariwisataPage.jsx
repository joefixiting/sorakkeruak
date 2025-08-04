import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { ImageCarousel } from "../../components/ImageCarousel";

// Impor-impor lainnya
import TanjungLuarBackground from '../../assets/images/ParwisTLBackground.png';
import KetapangRayaBackground from '../../assets/images/ParwisKTPRBackground.svg';
import tlGallery1 from '../../assets/images/TL1.png';
import tlGallery2 from '../../assets/images/TL2.png';
import tlGallery3 from '../../assets/images/TL3.png';
import tlGallery4 from '../../assets/images/TL4.png';
import tlGallery5 from '../../assets/images/TL5.png';
import krGallery1 from '../../assets/images/ktpr1.png';
import krGallery2 from '../../assets/images/ktpr2.png';
import krGallery3 from '../../assets/images/ktpr3.png';
import krGallery4 from '../../assets/images/ktpr4.png';
import krGallery5 from '../../assets/images/ktpr5.png';

export const PariwisataPage = () => {
  // Definisi data (tidak ada perubahan)
  const tanjungLuarGallery = [
    { src: tlGallery1, alt: 'Suasana pelelangan ikan di Tanjung Luar' },
    { src: tlGallery2, alt: 'Perahu nelayan Suku Bajo' },
    { src: tlGallery3, alt: 'Perahu nelayan Suku Bajo' },
    { src: tlGallery4, alt: 'Perahu nelayan Suku Bajo' },
    { src: tlGallery5, alt: 'Perahu nelayan Suku Bajo' },
  ];

  const ketapangRayaGallery = [
    { src: krGallery1, alt: 'Hamparan garam di Ketapang Raya' },
    { src: krGallery2, alt: 'Pesisir pantai Lungkak' },
    { src: krGallery3, alt: 'Pesisir pantai Lungkak' },
    { src: krGallery4, alt: 'Pesisir pantai Lungkak' },
    { src: krGallery5, alt: 'Pesisir pantai Lungkak' },
  ];

  const pageData = [
    {
      title: "Tanjung Luar.",
      paragraphs: [
        "Dermaga Tanjung Luar adalah salah satu destinasi wisata favorit di Kecamatan Keruak yang menawarkan pemandangan laut yang memukau. Dermaga ini menjadi tempat favorit wisatawan yang ingin menikmati keindahan alam, terutama saat matahari terbit. Dengan hamparan laut biru yang luas serta panorama Samudra Hindia yang memesona, Dermaga Tanjung Luar adalah tempat sempurna untuk melepas penat, mengabadikan momen indah lewat lensa kamera, atau sekadar duduk tenang menikmati semilir angin laut. Lebih dari sekadar spot wisata, Dermaga Tanjung Luar adalah ruang refleksi, tempat di mana keindahan alam dan ketenangan berpadu sempurna dalam satu pengalaman yang sulit dilupakan."
      ],
      background: TanjungLuarBackground,
      gallery: tanjungLuarGallery,
      galleryTitle: "Dermaga Tanjung Luar",
    },
    {
      title: "Ketapang Raya.",
      paragraphs: [
        'Di ujung timur Pulau Lombok tersembunyi sebuah surga yang jarang dijamah wisatawan: Pantai Lungkak. Berbeda dari keramaian Pantai Pink atau Pantai Tanjung Aan, pantai ini menawarkan pengalaman yang jauh lebih damai dan autentik. Lautnya yang biru, pasir yang halus, dan suasananya tenang memanjakan tiap wisatawan yang berkunjung. Di kejauhan, deretan pulau-pulau kecil tampak anggun menghiasi cakrawala, menciptakan panorama yang begitu memukau dan menenangkan jiwa. Pantai Lungkak bukan sekadar destinasi; ia adalah tempat pelarian bagi siapa pun yang ingin kembali menyatu dengan alam dan menikmati keindahan yang masih autentik.'
      ],
      background: KetapangRayaBackground,
      gallery: ketapangRayaGallery,
      galleryTitle: "Pantai Lungkak",
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
      {/* Bagian Hero Section */}
      <div className="relative isolate overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out" alt="Background" src={currentView.background} key={currentView.background}/>
        
        {/* === FOKUS PERUBAHAN DI SINI === */}
        {/* Overlay 1: Lapisan warna biru dengan opasitas 70% */}
        <div className="absolute inset-0 bg-[#0b3848]/0"></div>
        {/* Overlay 2: Lapisan gradien dari atas dan bawah */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>
        {/* === AKHIR DARI FOKUS PERUBAHAN === */}

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

      {/* Bagian Galeri Desa */}
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