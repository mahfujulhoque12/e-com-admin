export enum ProductTypeEnum {
  Shirt = "shirt",
  Pants = "pants",
  Jacket = "jacket",
  Shoes = "shoes",
}

export enum VariationNameEnum {
  Color = "color",
  Size = "size",
}

export enum AttributeEnum {
  SizeS = "Size S",
  SizeM = "Size M",
  SizeL = "Size L",
}
export enum ShippinEnum {
  Free = "Free",
  FlatRate = "Flat Rate",
  LocalDelivery = "Local Delivery",
}

export interface VariationInputs {
  variationName?: VariationNameEnum | "";
  attribute?: AttributeEnum | "";
  totalStock?: string;
  regularPrice?: string;
  salePrice?: string;
  shipping?: ShippinEnum | "";
  shippingUnit?: string;
}

export interface PaymentType {
  gstPercent: string;
}
