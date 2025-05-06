import HeroSection from "@/components/HeroSection";
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
    <div className="p-10">
      <SocialMedia/>
    </div>
    </>
  );
}
