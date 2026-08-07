import React, { useState } from "react";
import loginBg from "../assets/Login-bg.jpg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (password.trim() === "") {
      toast.error("Password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    toast.success("Login Successful! 🚀");

    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginBg})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/70 p-7 flex flex-col rounded-xl shadow shadow-white"
      >
        <h1 className="text-center text-4xl mb-5">Welcome Back</h1>
        <label htmlFor="email" className="mb-1 tracking-wide">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g., example@gmail.com"
          className="border border-blue-400 rounded-lg px-3 py-1.5 mb-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="mb-1 tracking-wide">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          className="border border-blue-400 rounded-lg px-3 py-1.5 mb-5 focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 text-white font-bold py-1.5 mb-3 rounded-lg tracking-wide cursor-pointer hover:bg-blue-500"
        >
          Sign In
        </button>
        <p className="text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold tracking-wide">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
