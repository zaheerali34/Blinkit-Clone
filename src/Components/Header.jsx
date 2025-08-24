import React from "react";
import Logo from "../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";

function Header({ toggleClone }) {
  const handleCloneToggle = () => {
    toggleClone();
  };

  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((total, item) => {
      const priceString = String(item.price); // Ensure it's a string
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0)
  );

  const formattedTotalPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "USD",
  });

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
        <button className="text-xl  cursor-pointer max-sm:text-[15px] hidden">
          Login
        </button>
        <button
          onClick={handleCloneToggle}
          className="bg-green-600 py-5 px-7 rounded-xl text-sm font-medium  cursor-pointer text-white max-md:py-3 max-md:px-4 max-md:rounded-md max-sm:py-4 max-sm:px-2 max-sm:text-[12px]"
        >
          <i className="ri-shopping-cart-2-line"></i> My Card ({totalItems}) {formattedTotalPrice}
        </button>
      </div>
    </div>
  );
}

export default Header;
