import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full lg:max-w-[1440px] mx-auto'>
       {/* Image Section */}
     <section className="relative w-full lg:max-w-[1440px] mx-auto lg:h-[316px] h-[316px] ">
        <Image
          src="/contact.jpg"
          alt="bedroom"
          layout="fill"
          className="object-cover" // Use object-cover to maintain aspect ratio and cover the container
          priority
        />
      </section>
      <div className='lg:max-w-[644px] pt-[5%]'>
        <h1 className='text-center text-4xl pb-8 font-bold'>Get in Touch with us</h1>
        <p className='text-lg text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, molestias reiciendis assumenda animi <br/> laudantium voluptas qui commodi odit totam blanditiis.</p>
      </div>


         {/* contact section */}
      <div className='flex flex-col lg:flex-row mx-auto lg:max-w-[1440px] justify-center lg:gap-[100px] items-center p-[5%]'>
             <div>
             <Image
          src="/address.jpg"
          alt="bedroom"
          width={393}
          height={537}
          className="object-cover" 
          priority
        />
             </div>




             <div>


             <div className='lg:max-w-[635px] m-[10%]'>
     
            <form className="space-y-6">

            <div className='text-xl lg:max-w-[635px] '>
          <label htmlFor="yourname" className="block text-xl font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="Name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div className='text-xl'>
          <label htmlFor="companyName" className="block text-xl font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="companyName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>


        <div className='text-xl'>
          <label htmlFor="companyName" className="block text-xl font-medium text-gray-700">
            contact
          </label>
          <input
            type="phone"
            id="companyName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>


        <div className='text-xl'>
          <label htmlFor="companyName" className="block text-xl font-medium text-gray-700">
            Message
          </label>
          <input
            type="textarea"
            id="companyName"
            className="mt-1 block w-full border border-gray-300 rounded-md row{4} shadow-sm p-2"
          />
        </div>

              </form>
              </div>


             </div>

      </div>
              

              
<div className="w-full lg:max-w-[1440px] bg-[#FAF3EA] mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly items-center gap-6 lg:gap-y-0 lg:h-[270px]">
  <div>
    <Image
      src="/ss1.jpg"
      alt="bedroom"
      width={310}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
  <div>
    <Image
      src="/ss2.jpg"
      alt="bedroom"
      width={310}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
  <div>
    <Image
      src="/ss3.jpg"
      alt="bedroom"
      width={300}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
  <div>
    <Image
      src="/ss4.jpg"
      alt="bedroom"
      width={300}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
</div>

    </div>
  )
}

export default page