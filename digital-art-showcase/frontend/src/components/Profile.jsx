import React from "react";

const Profile = () => {
  return (
    <div className="p-8">
      <div className=" flex items-center space-x-4">
        {/* Profile Picture */}
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Email and Uploaded Works */}
        <div>
          <h2 className="text-2xl font-semibold">Suba</h2>
          <button className="mt-1 text-blue-500 hover:underline">
            Edit Profile
          </button>
        </div>
      </div>
      <p className="text-white mt-2 "> Email</p>
      <button className="text-white mt-2">Uploaded Works</button>
      <p className="text-white mt-2 "> Settings</p>
    </div>
  );
};

export default Profile;
