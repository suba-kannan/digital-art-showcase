import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setNotification({
        type: "warning",
        message: "Password must be at least 8 characters long.",
      });
      return;
    }

    if (password !== confirmpassword) {
      setNotification({
        type: "warning",
        message: "Passwords do not match. Please try again.",
      });
      return;
    }

    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
        confirmpassword,
      })
      .then((result) => {
        const { status, message } = result.data;

        if (status === "success") {
          setNotification({
            type: "success",
            message:
              message || "Registration successful! Redirecting to login...",
          });
          setTimeout(() => {
            setNotification(null);
            navigate("/");
          }, 3000);
        } else if (status === "error") {
          setNotification({
            type: "warning",
            message: message || "User already exists. Please login!",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setNotification({
          type: "error",
          message: "Registration failed. Please try again!",
        });
      });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-800">
      {/* Background Image */}
      <div
        className="absolute bottom-0 w-full h-52 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/robot-with-metal-head-surrounded-by-flowers-butterflies_319816-12326.jpg?w=1380')",
        }}
      ></div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm z-10">
        <h1 className="text-2xl font-bold text-center mb-2">Digital Art</h1>
        <p className="text-center text-gray-600 mb-4">Create Your Account</p>

        {notification && (
          <div
            className={`mb-4 p-2 text-center rounded-md ${
              notification.type === "success"
                ? "bg-green-100 text-green-700"
                : notification.type === "warning"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {notification.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-black"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-black"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="at least 8 characters"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-black"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-black"
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Yes, I have an account?{" "}
          <a href="/">
            <span className="text-blue-500 cursor-pointer">Login</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Account;
