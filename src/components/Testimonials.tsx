'use client'
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import testimonials from "../content/testimonials.json";

export default function TestimonialSection() {

  const [activeIndex, setActiveIndex] = useState(0);

  const getPrevIndex = useCallback((current) => {
    return current === 0 ? testimonials.length - 1 : current - 1;
  }, [testimonials.length]);

  const getNextIndex = useCallback((current) => {
    return current === testimonials.length - 1 ? 0 : current + 1;
  }, [testimonials.length]);

  const getCardStyle = (index) => {
    if (index === activeIndex) {
      return "z-30 opacity-100 translate-y-0 scale-100";
    } else if (index === getPrevIndex(activeIndex)) {
      return "z-20 opacity-70 -translate-y-32 scale-95";
    } else if (index === getNextIndex(activeIndex)) {
      return "z-10 opacity-70 translate-y-32 scale-95";
    } else {
      return "opacity-0 translate-y-48 scale-90 pointer-events-none";
    }
  };

  return (
    <div className='relative '>
      <Image
        src="/isolation-mode.png"
        alt="isolation mode"
        className='absolute left-20 top-20 max-md:hidden'
        width={507}
        height={224}
      />
      <Image
        src="/clip-path.png"
        alt="clip path"
        className='absolute left-0 -bottom-20'
        width={860}
        height={672}
      />
      <div className="mx-auto max-w-[1216px] w-full flex flex-col md:flex-row text-white relative overflow-hidden min-h-[110vh]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full "></div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center p-8 relative z-10">

          <h2 className="text-2xl font-medium md:mb-4 text-lg md:text-2xl">Testimonials</h2>

          <div className="text-2xl md:text-4xl font-bold mb-2">
            Don't take our word <br /> for it{" "}
            <span className="text-yellow-500">Take theirs</span>
          </div>

        </div>

        <div className="md:w-1/2 flex items-center relative z-10">
          <div className="w-full relative p-4 pr-8 md:p-8 my-24">
            <div className="relative h-96 mt-8 mr-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full bg-indigo-900 p-4 md:p-8 rounded-lg shadow-lg transition-all duration-500 ${getCardStyle(index)}`}
                >
                  <h3 className="text-xl font-bold text-yellow-500 mb-1">{testimonial.name}</h3>
                  <p className="text-gray-300 mb-4">{testimonial.company}</p>
                  <p className="text-gray-100 italic text-sm md:text-base ">"{testimonial.text}"</p>
                </div>
              ))}
            </div>

            <div className="absolute right-4 top-42 md:top-50 transform -translate-y-1/2 flex flex-col gap-2 items-center">
              <button
                onClick={() => setActiveIndex(getPrevIndex(activeIndex))}
                className="mx-2 p-2 bg-indigo-800 rounded-full hover:bg-indigo-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 15l6-6l6 6"/></svg>
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-12 rounded-full transition-all ${index === activeIndex
                    ? "bg-yellow-500"
                    : "bg-gray-400 h-4"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
              <button
                onClick={() => setActiveIndex(getNextIndex(activeIndex))}
                className="mx-2 p-2 bg-indigo-800 rounded-full hover:bg-indigo-700 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56"><path fill="currentColor" d="M28 39.46a2.1 2.1 0 0 0 1.57-.679l18.164-18.586a2.1 2.1 0 0 0 .633-1.5a2.12 2.12 0 0 0-2.156-2.156a2.27 2.27 0 0 0-1.523.61L28 34.21L11.313 17.148a2.23 2.23 0 0 0-1.524-.609a2.12 2.12 0 0 0-2.156 2.156c0 .586.234 1.102.633 1.524L26.43 38.78c.445.446.96.68 1.57.68" /></svg>                            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}