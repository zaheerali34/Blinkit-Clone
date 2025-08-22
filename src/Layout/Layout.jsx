import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Card from "../Components/Card";
import NotFoundPage from "../Components/NotFoundPage";

function Layout({ clone, setClone, toggleClone }) {
  return (
    <div className="w-full h-full mt-17">
      <Routes>
        <Route path="/" element={<Home clone={clone} setClone={setClone} toggleClone={toggleClone}/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      
    </div>
  );
}

export default Layout;
