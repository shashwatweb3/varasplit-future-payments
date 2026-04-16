import Particles from "@/components/Particles";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MoreThanSplitting from "@/components/MoreThanSplitting";
import SettlementInvoice from "@/components/SettlementInvoice";
import WhyVarasplit from "@/components/WhyVarasplit";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import QuickAccessSection from "@/components/QuickAccessSection";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <Particles />
    <SiteHeader />
    <HeroSection />
    <QuickAccessSection />
    <HowItWorks />
    <SettlementInvoice />
    <WhyVarasplit />
    <MoreThanSplitting />
    <Footer />
  </div>
);

export default Index;
