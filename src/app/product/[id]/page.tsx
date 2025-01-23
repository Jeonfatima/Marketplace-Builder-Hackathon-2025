/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import ProductDetails from "@/app/components/ProductDetails";
import React, { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

const Page = () => {
    const { id }: any = useParams(); // Use id instead of slug
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        console.log("Fetching Product with ID:", id); // Debug
        if (id) {
            const fetchProduct = async () => {
                const foundProduct = await client.fetch(
                    groq`*[_type == "product" && _id == $id][0]`,
                    { id }
                );
                console.log("Fetched Product:", foundProduct); // Debug
                setProduct(foundProduct);
            };

            fetchProduct();
        }
    }, [id]);

    return (
        <>
            {product ? (
                <ProductDetails product={product} />
            ) : (
                <div>Loading product details...</div>
            )}
        </>
    );
};

export default Page;
