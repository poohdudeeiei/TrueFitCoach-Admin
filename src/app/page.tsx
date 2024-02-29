"use client";
import { Box, Button } from "@mui/material";
import axios from "axios";
import AdminAppBar from "@/components/layout/AppBar/Appbar";
import AdminLayout from "@/components/layout/adminLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAdminAsync, login } from "@/context/redux/slices/authSlice";
import { RootState, useAppDispatch } from "@/context/redux/store";
import { useEffect } from "react";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (auth.status !== "succeeded") {
  //     dispatch(getAdminAsync());
  //   }
  // }, [dispatch, auth.status]);

  return (
    <AdminLayout>
      <Box sx={{ bgcolor: "" }}>Dashboard {auth.status}</Box>
    </AdminLayout>
  );
}
