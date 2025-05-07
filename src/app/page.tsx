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
      <div className="max-w-[1400px] mx-auto space-y-7">
        <HeroSection />
        <OurPartners />
      </div>
      <div className="mt-24 py-4 mx-auto max-w-[1216px] w-full px-4">
        <p className="font-primary text-white font-bold  text-2xl md:text-4xl">A new tech experience,<span className="text-secondary"> in a heartbeat</span></p>
        <NewTechExperience />
      </div>

      <div className="bg-primary-dark">
        <div className="py-20 mx-auto max-w-[1216px] w-full px-4 ">
          <p className="text-lg md:text-2xl text-white">The App</p>
          <p className="font-primary text-white font-bold  text-2xl md:text-4xl mt-2">
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

      <div className="py-20 mx-auto max-w-[1216px] w-full px-4 sm:px-6 lg:px-4">
        <p className="text-lg md:text-2xl text-white">Our Services</p>
        <p className="font-primary text-white font-bold  text-2xl md:text-4xl mt-2">
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

        <div className=" mx-auto max-w-[1216px] w-full px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <Image
                src="/isolation-mode.png"
                alt="isolation mode"
                width={507}
                height={224}
              />
              <p className="text-lg md:text-2xl text-white">Testimonials</p>
              <p className="font-primary text-white font-bold  text-2xl md:text-4xl mt-2">
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



      <div className=" py-10 md:py-30 mx-auto max-w-[1216px] w-full px-4">
        <SocialMedia />
      </div>
      <div className="bg-primary-dark py-10 md:py-30">
        <NeedInfo />
      </div>
    </>
  );
}
