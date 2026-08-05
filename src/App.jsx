import React from "react";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <LoginPage />
      <RegisterPage />
    </div>
  );
};

export default App;
