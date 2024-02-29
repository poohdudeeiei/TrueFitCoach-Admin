import { Avatar, Box, Collapse, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AdminMenuDropdown from "./admin_menu_dropdown";
import { AdminProfileProps } from "@/model/layout";
import { RootState, useAppSelector } from "@/context/redux/store";

export const AdminProfile = ({ handleSignOut }: AdminProfileProps) => {
  const [expanded, setExpanded] = useState(false);
  const auth = useAppSelector((state: RootState) => state.auth);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const expandedClose = () => {
    setExpanded(false);
  };

  useEffect(() => {
    if (auth.status === "sign_out") {
      expandedClose()
    }
  }, [auth.status]);

  return (
    <Box>
      <IconButton color="inherit" onClick={handleExpandClick}>
        <Avatar />
      </IconButton>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AdminMenuDropdown
          expanded={expanded}
          expandedClose={expandedClose}
          handleSignOut={handleSignOut}
        />
      </Box>
    </Box>
  );
};
export default AdminProfile;
