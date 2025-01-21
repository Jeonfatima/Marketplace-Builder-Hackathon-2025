// src/app/product/[id]/page.tsx
import ProductDetails from "@/app/components/ProductDetails";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

// This is the correct way to handle the dynamic route for a page in Next.js
interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const product: Product | null = await client.fetch(
    `*[_type=="product" && _id==$id][0]{
      _id,
      title,
      price,
      description,
      productImage,
      tags
    }`,
    { id: params.id }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
