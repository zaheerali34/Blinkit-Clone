import React from "react";
import Logo from "../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

function Header({ clone, setClone, toggleClone }) {
  const handleCloneToggle = () => {
    toggleClone();
  };

  return (
    <div className="w-full py-2 px-4 flex items-center justify-between fixed top-0 left-0 bg-white z-50 shadow-sm">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[70px] cursor-pointer" />
      </Link>

      <div className="w-1/2 bg-zinc-100 py-4 px-6 flex items-center gap-2 rounded-xl hover:bg-zinc-200 transition-all duration-300">
        <i className="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search..."
          className=" border-transparent w-full outline-none"
        />
      </div>

      <div className="flex items-center gap-8">
        <button className="text-xl  cursor-pointer">Login</button>
        <button
          onClick={handleCloneToggle}
          className="bg-green-600 py-5 px-7 rounded-xl text-sm font-medium  cursor-pointer text-white"
        >
          <i className="ri-shopping-cart-2-line"></i> My Card
        </button>
      </div>
    </div>
  );
}

export default Header;
