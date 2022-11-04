import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ForgetPasswordForm() {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Box>
      <Typography>ForgetPassword</Typography>

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}
