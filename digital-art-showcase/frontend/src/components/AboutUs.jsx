import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-black from-10% via-green-500 via-80% to-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-indigo-600">
          About Us
        </h1>
        <p className="text-xl leading-relaxed">
          Welcome to <span className="font-bold">Digital Art Showcase</span>
          —your gateway to the vibrant world of digital art! We are dedicated to
          bringing you the most innovative and inspiring digital creations from
          artists across the globe. Whether you're here to explore, admire, or
          share, our platform is designed to celebrate creativity and connect
          art enthusiasts.
        </p>
        <p className="text-lg mt-4">
          Join us on this artistic journey and discover the boundless
          possibilities of digital expression!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
