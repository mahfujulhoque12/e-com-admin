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
// types/CategoryTyes.ts

export interface AdminReviewType {
  customers: {
    name: string;
    email: string;
  }; // 👈 store full customer object

  product: {
    name: string;
    email: string;
  };
  ratings: {
    name: string;
    email: string;
  };
  review: string;
}
