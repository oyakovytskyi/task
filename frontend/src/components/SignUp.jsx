import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cityLoginImg from "../assets/city-login.png";
import { backendBaseURL } from "../config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendBaseURL}api/auth/signup`, {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      alert("Error during sign-up: " + error.response?.data?.message);
    }
  };

  return (
    <div className="signup-container">
      <img src={cityLoginImg} alt="Beautiful city" />
      <form onSubmit={handleSignUp} className="signup-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p className="signup-text">
          Already have an account?
          <span onClick={() => navigate("/login")} className="login-link">
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
