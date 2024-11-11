import Banner from '@/components/Module/home/banner';
import BookConsultation from '@/components/Module/home/book/book';
import BusinessReviews from '@/components/Module/home/businessReview/businessReviews';
import CategoryGrid from '@/components/Module/home/categoryGrid';
import FeaturedPartners from '@/components/Module/home/Featured/featuredPartners';
import InsightsInspiration from '@/components/Module/home/insightsInspiration/insightsInspiration';
import BrandMarquee from '@/components/Module/home/marquee';
import Parallax from '@/components/Module/home/parallax';

export default function Home() {
  return (
    <section>
      <div>
        <Banner />
        <BrandMarquee />
      </div>
      <div>
        <CategoryGrid />
      </div>
      <div className="bg-primary-200/5 py-8 md:py-[100px]">
        <FeaturedPartners />
      </div>
      <div className="mt-8 md:pt-16">
        <Parallax />
      </div>
      <div className="pt-8 md:pt-16">
        <BusinessReviews />
      </div>
      <div className="pt-8 md:pt-16">
        <InsightsInspiration />
      </div>
      <div className="pt-8 md:pt-16">
        <BookConsultation />
      </div>
    </section>
  );
}
