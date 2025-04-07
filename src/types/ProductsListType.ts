
// ✅ FormData Type
export interface ProductsFormData {
  brand: string;
  category: string;
  status:string;
  stock: string;
}

export enum BrandEnum {
  Polo = "polo",
  Ck = "Ck",
  Adidas = "adidas",
  Nike = "nike",
}

export enum CategoryEnumList {
    Men = "Men",
    Women = "Women",
    Kids = "Kids",
    Accessories = "Accessories",

}
export enum StatusEnum {
    Active = "active",
    Inactive = "inactive",
    Deleted = "deleted",
}

export enum StockEnum {
    InStock = "In Stock",
    OutOfStock = "Out of Stock",
}