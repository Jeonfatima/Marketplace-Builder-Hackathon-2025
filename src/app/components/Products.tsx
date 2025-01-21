
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {client} from '@/sanity/lib/client'
import { Product } from '@/types/product'
import { urlFor } from '@/sanity/lib/image'
import Button from './Button'

const getProducts = async() => {
  const products = await client.fetch(
    `*[_type=="product"][0..7]{
  _id,
  title,
  price,
    description,
    productImage
    
}`
  )
  return products
}
const Products = async () => {
  const products = await getProducts();
 
  return (
    <div className='pt-{100px}' >

            {/* Products Section */}
            <div className="flex flex-col justify-center items-center min-h-screen pb-8">
                <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 p-4">
                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-extrabold">Our Products</h1>
                    </div>

                  <div className='mb-[100px] p-3'>
                      <div className='max-w-[1236px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto p-3'>
                          {products.map((product: Product) => (

                              <div key={product._id} className="card bg-gray-100">
                                  <Link href={`/product/${product._id}`}>
                                      <div
                                                                                 className="relative w-full h-72 sm:h-64 xs:h-48"
                                                                                 style={{ maxWidth: '285px' }}
                                                                             >
                                                                                 <Image
                                                                                     src={urlFor(product.productImage).url()}
                                                                                     alt={product.title}
                                                                                     layout="fill" // Ensures the image fills the container
                                                                                     objectFit="cover" // Ensures the image scales without distortion
                                                                                     objectPosition="center" // Center the image if it's cropped
                                                                                 />
                                                                             </div>
                                      <div className='flex justify-start flex-col m-3 gap-3'>
                                          <h2 className='text-2xl font-bold'>{product.title}</h2>
                                          {/* <p className='text-gray-600'>{product.description}</p> */}
                                          <div className="flex text-yellow-400">
                                              ★★★★★
                                          </div>
                                          <div className="flex items-center justify-between gap-2">
                                              <h1 className='text-lg font-bold'>Rp {product.price}.000</h1>

                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          ))}
                      </div>

                  </div>


                </div>
                <Button/>
            </div>
        </div>
    )
}

export default Products