'use client';

import React from 'react';
import Image from 'next/image';
import searchIcon from '../../../public/homeImages/Banner/searchIcon.png';
import globalImage from '../../../public/homeImages/Banner/Group 1000004252.png';
import headPhone from '../../../public/homeImages/Banner/HeadPhone.png';
import { FiMapPin } from 'react-icons/fi';
import { Button } from '@nextui-org/button';
import { GoSearch } from 'react-icons/go';
import Container from '@/components/ui/container';

export default function Banner() {
  return (
    <div className="bg-[#205CD4]">
      <Container>
        <div className="text-white py-8 md:py-12 relative h-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex items-center justify-center mb-4 md:mb-0 md:mr-4 w-20 h-20 md:w-[160px] md:h-[74px] bg-white rounded-full">
              <Image
                className="w-12 h-12 md:w-[52px] md:h-[58px]"
                src={searchIcon}
                alt="Search Icon"
                width={500}
                height={500}
              />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[110px] font-bold leading-none text-center md:text-left">
              DISCOVER LOCAL
            </h1>
          </div>

          <div className="flex items-center justify-start md:-mt-3 flex-wrap">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[110px] font-bold leading-none">
              GEMS YOU CAN
            </h1>
            <Image
              className="w-16 h-16 md:w-[169px] md:h-[167px] ml-2"
              src={headPhone}
              alt="Headphone Icon"
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 -mt-3">
            <p className="w-full md:w-1/2 text-start mt-4 text-sm sm:text-base md:text-lg lg:text-xl roboto-regular">
              Find trusted local businesses that offer reliable services, unique
              products, and exceptional experiences tailored to meet your
              community&apos;s needs.
            </p>
            <h1 className="w-full md:w-1/2 text-3xl sm:text-5xl md:text-6xl lg:text-[110px] font-bold leading-none text-center md:text-right whitespace-nowrap">
              COUNT ON
            </h1>
          </div>

          {/* Search Input Section */}
          <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-between gap-4 md:gap-[30px] items-center">
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-md shadow-lg px-4 py-2 w-full">
              <div className="flex items-center w-full mb-2 sm:mb-0">
                <GoSearch className="text-gray-700 text-2xl md:text-[32px] mr-2" />
                <input
                  type="text"
                  placeholder="Search by Business Name"
                  className="w-full px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none"
                />
              </div>
              <div className="flex items-center w-full mt-2 sm:mt-0">
                <FiMapPin className="text-gray-700 text-2xl md:text-[32px] mr-2" />
                <input
                  type="text"
                  placeholder="Enter the Location"
                  className="w-full px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none"
                />
              </div>
            </div>
            <Button
              startContent={
                <GoSearch
                  size={24}
                  className=" text-[#205CD4] roboto-regular"
                />
              }
              className="w-full sm:w-auto h-[44px] sm:h-[56px] md:w-[173px] md:h-[56px] bg-white text-[#205CD4] text-base md:text-[24px] font-semibold rounded-md md:rounded-[10px] roboto-regular"
              variant="flat"
            >
              Search
            </Button>
          </div>

          {/* Statistics Section */}
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row justify-between text-sm md:text-lg font-semibold">
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl md:text-[44px] font-bold">2.1M+</p>
              <p className="text-xs sm:text-sm md:text-[20px] roboto-regular">
                Registered Companies
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl md:text-[44px] font-bold">30K+</p>
              <p className="text-xs sm:text-sm md:text-[20px] roboto-regular">
                Google Business Profiles
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl md:text-[44px] font-bold">24/7</p>
              <p className="text-xs sm:text-sm md:text-[20px] roboto-regular">
                Customer Service
              </p>
            </div>
          </div>

          {/* Earth Image */}
          <div className="absolute top-[300.14px] left-4 md:-left-[120.03px]">
            <Image
              className="w-12 md:w-[86px]"
              src={globalImage}
              alt="Globe Icon"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
