import React, { useState, useEffect } from "react"; // <-- 1. Impor useEffect
import Header from '../../components/Header';

import BackgroundImage from '../../assets/images/TentangBackground.png';

const TentangBackgroundImage = BackgroundImage;
  
export const TentangPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      {/* Gunakan min-h-screen agar fleksibel */}
      <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center bg-[#0b3848]">
        {/* Ganti menjadi object-cover agar gambar menutupi seluruh area */}
        <img className="absolute inset-0 w-full h-full object-cover" alt="Tentang background" src={TentangBackgroundImage} />
        
        {/* Overlay dan Gradient */}
        <div className="absolute inset-0 bg-[#0b3848]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>
        
        {/* Header diposisikan di atas */}
        <div className="absolute top-0 left-0 right-0">
            <Header />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <section className="text-center flex flex-col items-center">
                <h1 className="text-5xl sm:text-7xl font-display text-[#f0843b]">
                    Tentang Sorak Keruak.
                </h1>
                <p className="mt-8 text-lg text-white/90 max-w-3xl mx-auto text-center font-sans">
                    Selamat datang di situs resmi Tim KKN-PPM UGM Unit LOT-03 Sorak Keruak. Website ini didedikasikan untuk mendokumentasikan dan mempromosikan potensi bahari, budaya, dan pariwisata di Kecamatan Keruak, Lombok Timur, sebagai bagian dari program pengabdian kepada masyarakat.
                </p>
            </section>
        </div>
      </div>
    </>
  );
};