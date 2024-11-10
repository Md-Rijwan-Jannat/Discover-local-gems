import Container from '@/components/ui/container';
import SectionTitle from '@/components/ui/sectionTitle';
import { Button } from '@nextui-org/button';
import React from 'react';
import { GoSearch } from 'react-icons/go';
import style1 from '../../../public/homeImages/style1.png';
import style2 from '../../../public/homeImages/style2.png';
import Image from 'next/image';

export default function Parallax() {
  return (
    <div className=" bg-[#205cb4] my-16">
      <Container>
        <div className="relative py-10 md:py-16 x-4 text-white flex flex-col items-center">
          <SectionTitle
            title="Check Your Online Visibility for Free"
            subTitle="Discover how visible your business is online with our free visibility check. Gain insights to enhance your digital presence effectively."
          />

          {/* Search Input Section */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-6 items-center w-full max-w-2xl my-6">
            <div className="flex items-center w-full mb-2 sm:mb-0 bg-white rounded-[10px] shadow-lg px-4 py-2 ">
              <GoSearch className="text-gray-700 text-2xl md:text-[32px] mr-2" />
              <input
                type="text"
                placeholder="Search by Business Name"
                className="w-full px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none"
              />
            </div>

            <Button
              startContent={
                <GoSearch
                  size={24}
                  className=" text-[#205CD4] roboto-regular"
                />
              }
              className="w-full sm:w-auto h-[44px] sm:h-[56px] md:w-[173px] md:h-[56px] bg-white text-[#205CD4] text-base md:text-[24px] font-semibold rounded-[10px] md:rounded-lg roboto-regular"
              variant="flat"
            >
              Search
            </Button>
          </div>
          <div className="absolute top-0 left-0 z-50 w-8/12">
            <div className="flex items-start justify-between w-full">
              {' '}
              <Image
                src={style1}
                alt="icon"
                width={300}
                height={300}
                className="h-12 w-28"
              />
              <Image
                src={style1}
                alt="icon"
                width={300}
                height={300}
                className="h-12 w-28"
              />
              <Image
                src={style1}
                alt="icon"
                width={300}
                height={300}
                className="h-12 w-28"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-50 w-8/12">
            <div className="flex items-end justify-between w-full">
              <Image
                src={style2}
                alt="icon"
                width={300}
                height={300}
                className="h-12 w-28"
              />
              <Image
                src={style2}
                alt="icon"
                width={300}
                height={300}
                className="h-12 w-28"
              />
              <Image
                src={style2}
                alt="icon"
                width={300}
                height={300}
                className="h-12 w-28"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
