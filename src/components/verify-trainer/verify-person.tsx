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
import { useState } from "react";
import { ConfirmVerify } from "./dialog-confirm/confirm-verify";
import { useUpdateVerifyTrainerMutation } from "@/context/redux/slices/trainer";
import { toast, ToastContainer } from "react-toastify";
import { useSnackbar } from "notistack";

interface VerifyPersonProps {
  trainer: Trainer;
  verify: number;
}

export const VerifyPerson = ({ trainer, verify }: VerifyPersonProps) => {
  const [openVerify, setOpenVerify] = useState(false);
  const [updateVerifyTrainer, { isLoading, status, error }] =
    useUpdateVerifyTrainerMutation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleOpenVerify = () => {
    setOpenVerify(true);
  };

  const handleCloseVerify = () => {
    setOpenVerify(false);
  };

  const handleVerify = async () => {
    try {
      await updateVerifyTrainer({
        _id: trainer._id,
        verify: true,
      });

      enqueueSnackbar(`Verified ${trainer.nickname} successful`, {
        variant: "success",
      });
    } catch (error) {
      console.error(error);
      enqueueSnackbar(`Cannot verify trainer ${trainer.nickname}`, {
        variant: "success",
      });
    } finally {
      handleCloseVerify();
    }
  };

  return (
    <Box>
      {verify === 0 ? (
        <IconButton
          onClick={handleOpenVerify}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <VerifiedUserIcon />
          <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
            Verify user
          </Typography>
        </IconButton>
      ) : (
        <IconButton
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <VerifiedUserIcon sx={{ color: "black" }} />{" "}
          <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
            Verified
          </Typography>
        </IconButton>
      )}{" "}
      <ConfirmVerify
        open={openVerify}
        handleClose={handleCloseVerify}
        trainer={trainer}
        handleVerify={handleVerify}
      />
    </Box>
  );
};
