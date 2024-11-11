'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import bank from '../../../public/homeImages/category/noun-bank-7348398 1.png';
import travel from '../../../public/homeImages/category/Vector.png';
import car from '../../../public/homeImages/category/Group.png';
import furniture from '../../../public/homeImages/category/noun-chair-7327661 1.png';
import jewelry from '../../../public/homeImages/category/noun-jewelry-store-5948842 1.png';
import clothing from '../../../public/homeImages/category/noun-clothing-store-6128121 1.png';
import electronics from '../../../public/homeImages/category/noun-battery-6722929 1.png';
import fitness from '../../../public/homeImages/category/noun-diet-5938911 1.png';
import pet from '../../../public/homeImages/category/noun-pet-store-3983246 1.png';
import energy from '../../../public/homeImages/category/Vector (1).png';
import agents from '../../../public/homeImages/category/noun-house-2556243 1.png';
import agency from '../../../public/homeImages/category/noun-insurance-agency-7308629 1.png';
import bedroom from '../../../public/homeImages/category/noun-bed-5306938 1.png';
import activewear from '../../../public/homeImages/category/noun-sportswear-7247793 1.png';
import women from '../../../public/homeImages/category/noun-woman-5372251 1.png';
import men from '../../../public/homeImages/category/Vector (2).png';
import style1 from '../../../public/homeImages/category/style1.png';
import style2 from '../../../public/homeImages/category/style2.png';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Container from '@/components/ui/container';
import { HiArrowUpRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Category {
  icon: any;
  title: string;
  link: string;
}

const categories: Category[] = [
  { icon: bank, title: 'Bank', link: '#' },
  { icon: travel, title: 'Travel Insurance Company', link: '#' },
  { icon: car, title: 'Car Dealer', link: '#' },
  { icon: furniture, title: 'Furniture Store', link: '#' },
  { icon: jewelry, title: 'Jewelry Store', link: '#' },
  { icon: clothing, title: 'Clothing Store', link: '#' },
  { icon: electronics, title: 'Electronics Technology', link: '#' },
  { icon: fitness, title: 'Fitness and Nutrition Service', link: '#' },
  { icon: pet, title: 'Pet Store', link: '#' },
  { icon: energy, title: 'Energy Supplier', link: '#' },
  { icon: agents, title: 'Real State Agents', link: '#' },
  { icon: agency, title: 'Insurance Agency', link: '#' },
  { icon: bedroom, title: 'Bedroom Furniture Store', link: '#' },
  { icon: activewear, title: 'Activewear', link: '#' },
  { icon: women, title: 'Women’s Clothing Store', link: '#' },
  { icon: men, title: 'Men’s Clothing Store', link: '#' },
];

const CategoryGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set up useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="pt-5 md:pt-10 mb-10 md:mb-28">
      <Container>
        <div className="flex items-center justify-between gap-3 mb-10 red-rose-bold">
          <h3 className="md:text-[44px] text-xl">Browse by Category</h3>
          <Button
            className="bg-[#205cb4] rounded-[10px] w-[130px] md:w-[173px] h-[40px] md:h-[56px] text-[16px] md:text-[24px] text-white red-rose-regular"
            endContent={<HiArrowUpRight size={24} />}
          >
            See All
          </Button>
        </div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-[110px] px-5 py-1 flex gap-2 items-center justify-center relative">
                <div className="flex items-center mb-2 justify-start gap-2 w-full">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={category.icon}
                      alt="icon"
                      width={300}
                      height={300}
                      className="size-8 md:size-12"
                    />
                  </motion.div>
                  <h3 className="text-sm md:text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="absolute top-0 right-0">
                  <Image
                    src={style1}
                    alt="icon"
                    width={300}
                    height={300}
                    className="h-6 w-14"
                  />
                </div>
                <div className="absolute bottom-0 left-0">
                  <Image
                    src={style2}
                    alt="icon"
                    width={300}
                    height={300}
                    className="h-6 w-14"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default CategoryGrid;
