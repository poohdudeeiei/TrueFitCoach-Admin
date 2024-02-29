"use client";

import { Provider } from "react-redux";
import { store, useAppDispatch } from "../redux/store";
import { getAdminAsync } from "../redux/slices/authSlice";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
