export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_DATA_START = "category/SET_CATEGORIES_DATA_START",
  FETCH_CATEGORIES_DATA_SUCCESS = "category/SET_CATEGORIES_DATA_SUCCESS",
  FETCH_CATEGORIES_DATA_FAILED = "category/SET_CATEGORIES_DATA_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
