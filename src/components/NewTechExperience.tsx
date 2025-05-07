import Image from 'next/image';

export default function NewTechExperience() {
  return (
    <div className='flex flex-wrap gap-4 mb-10'>
    <div className="bg-primary-soft items-center flex flex-col flex-col-reverse md:flex-row rounded-lg overflow-hidden mx-auto  my-5 relative md:*:w-1/2">
        <p className="relative z-10 text-xl md:text-2xl text-white md:pl-20 max-md:my-4 max-md:px-4">Install your App in seconds, connect your app and take your sport to the <span className="text-secondary">next level</span></p>

        <Image src="/glowing-blue.png" alt="glowing blue" width={595} height={339} className='lg:ml-auto' />
      <div className="!w-full md:absolute inset-0 z-0 overflow-hidden rounded-lg bg-[linear-gradient(90deg,_#1C184F_56.52%,_rgba(28,24,79,0)_81.95%)]">
      </div>
    </div>
    <div className="lg:w-[49%] px-7 pt-7 lg:pt-34 rounded-lg bg-[#1C184F] border border-[#CBCBEF33] text-white flex flex-col  md:flex-row">
      <div className="flex flex-col gap-4 lg:gap-7 lg:w-1/2">
        <h3 className='text-[30px] font-bold'>Sportwizz</h3>
        <p className='text-[#CCCCFF]'>Facility Booking Management System is a cloud-based Sports Management solution.</p>
        <div className='flex items-center gap-2'>
          More 
          <span className='size-4 bg-[#E3AA2F] rounded-full grid place-content-center text-black p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.292 12L9.046 7.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l4.388 4.389q.131.13.184.267t.053.298t-.053.298t-.184.268l-4.388 4.388q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354z"/></svg>
          </span>
          </div>
      </div>
      <div>
        <Image src="/sportwizz.png" alt="sport" width={266} height={428} className='mt-4' /> 
      </div>
    </div>
    <div className="lg:w-[49%] px-7 pt-7 lg:pt-34 rounded-lg bg-[#1C184F] border border-[#CBCBEF33] text-white flex flex-col  md:flex-row">
      <div className="flex flex-col gap-4 lg:gap-7 lg:w-1/2">
        <h3 className='text-[30px] font-bold'>Allsport</h3>
        <p className='text-[#CCCCFF]'>Facility Booking Management System is a cloud-based Sports Management solution.</p>
        <div className='flex items-center gap-2'>
          More 
          <span className='size-4 bg-[#E3AA2F] rounded-full grid place-content-center text-black p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.292 12L9.046 7.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l4.388 4.389q.131.13.184.267t.053.298t-.053.298t-.184.268l-4.388 4.388q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354z"/></svg>
          </span>
          </div>
      </div>
      <div>
        <Image src="/sportwizz.png" alt="sport" width={266} height={428} className='mt-4' /> 
      </div>
    </div>
    </div>
  );
}
