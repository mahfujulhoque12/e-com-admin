// ✅ FormData Type
export interface OrdersFormData {
  allOrders: string;
  shipping: string;
  completed: string;
  cancel: string;
}

export enum AllOrdersEnum {
  AllOrders = "All Orders",
  Completed = "Completed",
  Cancelled = "Cancelled",
  Processing = "Processing",
}

export enum ShippingEnum {
  Shipping = "Shipping",
  Local = "Local",
  International = "International",
}
export enum CompletedEnum {
  Completed = "Completed",
  Processing = "Processing",
  Cancelled = "Cancelled",
}

export enum CancelEnum {
  Cancle = "Cancel",
  Processing = "Processing",
  Completed = "Completed",
}
