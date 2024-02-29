import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { trainerApi } from "./slices/trainer";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [trainerApi.reducerPath]: trainerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trainerApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
