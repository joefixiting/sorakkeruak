import React, { useState, useEffect } from "react";
import Header from '../../components/Header';
import Modal from '../../components/Modal'; 
import { ContentCarousel } from '../../components/ContentCarousel'; 
import BackgroundImage from '../../assets/images/IkanBackground.webp';

import DodolImage from '../../assets/images/DodolRumputLaut2.webp';
import BaruasImage from '../../assets/images/KueBaruas.webp';
import PasarImage from '../../assets/images/PasarTanjungLuar.webp';
import AbonImage from '../../assets/images/AbonIkanTongkol.webp';
import GaramImage from '../../assets/images/GaramKetapangRaya.webp';

const PanganBackgroundImage = BackgroundImage;

const panganData = [
  {
    id: 1,
    image: DodolImage,
    title: 'Dodol Rumput Laut',
    description: 'Inovasi kuliner khas pesisir Lombok, dodol rumput laut mengubah hasil budidaya laut menjadi camilan manis yang unik dan bergizi. Dibuat dari rumput laut segar dan gula. Dodol ini memiliki tekstur kenyal yang khas dengan kandungan rumput laut. Produk ini tidak hanya menjadi oleh-oleh favorit, tetapi juga bukti kreativitas masyarakat lokal dalam mengolah sumber daya bahari menjadi produk bernilai tambah.'
  },
  {
    id: 2,
    image: GaramImage,
    title: 'Garam Ketapang Raya',
    description: 'Di pesisir Desa Ketapang Raya, tradisi pembuatan garam diwariskan secara turun-temurun. Dengan memanfaatkan tungku panas dengan sabut kelapa untuk pembakaran, pemasakan garam dilakukan oleh petani-petani garam yang banyak ditemui di Ketapang Raya, terutama di Kedome dan Telaga Bagik. Garam Ketapang Raya bukan sekadar bumbu dapur, melainkan kristal keringat dan kearifan lokal para petaninya.'
  },
  {
    id: 3,
    image: PasarImage,
    title: 'Pasar Ikan Tanjung Luar',
    description: 'Pasar Ikan Tanjung Luar adalah jantung dari kehidupan bahari di Lombok Timur. Dikenal sebagai salah satu pendaratan ikan terbesar, pasar ini menawarkan pemandangan eksotis di mana para nelayan, membawa hasil tangkapan segar, mulai dari ikan tongkol hingga hiu dan pari manta. Di sini, tradisi lelang ikan yang riuh dan proses pengolahan hasil laut seperti ikan asin dan terasi berlangsung setiap pagi hari, menjadikannya pusat ekonomi dan budaya maritim yang vital bagi masyarakat pesisir.'
  },
  {
    id: 4,
    image: AbonImage,
    title: 'Abon Ikan Tongkol',
    description: 'Abon ikan tongkol dari Keruak adalah wujud sempurna dari pengolahan hasil laut yang melimpah. Dibuat dari daging ikan tongkol segar yang direbus, disuwir halus, lalu disangrai dengan racikan bumbu rempah hingga kering dan keemasan. Hasilnya adalah abon dengan cita rasa gurih dan aroma yang menggugah selera. Selain praktis dan tahan lama, abon ikan tongkol kaya akan protein dan menjadi lauk favorit yang mencerminkan kekayaan rasa kuliner bahari Lombok.'
  },
  {
    id: 5,
    image: BaruasImage,
    title: 'Kue Baruas',
    description: 'Kue Baruas adalah kue kering klasik warisan dari suku Bugis-Makassar, Sulawesi Selatan. Dibuat dari bahan utama tepung beras yang disangrai, dicampur dengan kelapa parut dan gula, kue ini menawarkan aroma wangi yang khas. Cita rasanya manis-gurih dengan tekstur renyah yang lumer di mulut. Kue ini secara tersirat merefleksikan keberagaman budaya di Keruak, pesisir lombok Timur, di mana suku Bugis-Makassar berkontribusi dalam memperkaya tradisi kuliner lokal.'
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
        
        <div className="absolute inset-0 bg-[#0b3848]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3848] via-transparent to-[#0b3848]"></div>

        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <section className="py-20 sm:py-28 text-center flex flex-col items-center">
            
            <div className="relative mb-6">
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-[#0b3848] opacity-40 rounded-lg blur-xl"></div>
              <h1 className="relative text-5xl sm:text-7xl font-display text-white">
                Panganan Warisan Bahari.
              </h1>
            </div>
            
            <div className="relative mt-6 max-w-2xl">
              <div className="absolute inset-0 bg-[#0b3848] opacity-50 rounded-full blur-2xl"></div>
              <div className="relative flex flex-col gap-4 mx-auto text-sm sm:text-base text-white/90 text-justify p-4 font-sans">
                <p>
                  Kekayaan pangan khas Desa Ketapang Raya dan Tanjung Luar. Sajian pangan yang lahir dari laut, potensi lokal, dan keberagaman budaya yang menjadi cerminan khas di Keruak, Lombok Timur. Cerminan dari keragaman budaya di pesisir Lombok bagian timur, yang tidak hanya menceritakan kekayaan kuliner bahari. Namun juga warisan budaya suku Mandar, Sasak, Bugis, Bajo, Buton, Madura, Jawa, dan Ende yang bermukim di wilayah ini.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="relative isolate overflow-hidden">
        {/* ... */}
      </div>

      <section className="bg-[#0B3848] relative pb-16 sm:pb-24 -mt-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl text-white font-display text-center mb-12">
            Jejak Rasa dari Pesisir
          </h2>
          <ContentCarousel 
            items={panganData} 
            onItemClick={handleCardClick} 
          />
        </div>
      </section>

      {selectedCard && <Modal data={selectedCard} onClose={handleCloseModal} />}
    </>
  );
};