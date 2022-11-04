import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Login = React.lazy(() => import("./features/user/login"));
const ForgetPassword = React.lazy(
  () => import("./features/user/forget_password")
);

function App() {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
