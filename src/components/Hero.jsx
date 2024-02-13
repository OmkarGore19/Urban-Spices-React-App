import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-2">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center">
          <h1 className="px-4 text-3xl md:text-6xl lg:text-7xl font-bold">
            Enjoy your <br />
            <span className="text-orange-500">
              <TypeAnimation
                className="text-3xl md:text-6xl lg:text-7xl font-bold"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Food",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Burger",
                  1000,
                  "Pizza",
                  1000,
                  "Cake",
                  1000,
                  "Salad",
                  1000,
                ]}
                wrapper="span"
                speed={0}
                repeat={Infinity}
              />
            </span>
          </h1>
          <h1 className="px-4 text-3xl md:text-6xl lg:text-7xl font-bold">
            with
            <span className="text-orange-500 font-sans"> US</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://img4.goodfon.com/wallpaper/nbig/0/32/meat-tomatoes-salat-fastfud-fast-food-sendvich-hamburger-pom.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
