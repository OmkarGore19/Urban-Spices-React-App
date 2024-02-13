import React, { useState } from "react";
import { data } from "../data/data";

function Food() {
  const [foods, setFoods] = useState(data);

  // filter type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-4">
      <h1 className="text-orange-500 font-bold text-4xl text-center mb-4">
        Top Rated Menu Items
      </h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-start gap-4 mb-4">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => {
                setFoods(data);
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => {
                filterType("burger");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => {
                filterType("pizza");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => {
                filterType("salad");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => {
                filterType("Cake");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Cake
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex gap-1 max-w-[390px] w-full">
            <button
              onClick={() => {
                filterPrice("₹");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ₹
            </button>
            <button
              onClick={() => {
                filterPrice("₹₹");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ₹₹
            </button>
            <button
              onClick={() => {
                filterPrice("₹₹₹");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ₹₹₹
            </button>
            <button
              onClick={() => {
                filterPrice("₹₹₹₹");
              }}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ₹₹₹₹
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex lg:flex-row flex-col justify-between px-2 py-4 md:flex-col gap-2">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-lg">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
