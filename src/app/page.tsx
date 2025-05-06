import Image from 'next/image';
import HeroSection from "@/components/HeroSection";
import NeedInfo from "@/components/NeedInfo";
import NewTechExperience from "@/components/NewTechExperience";
import OurPartners from "@/components/OurPartners";
import SocialMedia from "@/components/SocialMedia";
import Card from '@/common/Card';
import CallToAction from '@/common/CallToAction';

export default function Home() {
  return (
    <>
      <div className="px-20">
        <HeroSection />
      </div>
      <div className="px-20">
        <OurPartners />
      </div>
      <div className="py-10 max-w-screen-xl mx-auto">
        <p className="font-primary text-white font-bold text-4xl">A new tech experience,<span className="text-secondary"> in a heartbeat</span></p>
        <NewTechExperience />
      </div>

      <div className="bg-primary-dark">
        <div className="py-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl text-white">The App</p>
          <p className="font-primary text-white font-bold text-4xl mt-2">
            The only <span className="text-secondary">advantage</span> you need
          </p>

          <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <Card />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/mobile.png"
                alt="mobile"
                width={543}
                height={673}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <CallToAction message="Ready to elevate your game? Let's talk." buttonText="Join Now" />
        </div>
      </div>

      <div className="py-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-2xl text-white">Our Services</p>
        <p className="font-primary text-white font-bold text-4xl mt-2">
          The only <span className="text-secondary">advantage</span> you need
        </p>

        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <Card />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/mobile.png"
              alt="mobile"
              width={543}
              height={673}
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <CallToAction message="Lets connect and get in touch." buttonText="Get Started" />
      </div>



      <div className="bg-primary-dark">

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <Image
                src="/isolation-mode.png"
                alt="isolation mode"
                width={507}
                height={224}
              />
              <p className="text-2xl text-white">Testimonials</p>
              <p className="font-primary text-white font-bold text-4xl mt-2">
                Don’t take our word <br />for it <span className="text-secondary">Take theirs</span>
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Card />
            </div>
          </div>
        </div>
        <Image
          src="/clip-path.png"
          alt="clip path"
          width={860}
          height={672}
          className=""
        />
      </div>



      <div className="py-30">
        <SocialMedia />
      </div>
      <div className="bg-primary-dark py-30">
        <NeedInfo />
      </div>
    </>
  );
}
