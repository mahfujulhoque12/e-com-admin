import img from "/public/product/product.png";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  sku: string;
  stock: string;
  price: number;
  quantity: number;
  category: number;
  status: string;
}
export const sampleProductList: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    img: img,
    sku: "RT124578",
    slug: "smartphone",
    status: "On the way",
    stock: "On Demand",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 2,
    name: "Smartphone",
    img: img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Cancelled",
    stock: "Out of Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 3,
    name: "Smartphone",
    img: img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Pending",
    stock: "Low Inventory",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 4,
    name: "Smartphone",
    img: img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Delivered",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 5,
    name: "Smartphone",
    img: img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Progress",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 6,
    name: "Smartphone",
    img: img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Progress",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 7,
    name: "Smartphone",
    img: img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Progress",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
];
