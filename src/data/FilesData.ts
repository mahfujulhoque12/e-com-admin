import { StaticImageData } from "next/image";
import img from "/public/admin/customer.png";
interface Product {
  id: number;
  fileName: string;
  fileSize: string;
  author: string;
  owner: string;
  lastModify: string;
  members: string[] | StaticImageData[];
}

export const fileListData: Product[] = [
  {
    id: 1,
    fileName: "App Design & Development",
    author: "by Andrio",

    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson ",
    members: [img, img, img, img],
  },
  {
    id: 2,
    fileName: "App Design & Development",
    author: "by Andrio",

    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson ",
    members: [img, img, img],
  },
  {
    id: 3,
    fileName: "App Design & Development",
    author: "by Andrio",

    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson ",
    members: [img, img, img, img],
  },
  {
    id: 4,
    fileName: "App Design & Development",
    author: "by Andrio",

    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson ",
    members: [img, img],
  },
  {
    id: 5,
    fileName: "App Design & Development",
    author: "by Andrio",

    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson ",
    members: [img, img, img, img],
  },
  {
    id: 6,
    fileName: "App Design & Development",
    author: "by Andrio",

    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson ",
    members: [img, img, img],
  },
  {
    id: 7,
    fileName: "App Design & Development",
    author: "by Andrio",

    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson ",
    members: [img, img, img, img],
  },
];
