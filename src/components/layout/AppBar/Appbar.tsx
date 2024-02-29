"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar/navbar";
import { NavigateToItemModel } from "@/model/navigation";
import Collapse from "@mui/material/Collapse";
import AdminProfile from "./Admin_dropdown/admin_profile";
import { AdminLayoutProps } from "@/model/layout";

export default function AdminAppBar({
  children,
  navigation,
  handleSignOut,
}: AdminLayoutProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: "80%" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                TrueFitCoach
              </Typography>
            </Box>
           
            <AdminProfile handleSignOut={handleSignOut} />
          </Box>
        </Toolbar>
      </AppBar>
      <Navbar
        open={open}
        handleClose={handleClose}
        handleDrawerClose={handleDrawerClose}
        navigation={navigation}
      />
      {children}
    </Box>
  );
}
