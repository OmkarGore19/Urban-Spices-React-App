import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegWindowClose, FaWallet, FaUserFriends } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 gap-2">
      <div className="flex items-center">
        {/* left side */}
        <div
          onClick={() => {
            setSidebar(!sidebar);
          }}
          className="cursor-pointer"
        >
          <RiMenu2Fill size={30} />
        </div>
        <div className="flex">
          <p className="text-2xl ml-2 md:text-3xl lg:text-4xl px-2 cursor-pointer">
            Urban <span className="text-orange-500 font-bold">Spices</span>
          </p>
        </div>
        <div className="hidden lg:flex items-center bg-black rounded-full p-1 text-[14px] cursor-pointer">
          <p
            onClick={() => {
              setToggle(false);
            }}
            className={`p-2 ${
              !toggle ? "bg-orange-500 text-white rounded-full" : "text-white"
            }`}
          >
            Delivery
          </p>
          <p
            onClick={() => {
              setToggle(true);
            }}
            className={`p-2 ${
              toggle ? "bg-orange-500 text-white rounded-full " : "text-white"
            }`}
          >
            Pickup
          </p>
        </div>
      </div>

      <div className="max-w-[1690px] flex items-end gap-2">
        {/* search input */}

        <div className="bg-gray-200 rounded-full flex items-center px-2  w-full sm:w-[400px] lg:w-[500px]">
          <IoSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>

        {/* sign up/login button */}
        <button className="hover:bg-transparent hover:text-black bg-black text-white hidden md:flex items-center justify-center py-2 rounded-full ">
          Login
        </button>

        {/* cart button */}
        <button className="hover:bg-transparent hover:text-black bg-black text-white hidden md:flex items-center justify-center py-2 rounded-full">
          <FaCartShopping size={20} className="mr-2" /> Cart
        </button>
      </div>

      {/* mobile menu */}
      {/* overlay */}
      {sidebar ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* sidebar */}

      <div
        className={
          sidebar
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <FaRegWindowClose
          onClick={() => {
            setSidebar(!sidebar);
          }}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Urban <span className="text-orange-500 font-bold">Spices</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTags size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
