import { Box, Collapse, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { AdminMenuProps } from "@/model/layout";
import { useCookies } from 'next-client-cookies';

import { useRouter } from "next/navigation";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/context/redux/store";
import { logout } from "@/context/redux/slices/authSlice";
import { useEffect } from "react";

export const AdminMenuDropdown = ({
  expanded,
  expandedClose,
  handleSignOut,
}: AdminMenuProps) => {
  const { admin } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.querySelector(".MuiBox-root");
      if (drawer && !drawer.contains(event.target as Node)) {
        expandedClose();
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded, expandedClose]);

  return (
    <Box sx={{ position: "absolute", top: 15, left: -200 }}>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            bgcolor: "gray",
            borderRadius: "5px",
            padding: "0.5rem",
            minWidth: 250,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: "7%",
              transform: "translateY(-100%)",
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderBottom: "8px solid #353535",
            },
          }}
        >
          <Box
            sx={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
              transition: "0.5s",
              borderRadius: "5px",
              ":hover": { cursor: "pointer", bgcolor: "#282928" },
            }}
          >
            <Avatar alt="Pooh" />
            <Typography sx={{ fontWeight: "700" }}>
              {admin.first_name + " " + admin.last_name}
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: "",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
              transition: "0.5s",
              borderRadius: "5px",
              ":hover": { cursor: "pointer", bgcolor: "#c40808" },
            }}
            onClick={handleSignOut}
          >
            <LogoutIcon sx={{ fontSize: "20px" }} />{" "}
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
              Logout
            </Typography>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};
export default AdminMenuDropdown;
