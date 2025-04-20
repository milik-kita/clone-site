import BaseLayout from "@/components/layout/BaseLayout";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Partners from "@/components/home/Partners";
import InstagramFeed from "@/components/home/InstagramFeed";
import ShippingPromo from "@/components/home/ShippingPromo";
import PromoPopup from "@/components/ui/PromoPopup";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSlider />
      <FeaturedCategories />
      <ShippingPromo />
      <Partners />
      <InstagramFeed />
      <PromoPopup />
    </BaseLayout>
  );
}
