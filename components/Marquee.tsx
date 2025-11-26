import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-blue-700 text-white font-['Press_Start_2P'] py-1 overflow-hidden border-y-2 border-white z-40 relative">
      <div className="animate-marquee inline-block text-xs">
        ARIANA WHAT ARE YOU DOING HERE /// ARIANA WHAT ARE YOU DOING HERE /// ARIANA WHAT ARE YOU DOING HERE /// ARIANA WHAT ARE YOU DOING HERE ///
        ARIANA WHAT ARE YOU DOING HERE /// ARIANA WHAT ARE YOU DOING HERE /// ARIANA WHAT ARE YOU DOING HERE /// ARIANA WHAT ARE YOU DOING HERE ///
      </div>
    </div>
  );
};

export default Marquee;