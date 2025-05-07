'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: "🔄",
      title: "Customized Web & APP Development",
      description: "A complete range of Web & App development services that turns your ideas into a new driving force of your business."
    },
    {
      id: 2,
      icon: "🏃",
      title: "Games & Sports Management System",
      description: "A complete range of Web & App development services that turns your ideas into a new driving force of your business."
    },
    {
      id: 3,
      icon: "🏋️",
      title: "Fitness Assessment & Monitoring",
      description: "A complete range of Web & App development services that turns your ideas into a new driving force of your business."
    },
    {
      id: 4,
      icon: "👥",
      title: "Corporate Training",
      description: "A complete range of Web & App development services that turns your ideas into a new driving force of your business."
    }
  ];

  const [activeService, setActiveService] = useState(1);

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left section - Services list */}
        <div className="lg:w-1/2 pr-0 lg:pr-14">
          <h2 className="text-lg md:text-2xl font-medium mb-2">Our Services</h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-10">
            The only <span className="text-yellow-500">advantage</span> you need
          </h1>
          
          <div className="space-y-4">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 bg-[#1B1850] shadow-lg border border-[#CBCBEF33] hover:bg-transparent hover:border-0 `}
                onClick={() => setActiveService(service.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="mt-1">
                    {service.id === 1 && (
                        <Image src="/Dumbbell.png" width={100} height={100} alt='icon' />
                    )}
                    {service.id === 2 && (
                        <Image src="/Treadmill.png" width={100} height={100} alt='icon' />

                    )}
                    {service.id === 3 && (
                      <Image src="/Smartphone.png" width={100} height={100} alt='icon' />
                    )}
                    {service.id === 4 && (
                      <Image src="/mind.png" width={100} height={100} alt='icon' />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right section - Images */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative w-full h-[400px] md:h-[550px]">
            {/* Main image */}
            <div className="absolute md:top-20 right-0 w-full  rounded-lg overflow-hidden">
              <img 
                src="/run.png" 
                alt="Athletes running" 
                className=""
                width={368}
                height={318}
              />
            </div>
            
            {/* Overlapping image */}
            <div className="absolute top-40 md:top-64 right-0 md:right-22 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/run.gif" 
                alt="Sports mascot" 
                className="w-[328px] md:w-[408px] h-[268px] md:h-[320px] object-cover"
              />
            </div>
          </div>
      </div>
    </div>
  );
}