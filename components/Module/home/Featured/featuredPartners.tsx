import SectionTitle from '@/components/ui/sectionTitle';
import React from 'react';
import FeaturedPartnerSlider from './featuredSilder';
import image1 from '../../../../public/homeImages/featuredImages/Dutch Design Studio.png';
import image2 from '../../../../public/homeImages/featuredImages/Green Energy Solutions.png';
import image3 from '../../../../public/homeImages/featuredImages/Smart IT Services.png';
import Container from '@/components/ui/container';

const featuredSliderData = [
  {
    image: image1,
    title: 'Dutch Design Studio',
    description: 'Creative designs to elevate your brand image',
    address: 'Herengracht 300, 1016CD, Amsterdam',
    email: 'info@dutchdesign.com',
    phone: '+31 20 123 4567',
    rating: '4.7 (1481)',
    verified: true,
  },
  {
    image: image2,
    title: 'Green Energy Solutions',
    description: 'Creative designs to elevate your brand image',
    address: 'Herengracht 300, 1016CD, Amsterdam',
    email: 'info@dutchdesign.com',
    phone: '+31 20 123 4567',
    rating: '4.7 (1483)',
    verified: true,
  },
  {
    image: image3,
    title: 'Smart IT Services',
    description: 'Creative designs to elevate your brand image',
    address: 'Herengracht 300, 1016CD, Amsterdam',
    email: 'info@dutchdesign.com',
    phone: '+31 20 123 4567',
    rating: '4.7 (1481)',
    verified: true,
  },
  {
    image: image3,
    title: 'Smart IT Services',
    description: 'Creative designs to elevate your brand image',
    address: 'Herengracht 300, 1016CD, Amsterdam',
    email: 'info@dutchdesign.com',
    phone: '+31 20 123 4567',
    rating: '4.7 (1481)',
    verified: true,
  },
  {
    image: image3,
    title: 'Smart IT Services',
    description: 'Creative designs to elevate your brand image',
    address: 'Herengracht 300, 1016CD, Amsterdam',
    email: 'info@dutchdesign.com',
    phone: '+31 20 123 4567',
    rating: '4.7 (1481)',
    verified: true,
  },
  {
    image: image3,
    title: 'Smart IT Services',
    description: 'Creative designs to elevate your brand image',
    address: 'Herengracht 300, 1016CD, Amsterdam',
    email: 'info@dutchdesign.com',
    phone: '+31 20 123 4567',
    rating: '4.7 (1481)',
    verified: true,
  },
];

export default function FeaturedPartners() {
  return (
    <div className="py-5 md:py-8">
      <Container>
        <SectionTitle
          title="Featured Partners"
          subTitle="Explore our Featured Partners, showcasing top businesses with exclusive promotions, direct contact options, and enhanced visibility across the platform."
        />
      </Container>

      <FeaturedPartnerSlider featuredPartners={featuredSliderData} />
    </div>
  );
}
