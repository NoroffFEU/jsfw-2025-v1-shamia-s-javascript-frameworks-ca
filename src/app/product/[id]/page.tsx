import { getProductById } from "@/services/api";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  return (
    <main className="p-10">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-yellow-500 mb-2">⭐ {product.rating}</p>

          <div className="text-xl font-bold mb-4">
            {product.discountedPrice < product.price ? (
              <>
                <span className="line-through text-gray-400 mr-2">
                  ${product.price}
                </span>

                <span className="text-green-600">
                  ${product.discountedPrice}
                </span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
