"use client";

import FormRegister from "@/components/auth/Form-Register";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { REGISTER_ENDPOINT } from "@/config/endpoint/auth";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { RegisterType } from "@/model/auth";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { SnackbarProvider, useSnackbar } from "notistack";
import Cover from "../../../../public/Images/cover.jpg";
import { postRegister } from "@/services/fetch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const defaultValues: RegisterType = {
  first_name: "Suphasan",
  last_name: "Saejong",
  username: "poohpuppydude",
  email: "suphasan.s@kkumail.com",
  password: "poohpuppydude27",
  confirmPassword: "poohpuppydude27",
};

export default function Register() {
  const router = useRouter();

  const schema: yup.ObjectSchema<RegisterType> = yup.object().shape({
    first_name: yup.string().trim().required("First Name is required*"),
    last_name: yup.string().trim().required("Last Name is required*"),
    username: yup.string().trim().required("Username is required*"),
    email: yup.string().email().trim().required("E-mail is required*"),
    password: yup.string().trim().required("Password is required*").min(8),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "New Password and Confirm Password must be the same"
      )
      .required("Confirm password is required*"),
  });

  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterType) => {
    try {
      const result = await postRegister("register", data);
      console.log(result);
      if (result.status === 200) {
        // enqueueSnackbar("Register successful", { variant: "success" });
        toast.success("Register successful", {
          position: "bottom-left",
        });
        setTimeout(() => {
          router.push("/auth/login");
        }, 3000);
      }
      toast.error(result.response, {
        position: "bottom-left",
      });
    } catch (error) {
      console.error(error);
      toast.error("Register Failed", {
        position: "bottom-left",
      });
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "black",
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(230, 230, 230, 0.5)),url(${Cover.src})`,
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
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
                gap: "1rem",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                Already have an account?
              </Typography>
              <Link href="/auth/login">
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Sign in
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                width: "100%",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <Typography sx={{ fontSize: "48px", fontWeight: "600" }}>
                Sign Up
              </Typography>
              <Typography>Register your admin account</Typography>
            </Box>

            <FormRegister
              watch={watch}
              control={control}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
