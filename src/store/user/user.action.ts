import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { User } from "firebase/auth";
import { ActionWithPayload } from "../../utils/reducer/reducer.utils";

type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  User
>;

export type UserAction = SetCurrentUser;

export const setCurrentUser = (user: User) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
