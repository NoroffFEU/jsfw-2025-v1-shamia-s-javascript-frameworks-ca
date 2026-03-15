"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  products?: Product[];
};

export default function SearchBar({ products = [] }: Props) {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border px-4 py-2 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <div className="absolute w-full bg-white border mt-1 rounded shadow z-10 max-h-80 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src={product.image.url}
                  alt={product.image.alt}
                  className="w-10 h-10 object-cover rounded"
                />

                <div className="flex flex-col">
                  <span className="text-sm font-medium">{product.title}</span>

                  <span className="text-xs text-gray-500">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No products found</p>
          )}
        </div>
      )}
    </div>
  );
}
