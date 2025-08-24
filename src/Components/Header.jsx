import React from "react";
import Logo from "../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header({ clone, setClone, toggleClone }) {
  const handleCloneToggle = () => {
    toggleClone();
  };

  return (
    <div className="w-full py-2 px-4 flex items-center justify-between fixed top-0 left-0 bg-white z-50 shadow-sm">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] cursor-pointer max-md:w-[50px]"
        />
      </Link>

      <Search />

      <div className="flex items-center gap-8 max-sm:gap-4">
        <button className="text-xl  cursor-pointer max-sm:text-[15px]">
          Login
        </button>
        <button
          onClick={handleCloneToggle}
          className="bg-green-600 py-5 px-7 rounded-xl text-sm font-medium  cursor-pointer text-white max-md:py-3 max-md:px-4 max-md:rounded-md max-sm:py-2 max-sm:px-3"
        >
          <i className="ri-shopping-cart-2-line"></i> My Card
        </button>
      </div>
    </div>
  );
}

export default Header;
