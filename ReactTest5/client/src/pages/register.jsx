import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { username, password, confirmPassword } = form;
    const newErrors = {};

    if (username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: form.username, password: form.password })
      );

      alert("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <br />

      <input
        style={{ marginTop: "10px", height: "30px", width: "300px" }}
        type="text"
        placeholder="Username"
        onChange={handleChange}
        name="username"
        value={form.username}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <br />
      <input
        style={{ marginTop: "10px", height: "30px", width: "300px" }}
        type="password"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        value={form.password}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <br />
      <input
        style={{ marginTop: "10px", height: "30px", width: "300px" }}
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        name="confirmPassword"
        value={form.confirmPassword}
      />
      {errors.confirmPassword && (
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>
      )}

      <br />
      <button
        type="button"
        style={{ marginTop: "10px" }}
        onClick={handleRegister}
      >
        Register
      </button>
      <br />
      <button style={{ marginTop: "10px" }} onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default Register;
