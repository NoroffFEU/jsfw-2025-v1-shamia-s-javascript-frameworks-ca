import { getProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";

export default async function Home() {

  const Products = await getProducts();

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        Welcome to NextCart
      </h1>

      <p className="mt-4 text-lg mb-8">
        Discover amazing products at great prices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {Products.map((product)=> (
          <ProductCard
          key={product.id}
          product={product}
          />
        ))}

      </div>

    </main>
  );
}

  
