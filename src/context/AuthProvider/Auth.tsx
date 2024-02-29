"use client";
import { useEffect } from "react";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/context/redux/store";
import { getAdminAsync } from "../redux/slices/authSlice";
import { usePathname } from "next/navigation";
import { useCookies } from "next-client-cookies";
// import { GetCookies } from "@/hooks/get-cookies";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname !== "/auth/login" &&
      pathname !== "/auth/register" &&
      auth.status !== "succeeded" &&
      auth.status !== "sign_out" &&
      auth.admin.email === null
    ) {
      dispatch(getAdminAsync());
    }
  }, [dispatch, auth.status, auth.admin, pathname]);

  return <>{children}</>;
}
