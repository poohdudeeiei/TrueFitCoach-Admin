import {
  Box,
  Button,
  IconButton,
  Input,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { RegisterProps } from "@/model/auth";
import { useState } from "react";
import styled from "@emotion/styled";
import { Controller } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const FieldWrap = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});
const ErrorWrap = styled(Box)({
  height: "30px",
  display: "flex",
  alignItems: "center",
});
const FieldName = styled(Typography)({
  color: "black",
  fontWeight: "600",
  fontSize: "16px",
});
const TextError = styled(Typography)({
  color: "#EF411E ",
  fontSize: "12px",
  fontWeight: "550",
});

const FormRegister = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  watch,
}: RegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { first_name, last_name, username, password, confirmPassword } =
    watch();

  const validate = () => {
    let e = Object.keys(errors).length;
    if (
      !first_name ||
      !last_name ||
      !username ||
      !password ||
      !confirmPassword ||
      e !== 0
    ) {
      return false;
    }
    return true;
  };

  const theme = useTheme();
  const primaryMainColor = theme.palette.primary.main;
  const primaryLightColor = theme.palette.primary.light;
  const primaryDarkColor = theme.palette.primary.dark;
  const secondaryMainColor = theme.palette.secondary.main;
  const secondaryLightColor = theme.palette.secondary.light;
  const secondaryDarkColor = theme.palette.secondary.dark;

  let contentRender;
  const BreakPointBetween_xs_sm = useMediaQuery(
    theme.breakpoints.between("xs", "sm")
  );
  const BreakPointBetween_sm_md = useMediaQuery(
    theme.breakpoints.between("sm", "md")
  );
  const BreakPointBetween_md_lg = useMediaQuery(
    theme.breakpoints.between("md", "lg")
  );
  const BreakPointBetween_lg_xl = useMediaQuery(
    theme.breakpoints.between("lg", "xl")
  );
  const BreakPointDown_md = useMediaQuery(theme.breakpoints.down("md"));
  const BreakPointUp_md = useMediaQuery(theme.breakpoints.up("md"));
  const BreakPointUp_xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          width: "100%",
          padding: BreakPointUp_md
            ? "2rem 1.5rem"
            : BreakPointBetween_sm_md
            ? "2rem 3rem"
            : BreakPointBetween_xs_sm
            ? "2rem 1rem"
            : "1rem 3rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
        }}
      >
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <FieldWrap sx={{ flex: 0.5 }}>
            <FieldName>First name</FieldName>
            <Controller
              name="first_name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  fullWidth
                  sx={{
                    input: { color: "black", fontWeight: "500" },
                    "&::before": {
                      borderBottomColor: "black", // Change the color of the underline to white
                    },
                  }}
                  id="first name"
                  placeholder="First Name"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
            <ErrorWrap>
              {errors.first_name && (
                <TextError>{errors.first_name.message}</TextError>
              )}
            </ErrorWrap>
          </FieldWrap>
          <FieldWrap sx={{ flex: 0.5 }}>
            <FieldName>Last name</FieldName>
            <Controller
              name="last_name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  fullWidth
                  sx={{
                    input: { color: "black", fontWeight: "500" },
                    "&::before": {
                      borderBottomColor: "black", // Change the color of the underline to white
                    },
                  }}
                  id="last name"
                  placeholder="Last Name"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
            <ErrorWrap>
              {errors.last_name && (
                <TextError>{errors.last_name.message}</TextError>
              )}
            </ErrorWrap>
          </FieldWrap>
        </Box>
        <FieldWrap>
          <FieldName>Email</FieldName>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                fullWidth
                sx={{
                  input: { color: "black", fontWeight: "500" },
                  "&::before": {
                    borderBottomColor: "black", // Change the color of the underline to white
                  },
                }}
                id="email"
                placeholder="Email"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />
          <ErrorWrap>
            {errors.email && <TextError>{errors.email.message}</TextError>}
          </ErrorWrap>
        </FieldWrap>
        <FieldWrap>
          <FieldName>Username</FieldName>
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                fullWidth
                sx={{
                  input: { color: "black", fontWeight: "500" },
                  "&::before": {
                    borderBottomColor: "black", // Change the color of the underline to white
                  },
                }}
                id="username"
                placeholder="username"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />
          <ErrorWrap>
            {errors.username && (
              <TextError>{errors.username.message}</TextError>
            )}
          </ErrorWrap>
        </FieldWrap>
        <FieldWrap>
          <FieldName>Password</FieldName>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                fullWidth
                sx={{
                  input: { color: "black", fontWeight: "500" },
                  "&::before": {
                    borderBottomColor: "black", // Change the color of the underline to white
                  },
                }}
                id="password"
                placeholder="Password"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
          <ErrorWrap>
            {errors.password && (
              <TextError>{errors.password.message}</TextError>
            )}
          </ErrorWrap>
        </FieldWrap>
        <FieldWrap>
          <FieldName>Confirm Password</FieldName>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                fullWidth
                sx={{
                  input: { color: "black", fontWeight: "500" },
                  "&::before": {
                    borderBottomColor: "black", // Change the color of the underline to white
                  },
                }}
                id="Confirm Password"
                placeholder="Confirm Password"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
          <ErrorWrap>
            {errors.confirmPassword && (
              <TextError>{errors.confirmPassword.message}</TextError>
            )}
          </ErrorWrap>
        </FieldWrap>
      </Box>
      <Button
        color="primary"
        sx={{
          display: "flex",
          margin: "auto",
          fontWeight: "700",
          width: "40%  ",
          height: "45px",
          borderRadius: "1rem",
        }}
        variant="contained"
        type="submit"
      >
        Create Account
      </Button>
    </form>
  );
};

export default FormRegister;
