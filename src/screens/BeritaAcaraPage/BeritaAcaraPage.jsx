import React, { useEffect } from "react";
import Header from "../../components/Header";
import BackgroundImage from '../../assets/images/OnProgress.webp';

export const BeritaAcaraPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0b3848]">
      {/* Bagian Hero Section */}
      <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center items-center">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Keruak landscape view" src={BackgroundImage} />
        
        <div className="absolute inset-0 bg-[#0b3848]/0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>

        {/* === FOKUS PERUBAHAN DI SINI === */}
        {/* Header dibungkus agar posisinya absolut di atas */}
        <div className="absolute top-0 left-0 right-0">
          <Header />
        </div>
        {/* === AKHIR DARI FOKUS PERUBAHAN === */}
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <section className="py-20 sm:py-28 text-center flex flex-col items-center">
            
            <div className="relative mb-6">
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-[#0b3848] opacity-40 rounded-lg blur-xl"></div>
              <h1 className="relative text-5xl sm:text-7xl font-display">
                On Progress.
              </h1>
            </div>
            
            <div className="relative mt-6 max-w-2xl">
              <div className="absolute inset-0 bg-[#0b3848] opacity-50 rounded-full blur-2xl"></div>
              <div className="relative flex flex-col gap-4 mx-auto text-sm sm:text-base text-white/90 text-center p-4 font-sans">
                <p>Mohon ditunggu nggih.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};