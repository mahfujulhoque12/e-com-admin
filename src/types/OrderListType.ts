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

export enum SelectCustomerEnum {
  Badon = "Badon",
  Joy = "Joy",
  Alif = "Alif",
  Nirob = "Nirob",
  Safi = "Safi",
  Sadin = "sadin",
}

export enum SelectPrductEnum {
  Chips = "Chips",
  Alo = "Alo",
  Toamto = "Toamto",
  Carot = "Carot",
  ETC = "ETC",
  Sadin = "sadin",
}
export enum SelectRatingEnum {
  OneStart = "1 Star",
  TwoStar = "2 Start",
  ThreeStar = "ThreeStar",
  FourStar = "FourStar",
  FiveStar = "FiveStar",
}
