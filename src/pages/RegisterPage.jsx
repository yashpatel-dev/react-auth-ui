import React, { useState } from "react";
import registerBg from "../assets/registration-bg.jpg";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSkills = (e) => {
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((s) => s !== e.target.value));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (fullname.trim() === "") {
      toast.error("Full Name is required");
      return;
    }

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
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (gender === "") {
      toast.error("Gender is required");
      return;
    }

    if (country === "") {
      toast.error("Country is required");
      return;
    }

    if (skills.length === 0) {
      toast.error("At Least one skill is required");
      return;
    }

    toast.success("Registration Successful!");
    setFullName("");
    setEmail("");
    setPassword("");
    setGender("");
    setCountry("");
    setSkills([]);
  };

  return (
    <div
      style={{ backgroundImage: `url(${registerBg})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <form
        onSubmit={handleRegister}
        className="bg-white/90 w-full max-w-md p-7 flex flex-col rounded-xl shadow shadow-white"
      >
        <h1 className="text-3xl text-center mb-6">Create Account</h1>

        <label htmlFor="fullname" className="mb-1 tracking-wide">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter Your Full Name"
          className="border border-blue-400 mb-2.5 px-2 py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="email" className="mb-1 tracking-wide">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g., example@gmail.com"
          className="border border-blue-400 mb-2.5 px-2 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
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
          placeholder="e.g., 123456"
          className="border border-blue-400 mb-2.5 px-2 py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="gender" className="mb-1 tracking-wide">
          Gender
        </label>
        <div className="flex gap-1 mb-2.5">
          <input
            type="radio"
            name="gender"
            id="male"
            checked={gender === "male"}
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>

        <label htmlFor="country" className="mb-1 tracking-wide">
          Country
        </label>
        <select
          name="country"
          id="country"
          className="border border-blue-400 py-1 text-center mb-2.5 rounded-lg tracking-wide focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">-- Select Country --</option>
          <option value="india">India</option>
          <option value="us">US</option>
          <option value="uk">UK</option>
          <option value="japan">Japan</option>
        </select>

        <label className="mb-1 tracking-wide">Skills</label>
        <div className="flex gap-1 mb-5">
          <input
            type="checkbox"
            name="skills"
            id="html"
            value="HTML"
            checked={skills.includes("HTML")}
            onChange={handleSkills}
          />
          <label htmlFor="html">HTML</label>
          <input
            type="checkbox"
            name="skills"
            id="css"
            value="CSS"
            checked={skills.includes("CSS")}
            onChange={handleSkills}
          />
          <label htmlFor="css">CSS</label>
          <input
            type="checkbox"
            name="skills"
            id="javascript"
            value="JavaScript"
            checked={skills.includes("JavaScript")}
            onChange={handleSkills}
          />
          <label htmlFor="javascript">JavaScript</label>
        </div>

        <button
          type="submit"
          className="bg-blue-400 text-white font-bold py-1 rounded-full cursor-pointer hover:bg-blue-500 tracking-wide"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
