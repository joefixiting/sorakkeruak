import React, { useEffect } from "react";
import Header from '../../components/Header';
import { ImageCarousel } from "../../components/ImageCarousel";

// Impor-impor lainnya
import BackgroundImage from '../../assets/images/TentangBackground.png';
import SorakGallery1 from '../../assets/images/Tentang1.JPG';
import SorakGallery2 from '../../assets/images/Tentang2.JPG';
import SorakGallery3 from '../../assets/images/Tentang3.JPG';
import SorakGallery4 from '../../assets/images/Tentang4.JPG';
import SorakGallery5 from '../../assets/images/Tentang5.JPG';
import SorakGallery6 from '../../assets/images/Tentang6.JPG';
import SorakGallery7 from '../../assets/images/Tentang7.JPG';
import SorakGallery8 from '../../assets/images/Tentang8.JPG';
import SorakGallery9 from '../../assets/images/Tentang9.JPG';
import SorakGallery10 from '../../assets/images/Tentang10.JPG';
import SorakGallery11 from '../../assets/images/Tentang11.JPG';

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
    // Kita tambahkan bg-[#0b3848] di sini agar ada warna dasar jika gambar utama belum termuat
    <div className="bg-[#0b3848]">
      {/* Bagian Hero Section */}
      <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center items-center pt-24 pb-0">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Tentang background" src={BackgroundImage} />

        <div className="absolute inset-0 bg-[#0b3848]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>

        <div className="absolute top-0 left-0 right-0">
            <Header />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <h1 className="text-5xl sm:text-7xl font-display text-[#f0843b]">
                Tentang Sorak Keruak.
            </h1>
            <p className="mt-8 text-lg text-white/90 max-w-3xl mx-auto text-center font-sans">
                Selamat datang di situs resmi Tim KKN-PPM UGM Unit LOT-03 Sorak Keruak. Website ini didedikasikan untuk mendokumentasikan dan mempromosikan potensi bahari, budaya, dan pariwisata di Kecamatan Keruak, Lombok Timur, sebagai bagian dari program pengabdian kepada masyarakat.
            </p>
        </div>
      </div>

      {/* Bagian Galeri */}
      {/* --- LATAR BELAKANG BIRU DIHAPUS DARI SINI --- */}
      <section className="relative pb-24 -mt-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-display text-white">
            Galeri Tim KKN
          </h2>
          <ImageCarousel images={sorakKeruakGallery} />
        </div>
      </section>
    </div>
  );
};