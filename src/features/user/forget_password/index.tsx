import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import ForgetPasswordForm from "./components/forms/ForgetPasswordForm";

export default function ForgetPassword() {
  return (
    <Container>
      <Typography variant="h4">Forget Password</Typography>
      <ForgetPasswordForm />
    </Container>
  );
}
