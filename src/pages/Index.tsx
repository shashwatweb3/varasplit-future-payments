import Particles from "@/components/Particles";
import HeroSection from "@/components/HeroSection";
import FeaturesBlock from "@/components/FeaturesBlock";
import HowItWorks from "@/components/HowItWorks";
import SettlementInvoice from "@/components/SettlementInvoice";
import WhyVaraspit from "@/components/WhyVaraspit";
import SocialProof from "@/components/SocialProof";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <Particles />
    <HeroSection />
    <HowItWorks />
    <SettlementInvoice />
    <WhyVaraspit />
    <SocialProof />
    <ComingSoon />
    <Footer />
  </div>
);

export default Index;
