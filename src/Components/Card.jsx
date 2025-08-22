import React, { useEffect, useState } from "react";
import ThumbsGallery from "./ThumbsGallery";
import CardText from "./CardText";
import Loader from "./Loader";

function Card() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-full flex items-center justify-between max-xl:flex-col mt-[8rem]">
      <div className="w-2/4 px-15 h-screen overflow-hidden">
        <ThumbsGallery />
      </div>

      <div className="w-2/4 h-screen">
        <CardText />
      </div>
    </div>
  );
}

export default Card;
