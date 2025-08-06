import React, { useEffect } from "react";
import Header from '../../components/Header';
import { ImageCarousel } from "../../components/ImageCarousel";

// Impor-impor lainnya
import BackgroundImage from '../../assets/images/TentangBackground.webp';
import SorakGallery1 from '../../assets/images/Tentang1.webp';
import SorakGallery2 from '../../assets/images/Tentang2.webp';
import SorakGallery3 from '../../assets/images/Tentang3.webp';
import SorakGallery4 from '../../assets/images/Tentang4.webp';
import SorakGallery5 from '../../assets/images/Tentang5.webp';
import SorakGallery6 from '../../assets/images/Tentang6.webp';
import SorakGallery7 from '../../assets/images/Tentang7.webp';
import SorakGallery8 from '../../assets/images/Tentang8.webp';
import SorakGallery9 from '../../assets/images/Tentang9.webp';
import SorakGallery10 from '../../assets/images/Tentang10.webp';
import SorakGallery11 from '../../assets/images/Tentang11.webp';

export const TentangPage = () => {
  // Data galeri (tidak ada perubahan)
  const sorakKeruakGallery = [
    { src: SorakGallery1, alt: 'Kegiatan KKN Sorak Keruak 1' },
    { src: SorakGallery2, alt: 'Kegiatan KKN Sorak Keruak 2' },
    { src: SorakGallery3, alt: 'Kegiatan KKN Sorak Keruak 3' },
    { src: SorakGallery4, alt: 'Kegiatan KKN Sorak Keruak 4' },
    { src: SorakGallery5, alt: 'Kegiatan KKN Sorak Keruak 5' },
    { src: SorakGallery6, alt: 'Kegiatan KKN Sorak Keruak 1' },
    { src: SorakGallery7, alt: 'Kegiatan KKN Sorak Keruak 2' },
    { src: SorakGallery8, alt: 'Kegiatan KKN Sorak Keruak 3' },
    { src: SorakGallery9, alt: 'Kegiatan KKN Sorak Keruak 4' },
    { src: SorakGallery10, alt: 'Kegiatan KKN Sorak Keruak 5' },
    { src: SorakGallery11, alt: 'Kegiatan KKN Sorak Keruak 5' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0b3848]">
      {/* Bagian Hero Section */}
      <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center items-center pt-24 pb-0">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Tentang background" src={BackgroundImage} />

        <div className="absolute inset-0 bg-[#0b3848]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>

        <div className="absolute top-0 left-0 right-0">
            <Header />
        </div>

        {/* === KONTEN HERO DENGAN STYLE 3 === */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            {/* Pembungkus untuk judul dan overlay-nya */}
            <div className="relative mb-6">
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-[#0b3848] opacity-0 rounded-lg blur-xl"></div>
              <h1 className="relative text-5xl sm:text-7xl font-display text-[#f0843b]">
                  Tentang Sorak Keruak.
              </h1>
            </div>

            {/* Pembungkus untuk deskripsi dan overlay-nya */}
            <div className="relative mt-6 max-w-2xl">
              <div className="absolute inset-0 bg-[#0b3848] opacity-0 rounded-full blur-2xl"></div>
              <div className="relative flex flex-col gap-4 mx-auto text-sm sm:text-base text-white/90 text-justify p-4 font-sans">
                <p>
                  Selamat datang di situs resmi Tim KKN-PPM UGM Unit Sorak Keruak. Website ini didedikasikan untuk mendokumentasikan dan mempromosikan potensi bahari, budaya, dan pariwisata di Kecamatan Keruak, Lombok Timur, sebagai bagian dari program pengabdian kepada masyarakat.
                </p>
              </div>
            </div>

        </div>
      </div>

      {/* Bagian Galeri */}
      <section className="relative pb-24 -mt-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-display text-white">
            Galeri Sorak Keruak
          </h2>
          <ImageCarousel images={sorakKeruakGallery} />
        </div>
      </section>
    </div>
  );
};