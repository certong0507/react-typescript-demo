import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { doLoginAsync, userStatus } from "../../../userSlice";

export default function LoginForm() {
  let navigate = useNavigate();
  const status = useAppSelector(userStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLoginAsync());
  }, []);

  useEffect(() => {
    console.log("status :>> ", status);
  }, [status]);

  const handleForgetPassword = () => {
    navigate("/forget-password");
  };
  
  return (
    <Box>
      <Typography>
        LoginForm <b> {status}</b>
      </Typography>

      <Button variant="contained" onClick={handleForgetPassword}>
        Forget Password
      </Button>
    </Box>
  );
}
