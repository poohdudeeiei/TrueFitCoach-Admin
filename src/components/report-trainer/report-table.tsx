import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Trainer, TrainerProps, TrainerType } from "@/model/trainer";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TableFooter from "@mui/material/TableFooter";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Chip from "@mui/material/Chip";

export const TableReport = ({}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  {" "}
                  Name
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  Email
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  {" "}
                  Phone number
                </Typography>
              </TableCell>

              <TableCell align="left">
                {" "}
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  {" "}
                  Status
                </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  {" "}
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {trainerList?.map((row: Trainer) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Avatar
                      alt={row.nickname}
                      src=""
                      sx={{ width: "40px", height: "4 0px" }}
                    />{" "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "gray",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: "black" }}>
                        {`${row.trainer_first_name} ${row.trainer_last_name}`}{" "}
                      </span>
                      <br /> {row.nickname}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >{`${row.trainer_email}`}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >
                    tel
                  </Typography>
                </TableCell>

                <TableCell align="left">
                  eeeeeee
                </TableCell>
                <TableCell align="left">eeee</TableCell>
              </TableRow>
            ))} */}
            eeeee
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      {/* <Pagination
        page={page}
        onChange={handleChange}
        count={totalPage}
        shape="rounded"
        showFirstButton
        showLastButton
        sx={{ alignSelf: "flex-end", marginRight: "2rem" }}
      /> */}
    </Box>
  );
};
