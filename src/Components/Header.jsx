import React from "react";
import Logo from "../assets/logo.png";
import "remixicon/fonts/remixicon.css";

function Header() {
  return (
    <div className="w-full p-4 flex items-center justify-between">
      <img src={Logo} alt="logo" className="w-[70px]" />

      <div className="w-1/2 bg-zinc-100 py-4 px-6 flex items-center gap-2 rounded-xl hover:bg-zinc-200 transition-all duration-300">
        <i class="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search..."
          className=" border-transparent w-full outline-none"
        />
      </div>

      <div className="flex items-center gap-8">
        <button className="text-xl  cursor-pointer">Login</button>
        <button className="bg-green-600 py-5 px-7 rounded-xl text-sm font-medium  cursor-pointer text-white">
          <i class="ri-shopping-cart-2-line"></i> My Card
        </button>
      </div>
    </div>
  );
}

export default Header;
