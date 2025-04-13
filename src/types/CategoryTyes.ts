export interface NewCategoryType {
  categoryName: string;
  slug: string;

  image?: string;
}

export interface NewSubCategoryType {
  categoryName: string;
  slug: string;
  selectParent: string;

  image?: string;
}

export interface VendorAddType {
  brandName: string;
  status: string;
  brandType: string;

  image?: string;
}
export interface AddGroupType {
  groupName: string;
  groupColor: string;
  groupDes: string;
}

export interface AdminReviewType {
  customers: string;
  product: string;
  rating: string;
  review: string;
}
