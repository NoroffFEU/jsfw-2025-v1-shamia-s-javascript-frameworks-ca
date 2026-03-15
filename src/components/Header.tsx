"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        NextCart
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>

        <Link href="/cart" className="relative text-xl">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
