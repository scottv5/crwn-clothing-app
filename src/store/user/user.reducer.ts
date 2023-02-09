//import { USER_ACTION_TYPES } from "./user.types";
import { User } from "firebase/auth";
//import { UserAction } from "./user.action";
import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  currentUser: null | User;
};

const INITIAL_STATE: UserState = { currentUser: null };

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

// export const userReducer = (
//   state = INITIAL_STATE,
//   action = {} as UserAction
// ) => {
//   switch (action.type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: action.payload };
//     default:
//       return state;
//   }
// };
