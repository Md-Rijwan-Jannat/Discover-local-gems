import Banner from '@/components/Module/home/banner';
import CategoryGrid from '@/components/Module/home/categoryGrid';
import FeaturedPartners from '@/components/Module/home/Featured/featuredPartners';
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
      <div className="bg-primary-200/5 py-16">
        <FeaturedPartners />
      </div>
      <div className="py-16">
        <Parallax />
      </div>
    </section>
  );
}
