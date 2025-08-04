import React from 'react';
import Header from '../../components/Header';

import BackgroundImage from '../../assets/images/background.svg';

const TentangBackgroundImage = BackgroundImage;

export const TentangPage = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden h-screen flex flex-col justify-center bg-[#0b3848]">
        <img className="absolute inset-0 w-full h-full object-contain" alt="Tentang background" src={TentangBackgroundImage} />
        {/* The solid blue tint */}
        <div className="absolute inset-0 bg-[#0b3848]/70"></div>
        {/* The new gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>
        <div className="absolute top-0 left-0 right-0">
            <Header />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <section className="text-center flex flex-col items-center">
                <h1 className="text-5xl sm:text-7xl font-bold text-[#f0843b]" style={{ fontFamily: "'Beautique_Display-Bold', Helvetica" }}>
                    Tentang Sorak Keruak
                </h1>
                <p className="mt-8 text-lg text-white/90 max-w-3xl mx-auto text-center">
                    Selamat datang di situs resmi Tim KKN-PPM UGM Unit LOT-03 Sorak Keruak. Website ini didedikasikan untuk mendokumentasikan dan mempromosikan potensi bahari, budaya, dan pariwisata di Kecamatan Keruak, Lombok Timur, sebagai bagian dari program pengabdian kepada masyarakat.
                </p>
            </section>
        </div>
      </div>
    </>
  );
};