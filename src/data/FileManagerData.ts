import file from "/public/file/file.png";
import { StaticImageData } from "next/image";

interface Product {
  id: number;

  img: string | StaticImageData;
  title: string;
  subTitle: string;
  memory: string;
  files: string;
}

export const fileMangerData: Product[] = [
  {
    id: 1,

    img: file,
    title: "Doucments",
    subTitle: "Using 25% of storage",
    memory: "6GB ",
    files: "400 file",
  },
  {
    id: 2,

    img: file,
    title: "Music",
    subTitle: "Using 16% of storage",
    memory: "4GB ",
    files: "100 file",
  },
  {
    id: 3,

    img: file,
    title: "Apps",
    subTitle: "Using 52% of storage",
    memory: "7GB ",
    files: "280 file",
  },
  {
    id: 4,

    img: file,
    title: "Videos",
    subTitle: "Using 85% of storage",
    memory: "16GB ",
    files: "800 file",
  },
];
