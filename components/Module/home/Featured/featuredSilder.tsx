'use client';

import React, { FC, useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SwiperCore from 'swiper';
import Container from '@/components/ui/container';
import { MdVerifiedUser } from 'react-icons/md';
import { IoMdStar } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { Card } from '@nextui-org/card';
import { HiArrowUpRight } from 'react-icons/hi2';
import style1 from '../../../../public/homeImages/featuredImages/style1.png';
import style2 from '../../../../public/homeImages/featuredImages/style2.png';

type PartnerCard = {
  image: any;
  title: string;
  description: string;
  address: string;
  rating: string;
  email: string;
  phone: string;
  verified: boolean;
};

interface FeaturedPartnerSliderProps {
  featuredPartners: PartnerCard[];
}

const FeaturedPartnerSlider: FC<FeaturedPartnerSliderProps> = ({
  featuredPartners,
}) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    // Only runs on client side
    if (typeof window !== 'undefined') {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    }
  }, []);

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        setActiveIndex(swiperRef.current?.activeIndex || 0);
        setIsBeginning(swiperRef.current?.isBeginning || false);
        setIsEnd(swiperRef.current?.isEnd || false);
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <Container>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={() => {
            setIsBeginning(swiperRef.current?.isBeginning || false);
            setIsEnd(swiperRef.current?.isEnd || false);
          }}
          className="h-full md:h-[500px]"
        >
          {featuredPartners.map((partner, idx) => (
            <SwiperSlide key={idx}>
              <Card
                as={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white rounded-lg my-5 mx-2 p-5 flex flex-col items-center cursor-pointer gap-3 relative w-full lg:w-[370px] ${
                  idx === activeIndex + 1 && slidesPerView === 3
                    ? 'bg-[#205cb4] text-white'
                    : ''
                }`}
              >
                <div className="flex gap-3 justify-between items-start w-full">
                  {partner.verified && (
                    <p className="flex flex-col gap-2 items-center roboto-regular text-sm">
                      <MdVerifiedUser
                        size={20}
                        className={`${
                          idx === activeIndex + 1 && slidesPerView === 3
                            ? 'text-white'
                            : 'text-green-500'
                        }`}
                      />
                      Verified
                    </p>
                  )}

                  <Image
                    width={250}
                    height={200}
                    src={partner.image}
                    alt={`${partner.title} icon`}
                    className="size-[120px] rounded-full object-cover"
                  />

                  <p className="flex flex-col gap-2 items-center roboto-regular text-sm">
                    <IoMdStar size={20} className="text-yellow-500" />
                    {partner.rating}
                  </p>
                </div>
                <div className="flex text-[24px] flex-col items-center justify-between border-b border-gray-300 pb-3">
                  <h3 className="text-lg font-semibold">{partner.title}</h3>
                  <p className="text-[16px] roboto-regular">
                    {partner.description}
                  </p>
                </div>
                <div className="flex flex-col items-start my-3 space-y-3">
                  <div className="flex items-center justify-start gap-3">
                    <FiMapPin
                      size={30}
                      className="p-1 bg-default-100 border rounded-full text-blue-400"
                    />
                    <p className="text-[16px] roboto-regular">
                      {partner.address}
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <IoMailOutline
                      size={30}
                      className="p-1 bg-default-100 border rounded-full text-blue-400"
                    />
                    <p className="text-[16px] roboto-regular">
                      {partner.email}
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <MdOutlineLocalPhone
                      size={30}
                      className="p-1 bg-default-100 border rounded-full text-blue-400"
                    />
                    <p className="text-[16px] roboto-regular">
                      {partner.phone}
                    </p>
                  </div>
                </div>
                <Button
                  className={`w-full bg-[#205cb4] text-white rounded-[10px] h-[36px] roboto-regular mt-2 ${
                    idx === activeIndex + 1 && slidesPerView === 3
                      ? 'bg-white text-[#205cb4]'
                      : ''
                  }`}
                  endContent={<HiArrowUpRight size={20} />}
                >
                  See Review
                </Button>
                <div className="absolute top-6 left-0">
                  {' '}
                  <Image
                    src={style1}
                    alt="icon"
                    width={300}
                    height={300}
                    className="h-14 w-6"
                  />
                </div>
                <div className="absolute right-0 bottom-16">
                  <Image
                    src={style2}
                    alt="icon"
                    width={300}
                    height={300}
                    className="h-14 w-6"
                  />
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-between gap-3 inset-0 absolute bottom-[60px] md:bottom-[90px] z-50 max-w-[1270px] mx-auto">
          <Button
            isIconOnly
            radius="full"
            startContent={<IoIosArrowBack size={25} />}
            onClick={handlePrevSlide}
            disabled={isBeginning}
            className={`${
              isBeginning
                ? 'bg-gray-300'
                : 'bg-[#205cd4] text-white hover:bg-blue-400'
            } p-3 rounded-full md:size-[56px] size-[40px]`}
          />
          <Button
            isIconOnly
            radius="full"
            startContent={<IoIosArrowForward size={25} />}
            onClick={handleNextSlide}
            disabled={isEnd}
            className={`${
              isEnd
                ? 'bg-gray-300'
                : 'bg-[#205cd4] text-white hover:bg-blue-400'
            } p-3 rounded-full md:size-[56px] size-[40px]`}
          />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedPartnerSlider;
