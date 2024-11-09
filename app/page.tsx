import Banner from '@/components/Module/home/banner';
import CategoryGrid from '@/components/Module/home/categoryGrid';
import BrandMarquee from '@/components/Module/home/marquee';

export default function Home() {
  return (
    <section>
      <Banner />
      <BrandMarquee />
      <CategoryGrid />
    </section>
  );
}
