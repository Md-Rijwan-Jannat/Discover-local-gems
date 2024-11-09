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
        <div className="flex items-center gap-10">
          <Card className="h-[124px] my-5 w-[277px] flex items-center justify-center">
            <Image
              className="bg-white rounded-[10px] px-[30px] py-[20px] w-[240px]"
              src={brand1}
              alt="Brand 1"
              width={120}
              height={60}
            />
          </Card>
          <Card className="h-[124px] my-5 w-[277px] lex items-center justify-center">
            <Image
              className="bg-white rounded-[10px] px-[30px] py-[20px] w-[240px]"
              src={brand2}
              alt="Brand 1"
              width={120}
              height={60}
            />
          </Card>
          <Card className="h-[124px] my-5 w-[277px] lex items-center justify-center">
            <Image
              className="bg-white rounded-[10px] px-[30px] py-[20px] w-[240px]"
              src={brand3}
              alt="Brand 1"
              width={120}
              height={60}
            />
          </Card>
          <Card className="h-[124px] my-5 w-[277px] lex items-center justify-center">
            <Image
              className="bg-white rounded-[10px] px-[30px] py-[20px] w-[240px]"
              src={brand4}
              alt="Brand 1"
              width={120}
              height={60}
            />
          </Card>
          <Card className="h-[124px] my-5 w-[277px] lex items-center justify-center">
            <Image
              className="bg-white rounded-[10px] px-[30px] py-[20px] w-[240px]"
              src={brand5}
              alt="Brand 1"
              width={120}
              height={60}
            />
          </Card>

          {/* Repeat images if necessary */}
        </div>
      </Marquee>
    </div>
  );
}
