import React from "react";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <LoginPage />
    </div>
  );
};

export default App;
