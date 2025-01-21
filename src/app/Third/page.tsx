import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {client} from '@/sanity/lib/client'
import { Product } from '@/types/product'
import { urlFor } from '@/sanity/lib/image'

const getProducts = async() => {
  const products = await client.fetch(
    `*[_type=="product"][28..39]{
  _id,
  title,
  price,
    description,
    productImage
    
}`
  )
  return products
}
const page = async() => {
  const products = await getProducts();
  return (
    <div className="mt-[3%]">
      {/* Hero Image Section */}
      <section className="relative w-full lg:max-w-[1440px] mx-auto lg:h-[316px] h-[316px]">
        <Image
          src="/shop.jpg"
          alt="bedroom"
          layout="fill"
          className="object-cover" // Ensures the image maintains aspect ratio
          priority
        />
      </section>

   

      {/* Products Section */}
      <div className="flex flex-col justify-center items-center min-h-screen pt-[5%] pb-8">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className='mb-[100px] p-3'>
                        <div className='max-w-[1236px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto p-3'>
                            {products.map((product: Product) => (

                                <div key={product._id} className="card bg-gray-100">
                                    <Link href={`/product/${product._id}`}>
                                        <div style={{ width: '285px', height: '301px', position: 'relative' }}>
                                            <Image
                                                src={urlFor(product.productImage).url()}
                                                alt={product.title}
                                                layout="fill"        // Ensures the image fills the container
                                                objectFit="cover"    // Ensures the image is cropped properly without distortion
                                                objectPosition="center" // Center the image if it's cropped
                                            />
                                        </div>
                                        <div className='flex justify-start flex-col m-3 gap-3'>
                                            <h2 className='text-2xl font-bold'>{product.title}</h2>
                                            {/* <p className='text-gray-600'>{product.description}</p> */}
                                            <div className="flex items-center justify-between gap-2">
                                                <h1 className='text-lg font-bold'>Rp {product.price}.000</h1>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                    </div>
 {/* Products component remains unchanged */}
        </div>

        {/* Pagination Section */}
        <div className="flex flex-row w-full lg:w-[392px] justify-between items-center pt-[5%] px-3">
          <Link href={"/Shop"}>
          <div className="flex items-center justify-center bg-[#f9f1e7] hover:bg-[#b88e2f] w-[60px] h-[60px] text-center rounded-md text-black hover:text-white text-xl cursor-pointer">
            1
          </div>
          </Link>
          <Link href={"/Second"}>
          <div className=" flex items-center justify-center bg-[#f9f1e7] hover:bg-[#b88e2f] w-[60px] h-[60px] text-center rounded-md text-black  hover:text-white  text-xl cursor-pointer">
            2
          </div>
          </Link>
          <Link href={"/Third"}>
          <div className=" flex items-center justify-center bg-[#f9f1e7] hover:bg-[#b88e2f] w-[60px] h-[60px] text-center rounded-md text-black  hover:text-white  text-xl cursor-pointer">
            3
          </div>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full lg:max-w-[1440px] bg-[#FAF3EA] mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly items-center gap-6 lg:h-[270px]">
        <div>
          <Image
            src="/ss1.jpg"
            alt="bedroom"
            width={310}
            height={70}
            className="object-contain"
            priority
          />
        </div>
        <div>
          <Image
            src="/ss2.jpg"
            alt="bedroom"
            width={310}
            height={70}
            className="object-contain"
            priority
          />
        </div>
        <div>
          <Image
            src="/ss3.jpg"
            alt="bedroom"
            width={300}
            height={70}
            className="object-contain"
            priority
          />
        </div>
        <div>
          <Image
            src="/ss4.jpg"
            alt="bedroom"
            width={300}
            height={70}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page;
