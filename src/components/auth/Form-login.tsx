import { LoginProps } from "@/model/auth";
import { Box, Button, IconButton, Input, Typography } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";
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

export default function FormLogin({
  control,
  errors,
  handleSubmit,
  onSubmit,
}: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%" }}
    >
      <Box sx={{ padding: "1rem 2rem" }}>
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
        Sign In
      </Button>
    </form>
  );
}
