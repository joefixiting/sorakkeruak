import React, { useState, useEffect } from "react"; // <-- 1. Impor useEffect
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import Modal from '../../components/Modal';
import BackgroundImage from '../../assets/images/IkanBackground.webp'; 

const PanganBackgroundImage = BackgroundImage;

const panganData = [
    {
        id: 1,
        image: 'https://placehold.co/600x400/1a5266/ffffff?text=Ikan+Asin',
        title: 'Ikan Asin & Olahan Laut',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, turpis in vestibulum vulputate, ligula lorem congue urna, sed facilisis nibh sapien sed justo. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non nisi in odio tincidunt suscipit. Sed euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, nec facilisis enim erat in justo. Suspendisse potenti. Donec ac ligula a quam facilisis tincidunt. Sed at felis non leo commodo convallis. Integer in libero sed odio eleifend facilisis. Donec id ligula nec augue efficitur tincidunt. Nulla facilisi. Sed euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, nec facilisis enim erat in justo. Suspendisse potenti. Donec ac ligula a quam facilisis tincidunt. Sed at felis non leo commodo convallis. Integer in libero sed odio eleifend facilisis. Donec id ligula nec augue efficitur tincidunt.',
    },
    {
        id: 2,
        image: 'https://placehold.co/600x400/1a5266/ffffff?text=Garam+Keruak',
        title: 'Garam Tradisional',
        description: 'Di Desa Ketapang Raya, petani garam secara turun-temurun memproduksi garam berkualitas tinggi dengan metode tradisional yang mengandalkan terik matahari Lombok.'
    },
    {
        id: 3,
        image: 'https://placehold.co/600x400/1a5266/ffffff?text=Rumput+Laut',
        title: 'Budidaya Rumput Laut',
        description: 'Perairan Keruak yang tenang dan bersih sangat ideal untuk budidaya rumput laut. Komoditas ini menjadi sumber pendapatan penting bagi banyak keluarga nelayan dan diolah menjadi berbagai produk.'
    },
    {
        id: 4,
        image: 'https://placehold.co/600x400/1a5266/ffffff?text=Terasi+Bajo',
        title: 'Terasi Khas Bajo',
        description: 'Dengan resep warisan, Suku Bajo di Tanjung Luar membuat terasi dengan aroma dan rasa yang kuat, menjadi bumbu wajib dalam masakan lokal. Proses fermentasinya yang unik menghasilkan produk premium.'
    },
    {
        id: 5,
        image: 'https://placehold.co/600x400/1a5266/ffffff?text=Kue+Pesisir',
        title: 'Kue Tradisional Pesisir',
        description: 'Berbagai kue basah dan kering dibuat menggunakan bahan-bahan lokal seperti kelapa, gula aren, dan tepung beras, mencerminkan kekayaan rasa kuliner pesisir Lombok.'
    }
];

export const PanganPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Pangan background" src={PanganBackgroundImage} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848]/50 to-[#0b3848]"></div>
        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <section className="py-20 sm:py-28 text-center flex flex-col items-center">
                {/* Menggunakan font-display dan menghapus style inline */}
                <h1 className="text-5xl sm:text-7xl font-display text-[#ffffff]">
                    Panganan Warisan Bahari.
                </h1>
                {/* Menggunakan font-sans untuk deskripsi */}
                <p className="mt-8 text-lg text-white/90 max-w-2xl mx-auto text-justify font-sans">
                    Temukan kekayaan pangan khas Desa Ketapang Raya dan Tanjung Luar. Sajian pangan yang lahir dari laut, potensi lokal, dan keberagaman budaya yang menjadi cerminan khas di Keruak, Lombok Timur.
                </p>
            </section>
        </div>
      </div>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Menggunakan font-sf-bold untuk sub-judul */}
          <h2 className="text-3xl sm:text-4xl font-display text-center mb-12">
            Jejak Rasa dari Pesisir
          </h2>
          <Carousel data={panganData} onCardClick={handleCardClick} />
        </div>
      </section>

      {selectedCard && <Modal data={selectedCard} onClose={handleCloseModal} />}
    </>
  );
};