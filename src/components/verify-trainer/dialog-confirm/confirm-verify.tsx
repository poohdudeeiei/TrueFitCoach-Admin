import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import { Trainer } from "@/model/trainer";

interface ConfirmVerifyProps {
  open: boolean;
  handleClose: () => void;
  trainer: Trainer;
  handleVerify: () => void;
}

export const ConfirmVerify = ({
  open,
  handleClose,
  trainer,
  handleVerify,
}: ConfirmVerifyProps) => {

  const {
    _id,
    trainer_first_name,
    trainer_last_name,
    nickname,
    trainer_profile_image,
  } = trainer;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "80%",
            maxWidth: "500px",
            minWidth: "200px",
            height: "auto",
            borderRadius: "10px",
          },
        },
      }}
    >
      {" "}
      <DialogTitle>
        <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
          Confirm Verify {nickname}
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to verify this user? Once verified, the user
          will be granted access to the system.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle verify action
            handleVerify();
          }}
          autoFocus
        >
          Confirm Verify
        </Button>
      </DialogActions>
    </Dialog>
  );
};
