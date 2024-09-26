import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSuccess, loginFailure, clearError } from "../store/authSlice";
import cityLoginImg from "../assets/city-login.png";
import { backendBaseURL } from "../config";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendBaseURL}api/auth/login`, {
        email,
        password,
      });
      const { accessToken: token, user } = response.data;

      localStorage.setItem("token", token);

      dispatch(loginSuccess({ token, user }));

      navigate("/");
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || "Login failed"));
    }
  };

  return (
    <div className="login-container">
      <img src={cityLoginImg} alt="Beautiful city" />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

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
        <button type="submit">Sign In</button>
        <p className="login-text">
          Don't have an account?
          <span onClick={() => navigate("/signup")} className="signup-link">
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
