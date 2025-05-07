import Image from 'next/image';

export default function NewTechExperience() {
  return (
    <div className="bg-primary-soft items-center flex flex-col flex-col-reverse md:flex-row rounded-lg overflow-hidden mx-auto  my-5 relative md:*:w-1/2">
        <p className="relative z-10 text-xl md:text-2xl text-white md:pl-20 max-md:my-4 max-md:px-4">Install your App in seconds, connect your app and take your sport to the <span className="text-secondary">next level</span></p>

        <Image src="/glowing-blue.png" alt="glowing blue" width={595} height={339} className='lg:ml-auto' />
      <div className="!w-full md:absolute inset-0 z-0 overflow-hidden rounded-lg bg-[linear-gradient(90deg,_#1C184F_56.52%,_rgba(28,24,79,0)_81.95%)]">
      </div>
    </div>
  );
}
