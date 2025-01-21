import React from 'react'
import Image from 'next/image'
const Browse = () => {
  return (
    <div>
         {/* Browse Section */}
    <div className="flex flex-col justify-center items-center pt-[5%]">
      <div className="flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-4xl font-extrabold">Browse the range</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
    
        {/* People Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:max-w-[1170px] pt-[10%] pb-[10%] gap-6 w-full mx-auto">
    
          {/* Dining Image and Heading */}
          <div className="flex flex-col justify-center items-center w-full px-6 lg:px-0">
            <Image
              src="/dining.jpg"
              alt="dining"
              width={370}
              height={430}
              className="object-contain max-w-full"
              priority
            />
            <h3 className="text-3xl mt-4">Dining</h3>
          </div>
    
          {/* Living Image and Heading */}
          <div className="flex flex-col justify-center items-center w-full px-6 lg:px-0">
            <Image
              src="/living.jpg"
              alt="Living"
              width={370}
              height={430}
              className="object-contain max-w-full"
              priority
            />
            <h3 className="text-3xl mt-4">Living</h3>
          </div>
    
          {/* Bedroom Image and Heading */}
          <div className="flex flex-col justify-center items-center w-full px-6 lg:px-0">
            <Image
              src="/bedroom.jpg"
              alt="Bedroom"
              width={370}
              height={430}
              className="object-contain max-w-full"
              priority
            />
            <h3 className="text-3xl mt-4">Bedroom</h3>
          </div>
    
        </div>
      </div>
    </div></div>
  )
}

export default Browse