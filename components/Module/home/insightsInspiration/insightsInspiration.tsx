'use client';

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import image1 from '../../../../public/homeImages/insightsInspiration/cover.png';
import image2 from '../../../../public/homeImages/insightsInspiration/image1.png';
import image3 from '../../../../public/homeImages/insightsInspiration/image2.png';
import image4 from '../../../../public/homeImages/insightsInspiration/image3.png';
import Container from '@/components/ui/container';
import { Card } from '@nextui-org/card';
import { motion, AnimatePresence } from 'framer-motion';

interface Article {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  href: string;
}

interface InsightsSectionProps {
  articles?: Article[];
}

export default function InsightsInspiration({
  articles = [
    {
      title: 'Top Marketing Tips for Small Businesses',
      description:
        'Discover essential marketing strategies to help your small business attract more customers and boost brand awareness effectively.',
      date: '20 Jan 2024',
      author: 'Otvia Rie',
      image: image1.src,
      href: '#',
    },
    {
      title: 'Why Online Visibility Matters',
      description:
        "Learn the importance of online visibility and how it can impact your company's growth and reputation in today's market.",
      date: '20 Jan 2024',
      author: 'Otvia Rie',
      image: image2.src,
      href: '#',
    },
    {
      title: 'Building a Positive Brand Reputation',
      description:
        'Explore key steps to establish and maintain a trustworthy brand reputation that resonates with your target audience.',
      date: '20 Jan 2024',
      author: 'Otvia Rie',
      image: image3.src,
      href: '#',
    },
    {
      title: 'Maximizing Social Media Engagement',
      description:
        'Get expert insights on leveraging social media platforms to increase customer engagement and build a loyal audience.',
      date: '20 Jan 2024',
      author: 'Otvia Rie',
      image: image4.src,
      href: '#',
    },
  ],
}: InsightsSectionProps) {
  const [featuredArticle, ...sidebarArticles] = articles;

  return (
    <section className="bg-primary-300/5 pt-10 md:pt-20 pb-8 md:pb-16 overflow-y-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-8/12"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Insights & Inspiration
            </h2>
            <p className="text-[#111827] my-2 roboto-regular text-sm md:text-[18px]">
              Stay updated with industry trends, expert advice, and practical
              tips to grow your business and improve your brand visibility.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              className="bg-[#205cd4] h-[40px] w-full md:w-[228px] md:h-[56px] text-[16px] md:text-[24px] text-white roboto-regular"
              endContent={<HiArrowUpRight size={24} />}
            >
              See All Blog
            </Button>
          </motion.div>
        </div>
        <hr className="mt-4 mb-12" />

        <AnimatePresence>
          <div className="grid gap-3 lg:grid-cols-2">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Card
                as={Link}
                href={featuredArticle.href}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={500}
                  height={500}
                  className="aspect-[3/2] w-full object-cover transition-transform"
                />
                <div className="space-y-5 pt-6 px-5 pb-4">
                  <div className="flex items-center gap-2 text-sm text-[#111827CC] md:text-[20px] roboto-regular">
                    <p>{featuredArticle.author}</p>
                    <p>•</p>
                    <p>{featuredArticle.date}</p>
                  </div>
                  <h3 className="mt-2 text-2xl md:text-[36px] font-bold red-rose-bold text-[#111827]">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-[#111827CC] text-sm md:text-[20px] roboto-regular">
                    {featuredArticle.description}
                  </p>
                  <Button
                    className="bg-[#205cd4] h-[40px] w-full md:h-[56px] text-[16px] md:text-[24px] text-white roboto-regular mt-1"
                    endContent={<HiArrowUpRight size={24} />}
                  >
                    Learn more
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Sidebar Articles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {sidebarArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                >
                  <Card className="flex flex-col md:flex-row gap-3 rounded-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={200}
                      height={134}
                      className="w-full h-full md:h-full rounded-lg object-cover md:w-48"
                    />
                    <div className="flex flex-col justify-center p-3 md:p-1 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-[#111827CC] md:text-[16px] roboto-regular">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-[#111827] text-[24px] red-rose-bold">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#111827CC] md:text-[16px] roboto-regular">
                        {article.description}
                      </p>
                      <Link
                        href={article.href}
                        className="flex items-center gap-1 text-sm font-medium text-[#205cb4] hover:underline roboto-regular"
                      >
                        Learn More
                        <HiArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
