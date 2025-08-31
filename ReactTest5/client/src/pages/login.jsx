// pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (!validateForm()) {
      setError("All fields are required!");
      return;
    }

    // Get registered user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === form.username &&
      storedUser.password === form.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const validateForm = () => {
    return form.username.trim() !== "" && form.password.trim() !== "";
  };

  return (
    <div>
      <h1>Login Form</h1>

      <input
        style={{ marginTop: "10px", height: "30px", width: "300px" }}
        type="text"
        placeholder="Username"
        onChange={handleChange}
        name="username"
        value={form.username}
      />

      <br />
      <input
        style={{ marginTop: "10px", height: "30px", width: "300px" }}
        type="password"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        value={form.password}
      />

      <br />

      <button type="button" style={{ marginTop: "10px" }} onClick={handleLogin}>
        Login
      </button>

      <br />

      <button
        type="button"
        style={{ marginTop: "10px" }}
        onClick={() => navigate("/register")}
      >
        Register
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
