import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="p-10 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="mb-6">Your order has been successfully placed.</p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
