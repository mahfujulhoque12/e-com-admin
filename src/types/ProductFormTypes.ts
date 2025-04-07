export enum CategoryEnum {
  electronics = "Electronics",
  clothing = "Clothing",
  home = "Home",
  garden = "Garden",
}

export enum SubCategoryEnum {
  gabadin = "Gabadin",
  jins = "Jins",
  others = "Others",
}
export enum Brands {
  apple = "Apple",
  samsung = "Samsung",
  huawei = "Huawei",
  oppo = "Oppo",
}
export enum MeasurementEnum {
  frist = "20ft",
  second = "25ft",
  third = "30ft",
  fourth = "35ft",
}

export enum StockUnitEnum {
  pcs = "Pcs",
  kg = "kg",
  lbs = "Lbs",
  m3 = "m3",
  m2 = "m2",
  sqft = "sqft",
}

export enum WarrentyUnitEnum {
  months = "Months",
  years = "Years",
  days = "Days",
  weeks = "Weeks",
}

export interface Inputs {
  firstName: string;
  category?: CategoryEnum | "";
  subCategory?: SubCategoryEnum | "";
  brands?: Brands | "";
  description?: string;
  price?: string;
  salePrice?: string;
  length?: string;
  width?: string;
  depth?: string;
  measurement?: MeasurementEnum | "";
  totalStock?: string;
  stockUnit?: StockUnitEnum | "";
  productSku?: string;
  qrCode?: string;
  wareentyPeriod?: string;
  warrentyUnit?: WarrentyUnitEnum | "";
  specifications: [{ key: ""; value: "" }];
  madeInOne?: string;
  madeInTwo?: string;
  manufacturer?: string;
  madeIn?: string;
}
