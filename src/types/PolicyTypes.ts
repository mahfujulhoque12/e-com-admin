export enum RefurnEnum {
  apple = "Apple",
  samsung = "Samsung",
  huawei = "Huawei",
  oppo = "Oppo",
}

export enum RefundEnum {
  damaged = "Damaged",
  defective = "Defective",
  expired = "Expired",
  other = "Other",
}
export enum WarrantyEunm {
  extended = "Extended",
  extended_with_exchange = "Extended with exchange",
}
export enum DataEnum {
  local = "Local",
  international = "International",
}
export enum PaymentEnum {
  defective = "Defective",
  expired = "Expired",
  other = "Other",
}
export enum ShippingEnum {
  local = "Local",
  international = "International",
}
export enum PrivacyEnum {
  local = "Local",
  international = "International",
}

export enum CookieEnum {
  local = "Local",
  international = "International",
}

export interface PolicyTypes {
  return: RefurnEnum | "";
  refund: RefundEnum | "";
  warranty: WarrantyEunm | "";
  data: DataEnum | "";
  payment: PaymentEnum | "";
  shipping: ShippingEnum | "";
  privacy: PrivacyEnum | "";
  cookie: CookieEnum | "";
  youTube: string;
}
