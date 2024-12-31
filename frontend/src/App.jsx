import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Categories from "./components/Categories.jsx";
import Profile from "./components/Profile.jsx";
import Upload from "./components/Upload.jsx";
import Login from "./components/Login.jsx";
import Account from "./components/Account.jsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Account />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <div className="min-h-screen bg-gradient-to-r from-black from-10% via-green-500 via-80% to-black text-white">
        <header className="bg-gradient-to-r from-black from-10% via-green-500 via-80% to-black text-white sticky top-0 z-50 ">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center bg-white text-black rounded-full px-6 py-2 shadow-md">
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/home"
                  className="hover:text-green-300 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-green-300 transition duration-300 "
                >
                  About Us
                </Link>
                <Link
                  to="/categories"
                  className="hover:text-green-300 transition duration-300"
                >
                  Categories
                </Link>
                <Link
                  to="/profile"
                  className="hover:text-green-300 transition duration-300"
                >
                  Profile
                </Link>
              </nav>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex space-x-4 items-center">
              <Upload />
              <button className="bg-white px-4 py-2 rounded-2xl text-black hover:bg-red-500 flex items-center space-x-2">
                <img
                  src="https://cdn-icons-png.freepik.com/256/10068/10068701.png?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid" // Replace with your icon URL
                  alt="Signout Icon"
                  className="w-5 h-5"
                />

                <a href="/">
                  <span>Signout</span>
                </a>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block md:hidden text-white"
              onClick={() => setShowNav(!showNav)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    showNav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          {showNav && (
            <div className="md:hidden bg-black bg-opacity-90 text-white">
              <nav className="flex flex-col items-center space-y-4 p-4">
                <Link
                  to="/home"
                  className="hover:text-green-300 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-green-300 transition duration-300"
                >
                  About Us
                </Link>
                <Link
                  to="/categories"
                  className="hover:text-green-300 transition duration-300"
                >
                  Categories
                </Link>
                <Link
                  to="/profile"
                  className="hover:text-green-300 transition duration-300"
                >
                  Profile
                </Link>
                <div className="mt-4">
                  <Upload />
                </div>
                <button className="bg-white px-4 py-2 rounded-2xl text-black hover:bg-red-500 flex items-center space-x-2">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/10068/10068701.png?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid" // Replace with your icon URL
                    alt="Signout Icon"
                    className="w-5 h-5"
                  />

                  <a href="/">
                    <span>Signout</span>
                  </a>
                </button>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                  isModalOpen={isModalOpen}
                  handleModalOpen={handleModalOpen}
                  handleModalClose={handleModalClose}
                />
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
