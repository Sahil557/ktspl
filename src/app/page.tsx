import HeroSection from "@/components/HeroSection";
import NeedInfo from "@/components/NeedInfo";
import OurPartners from "@/components/OurPartners";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <>
    <div className="px-20">
      <HeroSection/>
    </div>
    <div className="px-20">
      <OurPartners/>
    </div>
    <div className="py-10">
      <SocialMedia/>
    </div>
    <div className="bg-primary-dark py-20">
      <NeedInfo/>
    </div>
    </>
  );
}
