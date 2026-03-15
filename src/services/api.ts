import { Product } from "@/types/product";

const API_URL = "https://v2.api.noroff.dev/";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}online-shop`);

  if (!response.ok) {
    console.error(
      "Failed to fetch products",
      response.status,
      await response.text(),
    );
    throw new Error("Failed to fetch products");
  }

  const json = await response.json();
  return json.data as Product[];
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}online-shop/${id}`);

  if (!response.ok) {
    console.error(
      "Failed to fetch product",
      response.status,
      await response.text(),
    );
    throw new Error("Failed to fetch product");
  }

  const json = await response.json();
  return json.data as Product;
}
