import React from 'react'
import Image from 'next/image'
const Inspiration = () => {
  return (
    <div>   {/* inspiration section */}
    <section className="bg-[#FCF8F3] flex flex-col lg:flex-row justify-evenly items-center w-full py-10 lg:max-w-[1440px] mx-auto">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-3xl text-black mt-2 font-extrabold">50+ Beautiful rooms <br /> inspiration</h1>
        <p className="text-lg text-[#4d4b49] mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="mt-auto px-6 py-2 bg-[#b88e2f] text-white w-[176px] h-[48px] font-semibold">
          Explore More
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-0">
        {/* Image 1 */}
        <div className="flex-shrink-0">
          <Image
            src="/home.jpg"
            alt="bedroom"
            width={404}
            height={582}
            className="object-contain max-w-full"
            priority
          />
        </div>
        {/* Image 2 */}
        <div className="flex-shrink-0">
          <Image
            src="/home2.jpg"
            alt="bedroom"
            width={372}
            height={486}
            className="object-contain max-w-full justify-start"
            priority
          />
        </div>
      </div>
    </section></div>
  )
}

export default Inspiration