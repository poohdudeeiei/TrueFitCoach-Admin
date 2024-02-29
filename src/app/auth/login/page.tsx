"use client";

import { Box, Grid, Typography } from "@mui/material";
import CoverImage from "../../../../public/Images/cover-image.jpg";
import { LoginType } from "@/model/auth";
import { useRouter, redirect } from "next/navigation";
import { SnackbarProvider, useSnackbar } from "notistack";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormLogin from "@/components/auth/Form-login";
import Link from "next/link";
import { postLogin } from "@/services/fetch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactElement, ReactNode, useEffect } from "react";
import { loginAsync, getAdminAsync } from "@/context/redux/slices/authSlice";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/context/redux/store";

const defaultValues: LoginType = {
  email: "suphasan.s@kkumail.com",
  password: "poohpuppydude27",
};

export default function Login() {
  const router = useRouter();
  const auth = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const schema: yup.ObjectSchema<LoginType> = yup.object().shape({
    email: yup.string().email().trim().required("E-mail is required*"),
    password: yup.string().trim().required("Password is required*").min(8),
  });

  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<LoginType>({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginType) => {
    dispatch(loginAsync(data));
    
  };

  useEffect(() => {
    if (auth.status === "succeeded") {
      toast.success("Login successful", {
        position: "bottom-left",
      });
      // setTimeout(() => {
      router.push("/");
      // }, 3000);
      dispatch(getAdminAsync());
    }
    if (auth.status === "failed") {
      toast.error("Login Failed", {
        position: "bottom-left",
      });
    }
  }, [auth.status, router, dispatch]);

  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {" "}
      <ToastContainer />
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
          <Box
            sx={{
              height: "100vh",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(230, 230, 230, 0.5)),url(${CoverImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow:
                "rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: "48px",
                fontWeight: "700",
                padding: "1rem 1.5rem",
              }}
            >
              Login to your account
            </Typography>
            <FormLogin
              control={control}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
            />
            <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Typography sx={{ color: "gray" }}>
                Do you have an account?
              </Typography>
              <Link
                href="/auth/register"
                style={{ color: "rgba(	64, 130, 230)", fontWeight: 700 }}
              >
                Create an account
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Login.getLayout = function getLayout(page: ReactNode) {
  return { page };
};
