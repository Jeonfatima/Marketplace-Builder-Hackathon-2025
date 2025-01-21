// src/app/product/[id]/page.tsx
import ProductDetails from "@/app/components/ProductDetails";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

// Define the expected type for the params
interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params; // Destructure the id from params

  // Fetch product data based on the dynamic route parameter `id`
  const product: Product | null = await client.fetch(
    `*[_type=="product" && _id==$id][0]{
      _id,
      title,
      price,
      description,
      productImage,
      tags
    }`,
    { id }
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
