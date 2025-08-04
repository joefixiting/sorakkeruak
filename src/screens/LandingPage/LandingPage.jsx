import React, { useState, useEffect } from "react"; // <-- 1. Impor useEffect
import Card from "../../components/Card";
import CardContent from "../../components/CardContent";
import Header from "../../components/Header";
import BackgroundImage from '../../assets/images/LandingPageBackground.png';
import TanjungLuarImage from '../../assets/images/tl.svg';
import KetapangRayaImage from '../../assets/images/ktpr.svg';

export const LandingPage = () => {
  const villageData = [
    { id: 1, name: "Desa Tanjung Luar", image: TanjungLuarImage, description: "Desa Tanjung Luar, merupakan desa pesisir di Kecamatan Keruak. Desa dengan keanekaragaman suku menyaratkan kekayaan budaya. Budaya Suku Bajo menghiasi desa ini, tradisi nyalamaq dilauq yang telah diselenggarakan sejak zaman Hindia-Belanda. Selain itu, ciri khas bahari dengan adanya tempat pelelangan ikan di Pasar Tanjung Luar. Tanjung Luar menyimpan berbagai cerita." },
    { id: 2, name: "Desa Ketapang Raya", image: KetapangRayaImage, description: 'Sama halnya dengan Desa Tanjung Luar, berbagai cerita bermuara di Ketapang Raya. Desa ini merupakan pemekaran dari Desa Tanjung Luar. Konon, nama "Ketapang" berasal dari tanaman ketepeng yang banyak tumbuh di wilayah Ketapang Raya. Jajaran garam di Dusun Telaga Bagik dan wisata pesisir Pantai Lungkak.' },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Keruak landscape view" src={BackgroundImage} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-[#0b3848]"></div>
        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <section className="py-20 sm:py-28 text-center flex flex-col items-center">
            
            <div className="relative mb-6">
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-[#0b3848] opacity-40 rounded-lg blur-xl"></div>
              {/* Menggunakan font-display dan menghapus style inline */}
              <h1 className="relative text-5xl sm:text-7xl font-display">
                Keruak.
              </h1>
            </div>
            
            <div className="relative mt-6 max-w-2xl">
              <div className="absolute inset-0 bg-[#0b3848] opacity-50 rounded-full blur-2xl"></div>
              {/* Menggunakan font-sans untuk paragraf */}
              <div className="relative flex flex-col gap-4 mx-auto text-sm sm:text-base text-white/90 text-justify p-4 font-sans">
                <p>Keruak, sebuah kecamatan di pesisir Lombok Timur, Nusa Tenggara Barat, Indonesia. Harta karun bahari, budaya, dan wisata yang tersimpan dalam wilayah geografis seluas 40.49 km². Dimulai dengan etalase bahari Indonesia melalui jajaran hiu di Pasar Tanjung Luar, barisan garam-garam di Desa Ketapang Raya, dan siluet matahari terbit di Pantai Lungkak.</p>
                <p>Setiap sudutnya bercerita. Tentang nelayan yang bersahaja, tentang garam yang mengkristal dari peluh dan laut, tentang warisan budaya yang lestari di tengah tantangan zaman. Jelajah dan bersorak di keruak—gerbang pesisir kearifan bahari, budaya, dan wisata.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-display">
            Jelajahi Desa Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {villageData.map((village) => (
              <Card key={village.id} className="flex flex-col">
                <img src={village.image} alt={village.name} className="w-full h-48 object-contain rounded-t-lg" />
                <CardContent className="flex-grow flex flex-col font-sans">
                  <h3 className="text-xl font-bold mb-2 font-sf-bold">{village.name}</h3>
                  <p className="text-white/80 text-sm flex-grow text-justify">{village.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};