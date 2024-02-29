import { Box, Divider, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useEffect } from "react";
import { NavbarProps } from "@/model/layout";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar({
  open,
  handleClose,
  handleDrawerClose,
  navigation,
}: NavbarProps) {
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.querySelector(".MuiDrawer-root");
      if (drawer && !drawer.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClose]);

  return (
    <Drawer
      sx={{
        width: "20%",
        flexShrink: 0,
        backgroundColor: "transparent",
        "& .MuiDrawer-paper": {
          bgcolor: "#454545",
          width: "20%",
          boxSizing: "border-box",
        },
      }}
      ModalProps={{
        BackdropProps: {
          style: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        },
      }}
      anchor="left"
      variant="permanent"
      open={open}
      onClose={(event: React.KeyboardEvent | React.MouseEvent) =>
        handleDrawerClose(event)
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: "1rem",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "700",
            width: "fit-content",
            color: "white",
          }}
        >
          TrueFitCoach
        </Typography>
        <Divider flexItem />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "0rem",
            alignItems: "center",
          }}
        >
          {navigation.map((path, index) => {
            return (
              <Link href={path.path} key={index} style={{ width: "100%" }}>
                <Box
                  sx={{
                    padding: "1rem",
                    gap: "0.5rem",
                    width: "100%",
                    bgcolor: "",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    transition: "0.5s",
                    ":hover": { cursor: "pointer", bgcolor: "white" },
                  }}
                >
                  {path.icon}
                  <Typography
                    sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
                  >
                    {path.title}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Drawer>
  );
}
