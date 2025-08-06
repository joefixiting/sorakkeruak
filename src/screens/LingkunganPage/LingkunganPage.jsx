import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import Modal from '../../components/Modal';
import BackgroundImage from '../../assets/images/LingkunganBackground.webp';
import LK1 from '../../assets/images/LK1.webp';

const LingkunganBackgroundImage = BackgroundImage;

const lingkunganData = [
  {
    id: 1,
    image: LK1 ,
    title: 'Penanaman Mangrove di Pesisir Ketapang Raya',
    description: 'Kegiatan penanaman ribuan bibit mangrove berhasil dilaksanakan di Desa Ketapang Raya, melibatkan masyarakat lokal, pelajar, dan komunitas peduli lingkungan. Inisiatif ini bertujuan untuk melindungi garis pantai dari abrasi, menciptakan habitat alami bagi biota laut, dan berkontribusi pada mitigasi perubahan iklim.',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/28a745/ffffff?text=Edukasi+Sampah',
    title: 'Edukasi Pengelolaan Sampah untuk Masyarakat',
    description: 'Program edukasi tentang pentingnya pengelolaan sampah yang bertanggung jawab telah diselenggarakan di berbagai dusun. Fokus utama adalah pengurangan sampah plastik, daur ulang, dan praktik pemilahan sampah di tingkat rumah tangga untuk menciptakan lingkungan yang lebih bersih dan sehat.',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/28a745/ffffff?text=Konservasi+Terumbu',
    title: 'Konservasi Terumbu Karang Tanjung Luar',
    description: 'Upaya konservasi terumbu karang terus dilakukan di perairan Tanjung Luar, termasuk transplantasi karang dan pemantauan kesehatan ekosistem laut. Inisiatif ini krusial untuk menjaga keanekaragaman hayati laut dan mendukung keberlanjutan sumber daya perikanan lokal.',
  },
  {
    id: 4,
    image: 'https://placehold.co/600x400/28a745/ffffff?text=Air+Bersih',
    title: 'Inovasi Sumur Resapan untuk Air Bersih',
    description: 'Pembangunan sumur resapan inovatif telah dimulai di beberapa area untuk meningkatkan ketersediaan air bersih dan mengurangi risiko kekeringan. Proyek ini juga melibatkan pelatihan masyarakat dalam pemeliharaan infrastruktur air.',
  },
  {
    id: 5,
    image: 'https://placehold.co/600x400/28a745/ffffff?text=Energi+Terbarukan',
    title: 'Pemanfaatan Energi Surya di Komunitas Pesisir',
    description: 'Penerapan teknologi panel surya sebagai sumber energi alternatif sedang dijajaki untuk komunitas pesisir. Langkah ini bertujuan untuk mengurangi ketergantungan pada energi fosil dan mempromosikan solusi energi yang bersih dan berkelanjutan.',
  },
];

export const LingkunganPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    // Tambahkan div pembungkus dengan warna latar belakang dasar
    <div className="bg-[#0b3848]">
      {/* Bagian Hero Section */}
      <div className="relative isolate overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" alt="Lingkungan background" src={LingkunganBackgroundImage} />
        
        <div className="absolute inset-0 bg-[#0b3848]/0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>

        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <section className="py-20 sm:py-28 text-center flex flex-col items-center">
            
            {/* Pembungkus untuk judul dan overlay-nya */}
            <div className="relative mb-6">
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-[#0b3848] opacity-40 rounded-lg blur-xl"></div>
              <h1 className="relative text-5xl sm:text-7xl font-display text-white">
                Lingkungan Lestari, Masa Depan Cerah.
              </h1>
            </div>
            
            {/* Pembungkus untuk deskripsi dan overlay-nya */}
            <div className="relative mt-6 max-w-2xl">
              <div className="absolute inset-0 bg-[#0b3848] opacity-50 rounded-full blur-2xl"></div>
              <div className="relative flex flex-col gap-4 mx-auto text-sm sm:text-base text-white/90 text-justify p-4 font-sans">
                <p>
                  Menjelajahi upaya-upaya konservasi dan inisiatif ramah lingkungan di Desa Ketapang Raya dan Tanjung Luar,
                  yang berfokus pada menjaga kelestarian alam demi keberlanjutan hidup dan generasi mendatang di Keruak, Lombok Timur.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Bagian Carousel dengan Style 1 */}
      <section className="relative pb-16 sm:pb-24 -mt--10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-display text-center mb-12 text-white">
            Inisiatif Lingkungan Kami
          </h2>
          <Carousel data={lingkunganData} onCardClick={handleCardClick} />
        </div>
      </section>

      {selectedCard && <Modal data={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};