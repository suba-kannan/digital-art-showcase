import React from "react";

const Categories = () => {
  const categories = [
    { name: "Abstract Art", icon: "🎨" },
    { name: "Landscape", icon: "🏞️" },
    { name: "Portraits", icon: "🖼️" },
    { name: "Fantasy", icon: "🧚" },
    { name: "Sci-Fi", icon: "🚀" },
    { name: "Minimalism", icon: "🔲" },
  ];

  return (
    <div className="bg-gradient-to-r from-black from-10% via-green-500 via-80% to-black text-white min-h-screen p-8">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Categories</h1>
        <p className="text-xl">
          Dive into a world of creativity and explore various categories of
          digital art.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-slate-200 text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h2 className="text-2xl font-bold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
