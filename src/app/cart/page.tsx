"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const total = cartItems.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0,
  );
  const handleCheckout = () => {
    clearCart();
    router.push("/checkout-success");
  };

  if (cartItems.length === 0) {
    return (
      <main className="p-10 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <a
          href="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go Shopping
        </a>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">
                  ${item.discountedPrice.toFixed(2)} each
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Checkout
        </button>
      </div>
    </main>
  );
}
