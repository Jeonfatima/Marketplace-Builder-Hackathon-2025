
/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import Image from 'next/image'

import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Product } from '@/types/product';

import { urlFor } from '@/sanity/lib/image'
import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';

import Button from './Button';




const ProductDetails = ({ product }: { product: Product }) => {
  console.log("Product:", product);
  console.log("Description:", product?.description);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const maxLength = 150; // Set the desired length for truncated text
  const isLongDescription = product.description.length > maxLength;
  const shortDescription = product.description.slice(0, maxLength);
  const {cartItems, addProduct , qty , incQty , decQty}:any = useContext(CartContext);
  console.log(cartItems)
  return (
    <div> <div>
  
    <div className="pt-[5%] p-5">
      <div className="max-w-[1400px] mx-auto px-4 py-8 border-b border-gray-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Image */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-2 relative">
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}

              width={265} height={280}
              className=" rounded-md"
            />
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}

              width={265} height={280}
              className=" rounded-md hidden md:block"
            />
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}

              width={265} height={280}
              className=" rounded-md hidden md:block"
            />
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}

              width={265} height={280}
              className=" rounded-md hidden md:block"
            />
          </div>
          {/* Right Section: Details */}
          <div>
            <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
            <h3 className="text-lg text-gray-500 mb-4">Rs. {product.price}</h3>
            {/* Ratings */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="text-sm text-gray-500">(5 Customer Review)</span>
            </div>
            

      {/* Product Description */}
      <p className="text-gray-600 mb-4">
        {isExpanded || !isLongDescription
          ? product.description
          : shortDescription + "..."}
        {isLongDescription && (
          <span
            onClick={toggleReadMore}
            className="text-blue-500 cursor-pointer ml-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        )}
      </p>


            {/* Size Options */}
            <div className="mb-4">
              <span className="font-medium">Size: </span>
              <div className="flex items-center gap-2 mt-2">
                <button className="px-4 py-2 bg-gray-200 rounded-md">L</button>
                <button className="px-4 py-2 bg-gray-200 rounded-md">XL</button>
                <button className="px-4 py-2 bg-gray-200 rounded-md">XS</button>
              </div>
            </div>

         
             
             {/* quantity */}
             <div className='flex gap-2 items-center pr-6 py w-[215px] h-[64px] rounded-md mb-3'>
        <h3>Quantity</h3>
        <p className='text-[16px] cursor-pointer;
padding: 6px 12px flex gap-4 p-3 items-center border  border-black'>
          <span className='text-red-500 font-bold cursor-pointer'
             onClick={decQty}>
          
            <AiOutlineMinus />
          </span>
          <span className='num'>{qty}</span>
          <span className='text-green-500 font-bold cursor-pointer'
            onClick={incQty}>
          
            <AiOutlinePlus />
          </span>

        </p>
      </div>


            <button className="px-6 py w-[215px] h-[64px] rounded-md border border-black hover:bg-gray-100"
             onClick={()=>addProduct(product,qty)}>
              
              Add To Cart
            </button>
            {/* Additional Information */}

            <div className="lg:flex lg:justify-start lg:max-w-[1000px] lg:pt-10 text-gray-500">
              <div className="text-xl space-y-2 lg:text-left">
                <div className="text-left">
                  <span className="font-medium">SKU:</span> SS001
                </div>
                <div className="text-left">
                  <span className="font-medium">Category:</span> Sofas
                </div>
                <div className="text-left">
                {product.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
                </div>
                <div className="flex flex-row justify-start text-left">
                  <span className="font-medium pt-1">Share:</span>
                  <div className="flex gap-2 mt-2">
                    <FaFacebook className="text-xl" />
                    <IoLogoLinkedin className="text-xl" />
                    <AiFillTwitterCircle className="text-xl" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      {/* description */}
      <div className='flex flex-col w-full lg:max-w-[1440px] mx-auto pt-8'>
        <div className='flex flex-col lg:flex-row lg:max-w-[649px] mx-auto text-2xl justify-evenly gap-8 font-bold'>
          <div>Description</div>
          <div className='text-gray-500'>Additional Information</div>
          <div className='text-gray-500'>Reviews[5]</div>

        </div>

        <div className='w-full lg:max-w-[1024px] mx-auto pt-10 text-gray-500'>
          <p className="mb-4 text-md">
            Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo
            speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the
            show on the road.
          </p>
          <p className="mb-4 text-md">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
            engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
            compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced. The analogue knobs allow
            you to fine-tune the controls to your personal preferences while the guitar-influenced
            leather strap enables easy and stylish travel.
          </p>
        </div>

        

      </div>

       <Button/>

    </div>

  </div></div>
  )
}

export default ProductDetails