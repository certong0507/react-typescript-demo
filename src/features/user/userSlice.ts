import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, AppThunk } from "../../app/store";
import { doLogin } from "../../features/user/userAPI";

export interface LoginFormState {
  email: string;
  password: string;
}

export interface UserState {
  data: Object;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  data: {},
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // doLoginSuccess: (state, action) => {
    //   state.loginSuccess = true;
    //   state.loginFail = false;
    //   state.loginErrorMessage = null;
    // },
    // doLoginFail: (state, action) => {
    //   state.loginSuccess = false;
    //   state.loginFail = true;
    //   state.loggedInUser = null;
    //   state.loginErrorMessage = action.payload.data.errorMessage;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLoginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(doLoginAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(doLoginAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const doLoginAsync = createAsyncThunk("/login", async () => {
  const response = await doLogin();

  return response.data;
});

export const userStatus = (state: RootState) => state.userSlice.status;

export const {} = userSlice.actions;

export default userSlice.reducer;
