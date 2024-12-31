import React from "react";

const Profile = ({ name, email, profileImage }) => {
  return (
    <div className="p-8">
      <div className="flex items-center space-x-4">
        {/* Profile Picture */}
        <div>
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Name and Edit Profile */}
        <div>
          <h2 className="text-2xl font-semibold">{name || "User"}</h2>
          <button className="mt-1 text-blue-500 hover:underline">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Email */}
      <p className="text-white mt-2">Email</p>

      {/* Additional Options */}
      <p className="text-white mt-2">Settings</p>
    </div>
  );
};

export default Profile;
