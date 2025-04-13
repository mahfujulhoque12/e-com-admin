import img from "/public/admin/customer.png";
import { StaticImageData } from "next/image";
interface Product {
  id: number;
  groupId: number;
  name: string;
  groupColor: string;
  groupDes: string;
  img: string | StaticImageData;

  totalCustomer: number;
  status: "Pending" | "Delivered" | "Cancelled" | "In Progress";
}
// roup Id, Group Name, Group Color, Group Detail(description), Total Customer, Status, Action
export const customerGroupData: Product[] = [
  {
    id: 1,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "loremrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centu",
    img: img,

    totalCustomer: 5,
    status: "Pending",
  },
  {
    id: 2,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "loremrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centu",
    img: img,

    totalCustomer: 5,
    status: "Pending",
  },
  {
    id: 3,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "loremrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centu",
    img: img,

    totalCustomer: 5,
    status: "Pending",
  },
  {
    id: 4,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "loremrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centu",
    img: img,

    totalCustomer: 5,
    status: "Pending",
  },
];
