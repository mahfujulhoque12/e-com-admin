interface Product {
  id: number;
  paymentId: number;

  payment: string;

  status: string;

  date: string;
  product: string;
  rating: number;
  review: string;
}

export const reviewListData: Product[] = [
  {
    id: 1,
    paymentId: 287402514554,

    status: "Cancelled",

    date: "2025-04-01",

    payment: "unpaid",
    product: "Chips, Coke, Cookies",
    rating: 4,
    review: "Amazing sound quality and comfortable fit!",
  },
  {
    id: 2,
    paymentId: 287402514554,

    status: "Delivered",

    date: "2025-04-01",

    payment: "unpaid",
    product: "Chips, Coke, Cookies",
    rating: 3,
    review: "Amazing sound quality and comfortable fit!",
  },
  {
    id: 3,
    paymentId: 287402514554,

    status: "On the way",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "unpaid",
  },
  {
    id: 4,
    paymentId: 287402514554,

    status: "Pending",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "unpaid",
  },
  {
    id: 5,
    paymentId: 287402514554,

    status: "Waiting",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "paid",
  },
  {
    id: 6,
    paymentId: 287402514554,

    status: "Pending",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "paid",
  },
  {
    id: 7,
    paymentId: 287402514554,

    status: "Waiting",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "paid",
  },
];
