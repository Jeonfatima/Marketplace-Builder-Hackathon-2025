/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"

import { useParams } from 'next/navigation'
import  ProductDetails  from '@/app/components/ProductDetails'
import React, { useEffect, useState } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Product } from '@/types/product';

const Page = () => {
    const { id }: any = useParams(); // Use id instead of slug
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            // Fetch products and filter by ID
            const products = await client.fetch(groq`*[_type=="product"]`);
            const foundProduct = products.find((product: Product) => product._id == id); // Match by _id
            setProduct(foundProduct);
        };

        fetchProduct();
    }, [id]); // Dependency is now `id` instead of `slug`

   

    return (
        <>
          
            <ProductDetails product={product} />
        </>
    )
}

export default Page;
