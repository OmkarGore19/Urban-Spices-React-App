import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto my-1  px-3 py-6">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Categories
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 ">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg px-3 py-4 flex justify-between items-center hover:scale-105 duration-300"
          >
            <h2 className="font-bold ">{item.name}</h2>
            <img
              src={item.image}
              alt={item.name}
              className="w-10 lg:w-20 md:w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
