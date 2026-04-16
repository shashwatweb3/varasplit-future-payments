import Particles from "@/components/Particles";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MoreThanSplitting from "@/components/MoreThanSplitting";
import SettlementInvoice from "@/components/SettlementInvoice";
import WhyVarasplit from "@/components/WhyVarasplit";
import ProductPreview from "@/components/ProductPreview";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <Particles />
    <HeroSection />
    <HowItWorks />
    <SettlementInvoice />
    <WhyVarasplit />
    <MoreThanSplitting />
    <ProductPreview />
    <Footer />
  </div>
);

export default Index;
