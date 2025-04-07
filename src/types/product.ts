export interface ProductTypes {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  sold: number;
  total: number;
  originalPrice: number;
  discountedPrice: number;
  isBestSeller?: boolean;
  bestSellerStyle?: string;
  showAddToCartButton?: boolean;
  type: string;
  ratingPoint?: number;
  description?: string;
}
