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
import { motion } from 'framer-motion'; // Import framer-motion

export default function Banner() {
  return (
    <div className="bg-[#205CD4]">
      <Container>
        <div className="text-white py-8 md:py-12 relative h-full">
          <div className="flex flex-row items-center justify-between w-full">
            {/* Search Icon Animation */}
            <motion.div
              className="flex items-center justify-center md:mr-4 w-20 py-1 md:py-0 md:w-[160px] md:h-[72px] bg-white rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                className="size-7 md:size-[50px]"
                src={searchIcon}
                alt="Search Icon"
                width={500}
                height={500}
              />
            </motion.div>
            {/* Main Heading Animation */}
            <motion.h1
              className="text-3xl md:text-6xl lg:text-[110px] font-bold leading-none text-center md:text-left whitespace-nowrap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              DISCOVER LOCAL
            </motion.h1>
          </div>

          <div className="flex items-center justify-start md:-mt-3 flex-wrap">
            {/* Secondary Heading Animation */}
            <motion.h1
              className="text-3xl md:text-6xl lg:text-[110px] font-bold leading-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              GEMS YOU CAN
            </motion.h1>
            <Image
              className="w-16 h-16 md:w-[169px] md:h-[167px] ml-2"
              src={headPhone}
              alt="Headphone Icon"
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-0 md:gap-6 -mt-3">
            <p className="w-full md:w-1/2 text-start mt-4 text-sm md:text-lg lg:text-[20px] roboto-regular">
              Find trusted local businesses that offer reliable services, unique
              products, and exceptional experiences tailored to meet your
              community&apos;s needs.
            </p>
            <motion.h1
              className="w-full md:w-1/2 md:mt-0 text-3xl md:text-6xl lg:text-[110px] font-bold leading-none text-right whitespace-nowrap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              COUNT ON
            </motion.h1>
          </div>

          {/* Search Input Section */}
          <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-between gap-4 md:gap-[30px] items-center">
            <motion.div
              className="flex flex-col sm:flex-row items-center bg-white rounded-md shadow-lg px-4 py-2 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex items-center w-full mb-2 sm:mb-0">
                <GoSearch className="text-gray-700 text-2xl md:text-[32px] mr-2" />
                <input
                  type="text"
                  placeholder="Search by Business Name"
                  className="w-full px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none roboto-regular"
                />
              </div>
              <div className="flex items-center w-full mt-2 sm:mt-0">
                <FiMapPin className="text-gray-700 text-2xl md:text-[32px] mr-2" />
                <input
                  type="text"
                  placeholder="Enter the Location"
                  className="w-full px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none roboto-regular"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                startContent={
                  <GoSearch
                    size={24}
                    className=" text-[#205CD4] red-rose-regular"
                  />
                }
                className="w-full sm:w-auto h-[44px] sm:h-[56px] md:w-[173px] md:h-[56px] bg-white text-[#205CD4] text-base md:text-[24px] font-semibold rounded-md md:rounded-[10px] roboto-regular"
                variant="flat"
              >
                Search
              </Button>
            </motion.div>
          </div>

          {/* Statistics Section */}
          <div className="mt-10 md:mt-16 flex flex-wrap gap-4 flex-row items-center justify-center md:justify-between text-sm md:text-lg font-semibold">
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-2xl md:text-[44px] font-bold">2.1M+</p>
              <p className="text-xs sm:text-sm md:text-[20px] roboto-regular">
                Registered Companies
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <p className="text-2xl md:text-[44px] font-bold">30K+</p>
              <p className="text-xs sm:text-sm md:text-[20px] roboto-regular">
                Google Business Profiles
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <p className="text-2xl md:text-[44px] font-bold">24/7</p>
              <p className="text-xs sm:text-sm md:text-[20px] roboto-regular">
                Customer Service
              </p>
            </motion.div>
          </div>

          {/* Earth Image Animation */}
          <motion.div
            className="absolute top-[200px] md:top-[300.14px] left-4 md:-left-[120.03px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Image
              className="w-12 md:w-[86px]"
              src={globalImage}
              alt="Globe Icon"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
