import Image from 'next/image';
import React from 'react';
import Banner_logo from '../../public/images/logo/Group 1000004245 (1).png';

export default function BannerLogo() {
  return (
    <div>
      <Image
        className="w-[80px] h-[36px]"
        src={Banner_logo}
        alt="Banner Logo"
        width={500}
        height={500}
      />
    </div>
  );
}
