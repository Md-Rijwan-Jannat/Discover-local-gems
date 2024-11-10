import SectionTitle from '@/components/ui/sectionTitle';
import React from 'react';
import ReviewSlider from './ReviewSlider';

export default function BusinessReviews() {
  return (
    <div>
      <SectionTitle
        title="Business Reviews"
        subTitle="Explore customer reviews to understand business reputations, with insights on customer satisfaction, reliability, and service quality for better decision-making."
      />
      <ReviewSlider />
    </div>
  );
}
