import React, { useEffect } from "react";
import Header from '../../components/Header';
import { ImageCarousel } from "../../components/ImageCarousel";

// Asset Imports
import BackgroundImage from '../../assets/images/BudayaBackground.webp';
import SorakGallery1 from '../../assets/images/Budaya1.webp';
import SorakGallery2 from '../../assets/images/Budaya2.webp';
import SorakGallery3 from '../../assets/images/Budaya3.webp';
import SorakGallery4 from '../../assets/images/Budaya4.webp';
import SorakGallery5 from '../../assets/images/Budaya5.webp';
import SorakGallery6 from '../../assets/images/Budaya6.webp';
import SorakGallery7 from '../../assets/images/Budaya7.webp';
import SorakGallery8 from '../../assets/images/Budaya8.webp';
import SorakGallery9 from '../../assets/images/Budaya9.webp';
import SorakGallery10 from '../../assets/images/Budaya10.webp';
import SorakGallery11 from '../../assets/images/Budaya11.webp';

export const BudayaPage = () => {
  const sorakKeruakGallery = [
    { src: SorakGallery1, alt: 'Kegiatan KKN Sorak Keruak 1' },
    { src: SorakGallery2, alt: 'Kegiatan KKN Sorak Keruak 2' },
    { src: SorakGallery3, alt: 'Kegiatan KKN Sorak Keruak 3' },
    { src: SorakGallery4, alt: 'Kegiatan KKN Sorak Keruak 4' },
    { src: SorakGallery5, alt: 'Kegiatan KKN Sorak Keruak 5' },
    { src: SorakGallery6, alt: 'Kegiatan KKN Sorak Keruak 6' },
    { src: SorakGallery7, alt: 'Kegiatan KKN Sorak Keruak 7' },
    { src: SorakGallery8, alt: 'Kegiatan KKN Sorak Keruak 8' },
    { src: SorakGallery9, alt: 'Kegiatan KKN Sorak Keruak 9' },
    { src: SorakGallery10, alt: 'Kegiatan KKN Sorak Keruak 10' },
    { src: SorakGallery11, alt: 'Kegiatan KKN Sorak Keruak 11' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0b3848]">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Budaya background" src={BackgroundImage} />
        
        <div className="absolute inset-0 bg-[#0b3848]/0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>

        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <section className="py-20 sm:py-28 text-center flex flex-col items-center">
            
            {/* Title with blurred background */}
            <div className="relative mb-6">
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-[#0b3848] opacity-40 rounded-lg blur-xl"></div>
              <h1 className="relative text-5xl sm:text-7xl font-display">
                Nyalamak Dilauq.
              </h1>
            </div>
            
            {/* Paragraphs with blurred background */}
            <div className="relative mt-6 max-w-2xl">
              <div className="absolute inset-0 bg-[#0b3848] opacity-50 rounded-full blur-2xl"></div>
              <div className="relative flex flex-col gap-4 mx-auto text-sm sm:text-base text-white/90 text-justify p-4 font-sans">
                <p>Nyalamak Dilauq adalah sebuah upacara adat warisan Suku Bajo di Desa Tanjung Luar. Tradisi ini merupakan bentuk rasa syukur kepada Tuhan atas hasil laut yang melimpah sekaligus menjadi doa untuk memohon keselamatan bagi para nelayan saat melaut. Diselenggarakan secara turun-temurun, ritual ini telah menjadi bagian tak terpisahkan dari identitas budaya masyarakat pesisir Keruak.</p>
                <p>Prosesi ini melibatkan pelarungan kepala kerbau ke tengah laut yang diiringi oleh perahu-perahu hias. Nyalamak Dilauq bukan sekadar ritual, melainkan juga pesta rakyat yang meriah, mempererat ikatan sosial, dan menjadi daya tarik budaya yang unik, merefleksikan kearifan lokal dalam menjaga harmoni antara manusia dan alam.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* Gallery Section */}
      <section className="relative pb-16 sm:pb-24 -mt-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-display text-white">
            Dokumentasi
          </h2>
          <ImageCarousel images={sorakKeruakGallery} />
        </div>
      </section>
    </div>
  );
};