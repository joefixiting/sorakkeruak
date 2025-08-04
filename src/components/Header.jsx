import React from 'react';
import IconUGM from '../assets/icons/ugm-white.svg';
import IconSorakKeruak from '../assets/icons/sorak-keruak.svg';
import IconKKN from '../assets/icons/kkn-ppm.svg';

const Header = () => {
  return (
    <header className="relative z-10 mx-auto max-w-1xl px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        {/* NOTE: In a real app, you'd use <img/> tags with the imported assets */}
        <img className="h-10 w-10 object-contain" alt="Organization logo" src={IconUGM} />
        <img className="h-10 w-10 object-contain" alt="KKN UGM logo" src={IconKKN} />
        <img className="h-10 w-10 object-contain" alt="Sorak Keruak logo" src={IconSorakKeruak} />
      </div>
    </header>
  );
};

export default Header;