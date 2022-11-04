import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Login = React.lazy(() => import("./features/user/login/Login"));

// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
// import "./App.css";

function App() {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
