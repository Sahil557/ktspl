import Image from 'next/image';

export default function NewTechExperience() {
  return (
    <div className="bg-primary-soft flex rounded-lg mx-auto gap-20 my-5">
      <div className="m-auto">
        <p className="text-2xl text-white">Install your App in seconds, connect your<br/> app and take your sport to the <span className="text-secondary">next level</span></p>
      </div>

      <div className=" inset-0 z-0 overflow-hidden rounded-r-lg">
        <Image src="/glowing-blue.png" alt="glowing blue" width={595} height={339} />
      </div>
    </div>
  );
}
