import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setMessage(""); // Clear any messages when modal is closed
    setFile(null); // Reset the file input
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error uploading file. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex space-x-4">
        <button
          className="bg-green-600 px-4 py-2 rounded-2xl hover:bg-green-500 text-black flex items-center space-x-2"
          onClick={handleModalOpen}
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/7888/7888789.png?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid"
            alt="Upload Icon"
            className="w-5 h-5"
          />
          <span>Upload your Work</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-black rounded-xl p-6 shadow-lg text-white w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold flex items-center">
                <span className="text-2xl mr-2">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/833/833453.png?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid"
                    alt="Upload Icon"
                    className="w-5 h-5"
                  />
                </span>
                Add your art works
              </h2>
              <button
                className="text-2xl text-white hover:text-red-400"
                onClick={handleModalClose}
              >
                &times;
              </button>
            </div>
            <div className="bg-gray-600 rounded-xl h-56 flex flex-col items-center justify-center mb-4">
              <input
                type="file"
                className="mt-4 text-center"
                onChange={handleFileChange}
              />
            </div>
            {message && <p className="text-center mb-4">{message}</p>}
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-red-500 hover:bg-red-400 rounded-lg"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg"
                onClick={handleUpload}
              >
                Upload your Work
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
