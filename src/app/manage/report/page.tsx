"use client";
import AdminLayout from "@/components/layout/adminLayout";
import { getAdminAsync } from "@/context/redux/slices/authSlice";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/context/redux/store";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVerify } from "@/components/verify-trainer/verify-table";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useGetAllTrainersPaginationQuery } from "@/context/redux/slices/trainer";
import { toast, ToastContainer } from "react-toastify";
import { TableReport } from "@/components/report-trainer/report-table";

export default function Report() {
  const auth = useAppSelector((state: RootState) => state.auth);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const onSearch = () => {
    if (searchRef.current) {
      // setPage(1)
      setSearch(searchRef.current.value);
    }
  };

  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     if (auth.status !== "succeeded") {
  //       dispatch(getAdminAsync());
  //     }
  //   }, [dispatch, auth.status]);

  return (
    <AdminLayout>
      <ToastContainer />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
          }}
        >
          <Typography
            sx={{ fontSize: "36px", fontWeight: "600", color: "black" }}
          >
            Report trainer
          </Typography>
          <Box sx={{ alignSelf: "flex-end", marginRight: "2rem" }}>
            <OutlinedInput
              inputRef={searchRef}
              placeholder="find trainer"
              // label="Standard"
              // variant="standard"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onSearch}
                    // onMouseDown={}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <TableReport />
      </Box>
    </AdminLayout>
  );
}
