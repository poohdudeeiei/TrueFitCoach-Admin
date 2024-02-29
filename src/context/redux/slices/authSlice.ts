import { axiosPath } from "@/services/fetch";
import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type adminType = {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  username: string | null;
};

interface InitialState {
  admin: adminType;
  status: "idle" | "succeeded" | "failed" | "sign_out";
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  admin: {
    first_name: null,
    last_name: null,
    email: null,
    username: null,
  },
  status: "idle",
  loading: false,
  error: null,
};

type AuthAsyncValue = {
  email: string;
  password: string;
};

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (value: AuthAsyncValue) => {
    try {
      const result = await axiosPath.post("login", value);
      // console.log(result);
      return result.request.data?.admin;
    } catch (error: any) {
      if (isAxiosError(error)) {
        return isRejectedWithValue(error.response?.data);
      }
      return isRejectedWithValue(error.message);
    }
  }
);

export const getAdminAsync = createAsyncThunk("get/admin", async () => {
  try {
    const result = await axiosPath.get("get-admin");
    // console.log(result)
    return result.data?.admin;
  } catch (error: any) {
    if (isAxiosError(error)) {
      return isRejectedWithValue(error.response?.data);
    }
    return isRejectedWithValue(error.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.admin.first_name = action.payload.first_name;
      state.admin.last_name = action.payload.last_name;
      state.admin.username = action.payload.username;
      state.admin.email = action.payload.email;
    },
    logout: (state) => {
      state.admin.first_name = null;
      state.admin.last_name = null;
      state.admin.username = null;
      state.admin.email = null;
      state.status = "sign_out";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (value) => {
        value.loading = true;
        value.status = "idle";
      })
      .addCase(loginAsync.fulfilled, (value, action) => {
        value.status = "succeeded";
        value.loading = false;
      })
      .addCase(loginAsync.rejected, (value, action) => {
        value.error = action.error.message || "";
        value.loading = false;
        value.status = "failed";
      });
    builder
      .addCase(getAdminAsync.pending, (value) => {
        value.loading = true;
      })
      .addCase(getAdminAsync.fulfilled, (value, action) => {
        value.admin.email = action.payload.email;
        value.admin.username = action.payload.username;
        value.admin.first_name = action.payload.first_name;
        value.admin.last_name = action.payload.last_name;
        value.status = "succeeded";
        value.loading = false;
      })
      .addCase(getAdminAsync.rejected, (value, action) => {
        value.error = action.error.message || "";
        value.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
