import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import LoginForm from "./components/forms/LoginForm";

export default function Login() {
  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <LoginForm />
    </Container>
  );
}
