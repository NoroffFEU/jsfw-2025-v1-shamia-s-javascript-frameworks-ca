import { getProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/types/product";

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">NextCart</h1>

      <SearchBar products={products} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
