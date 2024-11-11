'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '@nextui-org/button';
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from 'react-icons/io';
import SwiperCore from 'swiper';
import user1 from '../../../../public/homeImages/reviews/user1.png';
import user2 from '../../../../public/homeImages/reviews/user2.png';
import user3 from '../../../../public/homeImages/reviews/user3.png';
import user4 from '../../../../public/homeImages/reviews/user4.png';
import user5 from '../../../../public/homeImages/reviews/user5.png';
import image1 from '../../../../public/homeImages/featuredImages/Dutch Design Studio.png';
import image2 from '../../../../public/homeImages/featuredImages/Green Energy Solutions.png';
import image3 from '../../../../public/homeImages/featuredImages/Smart IT Services.png';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Card } from '@nextui-org/card';
import Image from 'next/image';
import Container from '@/components/ui/container';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
  companyLogo: string;
  companyName: string;
  companyWebsite: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Design Corp',
    image: user1.src,
    review:
      'Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, and the additional services have boosted our online presence significantly.',
    rating: 5,
    companyLogo: image1.src,
    companyName: 'Dutch Design Studio',
    companyWebsite: 'www.dutchdesignstudio.com',
  },
  {
    id: 2,
    name: 'Alice Smith',
    role: 'Marketing Head, Bright Inc.',
    image: user2.src,
    review:
      'Fantastic services! Our visibility has increased, and customer engagement is much higher now.',
    rating: 4,
    companyLogo: image2.src,
    companyName: 'Bright Inc.',
    companyWebsite: 'www.brightinc.com',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Product Manager, StarTech',
    image: user3.src,
    review:
      'Highly recommend! The team is professional, and the results are exceptional.',
    rating: 5,
    companyLogo: image2.src,
    companyName: 'StarTech',
    companyWebsite: 'www.startech.com',
  },
  {
    id: 4,
    name: 'Sarah Brown',
    role: 'CTO, InnovateX',
    image: user4.src,
    review:
      'Their expertise has been invaluable to our growth. Great collaboration and results!',
    rating: 4,
    companyLogo: image3.src,
    companyName: 'InnovateX',
    companyWebsite: 'www.innovatex.com',
  },
  {
    id: 5,
    name: 'David Wilson',
    role: 'CEO, Alpha Media',
    image: user5.src,
    review:
      'Amazing team and great support! Our online presence has seen incredible growth.',
    rating: 5,
    companyLogo: image1.src,
    companyName: 'Alpha Media',
    companyWebsite: 'www.alphamedia.com',
  },
];

const ReviewSlider: FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = () => {
    setActiveIndex(swiperRef.current?.activeIndex || 0);
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', handleSlideChange);
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
        setIsBeginning(swiperRef.current?.isBeginning || false);
        setIsEnd(swiperRef.current?.isEnd || false);
      });
    }
  }, []);

  // Helper function to get the visible pagination items around the active one
  const getVisiblePaginationItems = () => {
    const start = Math.max(0, activeIndex - 4);
    const end = Math.min(testimonials.length, activeIndex + 5);
    return testimonials.slice(start, end);
  };

  return (
    <Container>
      <div className="">
        <div className="flex  items-center gap-5">
          <div className="hidden relative md:flex flex-col items-center justify-center overflow-hidden h-[500px] w-[310px]">
            {/* Mapping visible pagination items */}
            {getVisiblePaginationItems().map((review, index) => {
              const isActive = activeIndex === index;

              // Set sizes for active and non-active items
              const size = isActive
                ? 'h-[120px] w-[120px]' // Size for the active image (middle image)
                : index === 0 || index === 4
                  ? 'h-[80px] w-[80px]' // First and last images (small)
                  : 'h-[100px] w-[100px]';

              const radius = 200;
              const angleSpacing = 40;

              // Calculate angle for each item, centering the active image
              const angle =
                (index - activeIndex) * angleSpacing * (Math.PI / 180);

              // Calculate x and y positions based on the circular angle
              const xPos = radius * Math.cos(angle);
              const yPos = radius * Math.sin(angle);

              return (
                <button
                  key={review.id}
                  className={`absolute rounded-full overflow-hidden transition-transform duration-500 -left-8 ${size} ${
                    isActive ? 'ring-2 ring-primary ring-offset-2 z-10' : ''
                  }`}
                  style={{
                    transform: `translate(${xPos}px, ${yPos}px) scale(${isActive ? 1.2 : 1})`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Image
                    src={review.image}
                    alt={`${review.name}'s profile picture`}
                    fill
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full md:w-8/12 flex justify-end"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card className="flex gap-4 bg-white rounded-lg my-5 p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center w-full gap-2">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full "
                        width={80}
                        height={80}
                      />
                      <div className="flex flex-col items-start roboto-regular">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#111827] text-sm roboto-regular">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-yellow-500 flex mt-2">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <span key={i}>
                            <IoMdStar size={36} />
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <hr className="mt-1 mb-3" />
                    <p className="text-[#111827] my-2 roboto-regular">
                      {testimonial.review}
                    </p>
                    <hr className="mt-3 mb-1" />
                    <div className="flex items-center gap-2">
                      <Image
                        src={testimonial.companyLogo}
                        alt={testimonial.companyName}
                        className="size-[80px]"
                        width={500}
                        height={500}
                      />
                      <div>
                        <h5 className="font-semibold text-[24px] text-[#111827]">
                          {testimonial.companyName}
                        </h5>
                        <p className="text-[16px] text-[#111827] roboto-regular">
                          {testimonial.companyWebsite}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div className="flex justify-between items-center gap-7 mt-3 mx-5">
              <Button
                className="bg-[#205cd4] h-[40px] md:h-[56px] text-[16px] md:text-[24px] text-white roboto-regular"
                endContent={<HiArrowUpRight size={24} />}
              >
                Write a Review
              </Button>
              <div className="flex justify-center items-center gap-7">
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
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default ReviewSlider;
