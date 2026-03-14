export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}
export interface ProductImage {
  url: string;
  alt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: ProductImage;
  price: number;
  discountedPrice: number;
  rating: number;
  tags?: string[];
  reviews?: Review[];
}
