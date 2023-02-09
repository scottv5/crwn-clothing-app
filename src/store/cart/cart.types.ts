import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS",
  TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
