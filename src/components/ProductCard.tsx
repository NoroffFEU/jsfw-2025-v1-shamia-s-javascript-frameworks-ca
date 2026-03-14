import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const discount = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );
  const productId = product.id?.trim();
  return (
    <Link href={`/product/${productId}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-48 object-cover rounded"
        />

        {product.discountedPrice < product.price && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )}

        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-yellow-500">⭐ {product.rating}</p>
        <div className="mt-2">
          {product.discountedPrice < product.price ? (
            <>
              <span className="line-through text-gray-400 mr-2">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-green-600 font-bold">
                ${product.discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-bold">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
