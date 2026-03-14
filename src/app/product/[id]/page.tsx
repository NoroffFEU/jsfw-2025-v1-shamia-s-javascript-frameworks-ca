import { getProductById } from "@/services/api";
import { Product } from "@/types/product";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id.trim();

  const product: Product = await getProductById(id);

  return (
    <main className="p-10 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full rounded-lg object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-gray-600 mb-4">{product.description}</p>

          {product.tags && product.tags.length > 0 && (
            <div className="mb-4">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-yellow-500 mb-2">⭐ {product.rating}</p>

          <div className="text-xl font-bold mb-4">
            {product.discountedPrice < product.price ? (
              <>
                <span className="line-through text-gray-400 mr-2">
                  ${product.price.toFixed(2)}
                </span>

                <span className="text-green-600">
                  ${product.discountedPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </div>

          <AddToCartButton product={product} />

          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>

              <ul className="space-y-4">
                {product.reviews.map((review) => (
                  <li key={review.id} className="border p-4 rounded shadow">
                    <p className="font-semibold">{review.username}</p>
                    <p className="text-yellow-500">⭐ {review.rating}</p>
                    <p>{review.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
