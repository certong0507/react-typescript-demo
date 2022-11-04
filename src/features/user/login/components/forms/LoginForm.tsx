import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { doLoginAsync, userStatus } from "../../../userSlice";

export default function LoginForm() {
  const status = useAppSelector(userStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLoginAsync());
  }, []);

  useEffect(() => {
    console.log("status :>> ", status);
  }, [status]);

  return (
    <div>
      LoginForm <b> {status}</b>
    </div>
  );
}
