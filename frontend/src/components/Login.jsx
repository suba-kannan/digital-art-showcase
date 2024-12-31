import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [notification, setNotification] = useState(null); // State for notifications
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          setNotification({ type: "success", message: "Login Successful!" });
          setTimeout(() => {
            setNotification(null); // Clear notification
            navigate("/home");
          }, 3000); // Navigate after 3 seconds
        } else {
          setNotification({ type: "error", message: "Invalid Credentials!" });
        }
      })
      .catch((err) => {
        console.log(err);
        setNotification({ type: "error", message: "Login Failed!" });
      });
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-800">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      ></div>
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Login Form */}
      <div className="z-10 bg-white w-96 p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3447/3447560.png"
            alt="icon"
            className="mr-2 w-6 h-6"
          />
          Digital Art
        </h2>

        <p className="text-center text-gray-500 mb-6">Login</p>

        {notification && (
          <div
            className={`mb-4 p-2 text-center rounded-md ${
              notification.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {notification.message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500 text-black"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <a
            href="/register"
            className="text-sm text-green-500 hover:underline"
          >
            Forgot Password?
          </a>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
