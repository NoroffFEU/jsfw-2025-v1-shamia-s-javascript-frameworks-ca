import { Product } from "@/types/product";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export function getCart(): CartItem[] {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product: Product, quantity: number) {
  const cart = getCart();

  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.discountedPrice,
      image: product.image.url,
      quantity,
    });
  }

  saveCart(cart);
}

export function removeFromCart(id: string) {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
}

export function updateQuantity(id: string, quantity: number) {
  const cart = getCart();

  const item = cart.find((item) => item.id === id);

  if (item) {
    item.quantity = quantity;
  }

  saveCart(cart);
}
