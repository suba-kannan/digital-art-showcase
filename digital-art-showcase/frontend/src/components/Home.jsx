import React, { useEffect, useState } from "react";

const Home = () => {
  const digitalArtImages = [
    {
      url: "https://img.freepik.com/free-photo/futuristic-half-robohttps://img.freepik.com/premium-photo/portrait-astronauts-with-flowers-hightech-astronauts-from-future-concept-space-travel_158863-8377.jpg?ga=GA1.1.1099594990.1735049222&semt=ais_hybridt-tiger_23-2151558816.jpg?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid",
      customClass:
        "border-4 border-white-500 rounded-3xl min-w-80 h-96 flex grow",
    },
    {
      url: "https://img.freepik.com/free-photo/nature-beauty-colors-meadow-daisy-blossoms-generated-by-ai_188544-10116.jpg?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid",
      customClass: "border-4 border-white-500 rounded-3xl min-w-80 h-96 ",
      customStyle: {},
    },
    {
      url: "https://img.freepik.com/free-photo/digital-art-portrait-person-listening-music-headphones_23-2151065085.jpg?t=st=1735148848~exp=1735152448~hmac=488d4c8d3929836c838506307e66e733376bddebe5cb4d09bf052c8318a3ad28&w=360",
      customClass: "border-4 border-white-500 rounded-3xl w-96 h-96 ",
      customStyle: {},
    },
    {
      url: "https://img.freepik.com/premium-photo/fantasy-illustration-with-eye-fish-water_856795-12822.jpg?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid",
      customClass: "border-4 border-white-500 rounded-3xl w-96 h-96",
      customStyle: {},
    },
    {
      url: "https://img.freepik.com/free-photo/man-posing-with-plastic-foil_23-2148864887.jpg?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid",
      customClass: "border-4 border-white-500 rounded-3xl w-80 h-72",
      customStyle: {},
    },
    {
      url: "https://img.freepik.com/free-photo/woman-trees-double-exposure_23-2149303244.jpg?ga=GA1.1.1099594990.1735049222&semt=ais_hybrid",
      customClass: "border-4 border-white-500 rounded-3xl w-80 h-80",
      customStyle: {},
    },
  ];

  const [recentsDigitalImages, setRecentsDigitalImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isRecent, setIsRecent] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:3001/images");
        const data = await response.json();
        if (data.status === "success") {
          console.log(data);
          setRecentsDigitalImages(
            data.images.map((img) => ({
              url: img.image,
              id: img._id,
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (index, isRecentImages) => {
    const images = isRecentImages ? recentsDigitalImages : digitalArtImages;
    setSelectedImage(images[index]);
    setSelectedIndex(index);
    setIsRecent(isRecentImages);
  };

  const handleDelete = async () => {
    if (isRecent && selectedImage) {
      try {
        console.log(selectedImage);
        const response = await fetch(
          `http://localhost:3001/images/${selectedImage.id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        if (data.status === "success") {
          // Remove the deleted image from the state
          setRecentsDigitalImages((prevImages) =>
            prevImages.filter((img) => img.id !== selectedImage.id)
          );
          closeModal();
        } else {
          console.error("Failed to delete image:", data.message);
        }
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  const handleNext = () => {
    const images = isRecent ? recentsDigitalImages : digitalArtImages;
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].imagePath || images[nextIndex].url);
    setSelectedIndex(nextIndex);
  };

  const handlePrevious = () => {
    const images = isRecent ? recentsDigitalImages : digitalArtImages;
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].imagePath || images[prevIndex].url);
    setSelectedIndex(prevIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
    setIsRecent(false);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black from-10% via-green-500 via-80% to-black text-white">
      <main className="p-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Digital Art Work</h1>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-white opacity-50 backdrop-blur-md z-0"></div>
            <div className="relative z-10 space-y-4 m-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {digitalArtImages.map((image, index) => (
                  <div key={index} className="p-2">
                    <img
                      src={image.url}
                      alt={`Artwork ${index + 1}`}
                      className="border-4 border-white-500 rounded-3xl w-96 h-96 flex grow"
                      onClick={() => handleImageClick(index, false)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Recents Digital</h1>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-white opacity-50 backdrop-blur-md z-0"></div>
            <div className="relative z-10 space-y-4 m-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {recentsDigitalImages.map((image, index) => (
                  <div key={index} className="p-2">
                    <img
                      src={`http://localhost:3001${image.url}`}
                      alt={`Artwork ${index + 1}`}
                      className="border-4 border-white-500 rounded-3xl w-96 h-96 flex grow"
                      onClick={() => handleImageClick(index, true)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={handlePrevious}
          >
            &#8249;
          </button>
          <div className="relative max-w-2xl max-h-2xl p-4 rounded-lg">
            <img
              src={`http://localhost:3001${selectedImage.url}`}
              alt="Selected artwork"
              className={`w-full h-auto rounded-lg transition-transform duration-300 ${
                isZoomed ? "scale-150" : "scale-100"
              }`}
              onClick={toggleZoom}
            />
          </div>
          <button
            className="absolute right-4 text-white text-2xl"
            onClick={handleNext}
          >
            &#8250;
          </button>
          {isRecent && (
            <button
              className="absolute bottom-4 text-white bg-red-600 px-4 py-2 rounded-lg"
              onClick={handleDelete}
            >
              Delete Image
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
