import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer className="max-w-full mx-auto sm:px-4 py-8 bg-black">
        <div className="mx-auto max-w-[1640px] w-full text-center">
          <a href="#" className="text-2xl text-white hover:underline ">
            Urban
            <span className="font-bold text-orange-500"> Spices</span>™
          </a>
          <p className="my-3 text-gray-500 text-sm sm:text-md">
            Savor the City Flavors with Urban Spices: Bringing Culinary Delights
            to Your Doorstep!
          </p>
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
            ©{year}{" "}
            <a href="#" className="hover:underline">
              Urban Spices™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
