import HeroSection from "@/components/HeroSection";
import NeedInfo from "@/components/NeedInfo";
import NewTechExperience from "@/components/NewTechExperience";
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
    <div className="py-10 px-20">
      <p className="font-primary text-white font-bold text-4xl">A new tech experience,<span className="text-secondary"> in a heartbeat</span></p>
      <NewTechExperience/>
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
