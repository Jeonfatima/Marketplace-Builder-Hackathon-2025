import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
        {/* Image section */}
        <div className="relative hidden lg:block md:w-full h-[716px] mt-4">
          {/* First image as background with max-width 1440px */}
          <div className="max-w-[1440px] w-full h-full mx-auto relative">
            <Image
              src="/hero.jpg"
              alt="sofa"
              width={1440}
              height={716}
              className="object-cover w-full h-full"
              priority 
            />
        
            {/* Content Box inside the background image with gap on right */}
            <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-[#fff3e3] p-8 rounded-xl w-[643px] h-[443px] flex flex-col justify-between mr-[50px]">
              {/* Title and Text */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold text-gray-800">New Arrival</h3>
                <h2 className="text-5xl text-[#b88e2f] mt-2 font-extrabold">Discover Our <br />New Collection</h2>
                <p className="text-lg text-[#4d4b49] mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              </div>
        
              {/* Button */}
              <button className="mt-auto px-6 py-2 bg-[#b88e2f] text-white w-[222px] h-[74px] font-semibold">
                <Link href={"/Shop"}>
                BUY NOW
                </Link>
              </button>
            </div>
          </div>
        </div>
        
        {/* Responsive design for smaller and medium devices */}
        <div className="relative w-full mt-4 sm:mt-6 lg:hidden">
          <div className="w-full">
            <Image
              src="/hero.jpg"
              alt="sofa"
              width={1440}
              height={716}
              className="object-cover w-full h-full"
            />
          </div>
        
          {/* Content Box below the image for smaller screens */}
          <div className="bg-[#fff3e3] p-8 rounded-xl w-full max-w-[643px] mx-auto mt-6">
            {/* Title and Text */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-gray-800">New Arrival</h3>
              <h2 className="text-3xl text-[#b88e2f] mt-2 font-extrabold">Discover Our <br />New Collection</h2>
              <p className="text-lg text-[#4d4b49] mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
        
            {/* Button */}
            <button className="mt-auto px-6 py-2 bg-[#b88e2f] text-white w-[222px] h-[74px] font-semibold">
              BUY NOW
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default Hero