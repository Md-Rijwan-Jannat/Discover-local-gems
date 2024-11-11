import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { Card } from '@nextui-org/card';
import brand1 from '../../../public/homeImages/marqueeImages/frogin 1.png';
import brand2 from '../../../public/homeImages/marqueeImages/academy-sports 1.png';
import brand3 from '../../../public/homeImages/marqueeImages/hazama 1.png';
import brand4 from '../../../public/homeImages/marqueeImages/Group 1000004253.png';
import brand5 from '../../../public/homeImages/marqueeImages/Group 1000004254.png';

export default function BrandMarquee() {
  return (
    <div className="py-10">
      <Marquee speed={100} gradient={false} pauseOnHover={true}>
        <div className="flex items-center">
          {[brand1, brand2, brand3, brand4, brand5].map((brand, index) => (
            <Card
              key={index}
              className={`h-[100px] w-[180px] sm:h-[110px] sm:w-[220px] md:h-[124px] md:w-[277px] my-5 flex items-center justify-center ${index < 4 ? 'mx-6' : ''}`}
            >
              <Image
                className="bg-white rounded-[10px] px-[20px] py-[10px] sm:px-[25px] sm:py-[15px] md:px-[30px] md:py-[20px] w-[160px] sm:w-[200px] md:w-[240px]"
                src={brand}
                alt={`Brand ${index + 1}`}
                width={120}
                height={60}
              />
            </Card>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
