import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdminAppBar from "./AppBar/Appbar";
import Navigate from "@/config/navigation/navigate";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { axiosPath } from "@/services/fetch";
import { enqueueSnackbar } from "notistack";
import { useAppDispatch } from "@/context/redux/store";
import { logout } from "@/context/redux/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const cookies = useCookies();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      const response = await axiosPath.delete("logout");
      if (response.status === 200) {
        router.push("/auth/login");
        toast.success("Signing out", {
          position: "bottom-left",
        });
        dispatch(logout());
        setTimeout(() => {
          router.push("/auth/login");
        }, 0);
      }
    } catch (error) {
      toast.error("Error occurred", {
        position: "bottom-left",
      });
      console.error(error);
      throw new Error("The error occurred");
    }
  };

  return (
    <AdminAppBar navigation={Navigate()} handleSignOut={handleLogout}>
      <ToastContainer />
      <Box
        sx={{
          paddingY: "5rem",
          paddingLeft: "21%",
          paddingRight:"1%",
          bgcolor: "white",
          height: "100dvh",
        }}
      >
        {children}
      </Box>
    </AdminAppBar>
  );
}
