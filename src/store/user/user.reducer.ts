import { User } from "firebase/auth";
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
