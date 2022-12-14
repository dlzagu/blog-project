import { createAsyncThunk } from "@reduxjs/toolkit";
import { putAPI } from "../../utils/FetchData";
import { checkImage, imageUpload } from "../../utils/ImageUpload";
import { checkPassword } from "../../utils/ValidRegister";
import {
  setAlertError,
  setAlertLoading,
  setAlertSuccess,
} from "../slices/alertSlice";
import { setAuth } from "../slices/authSlice";
import { IResetPassword, IUpdateUserInfo } from "../types/profileTypes";

export const updateUser = createAsyncThunk(
  "profile/updateUser",
  async ({ avatar, name, auth }: IUpdateUserInfo, thunkApi) => {
    if (!auth.access_token || !auth.user) return;

    let url = "";
    try {
      thunkApi.dispatch(setAlertLoading({ loading: true }));

      if (avatar) {
        const check = checkImage(avatar);
        if (check) return thunkApi.dispatch(setAlertError({ error: check }));

        const photo = await imageUpload(avatar);
        url = photo.url;
      }

      thunkApi.dispatch(
        setAuth({
          access_token: auth.access_token,
          user: {
            ...auth.user,
            avatar: url ? url : auth.user.avatar,
            name: name ? name : auth.user.name,
          },
        })
      );

      const res = await putAPI(
        "user",
        {
          avatar: url ? url : auth.user.avatar,
          name: name ? name : auth.user.name,
        },
        auth.access_token
      );

      thunkApi.dispatch(setAlertSuccess({ success: res.data.msg }));
    } catch (err: any) {
      thunkApi.dispatch(setAlertError({ error: err.response.data.msg }));
      console.log("updateerr", err);
      thunkApi.rejectWithValue(err.response.data.msg);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "profile/resetPassword",
  async ({ password, cf_password, access_token }: IResetPassword, thunkApi) => {
    const msg = checkPassword(password, cf_password);

    if (msg) return thunkApi.dispatch(setAlertError({ error: msg }));

    try {
      thunkApi.dispatch(setAlertLoading({ loading: true }));
      console.log("access_token", access_token);

      if (access_token) {
        const res = await putAPI("reset_password", { password }, access_token);

        thunkApi.dispatch(setAlertSuccess({ success: res.data.msg }));
      }
    } catch (err: any) {
      thunkApi.dispatch(setAlertError({ error: err.response.data.msg }));

      thunkApi.rejectWithValue(err.response.data.msg);
    }
  }
);
