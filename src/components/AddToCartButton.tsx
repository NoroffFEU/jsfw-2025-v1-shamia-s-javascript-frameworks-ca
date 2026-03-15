"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setMessage(`${quantity} × ${product.title} added to cart`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span className="px-2">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>

      {message && (
        <div className="mt-2 bg-green-200 text-green-800 px-4 py-2 rounded shadow transition-opacity">
          {message}
        </div>
      )}
    </div>
  );
}
