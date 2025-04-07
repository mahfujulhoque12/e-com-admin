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
