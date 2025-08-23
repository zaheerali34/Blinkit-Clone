import React, { useEffect, useState } from "react";
import ThumbsGallery from "./ThumbsGallery";
import CardText from "./CardText";
import Loader from "./Loader";
import Dairy from "./Dairy";

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
    <>
      <div className="w-full h-full flex items-center max-xl:flex-col mt-[8rem] max-md:mt-[5rem]">
        <div className="w-2/4 px-15 max-md:px-10 max-sm:px-4 max-md:py-10 h-screen max-md:h-full overflow-hidden max-lg:w-full">
          <ThumbsGallery />
        </div>

        <div className="w-2/4 h-screen max-lg:w-full max-lg:h-full max-lg:px-10 max-sm:px-4">
          <CardText />
        </div>
      </div>

      <Dairy />
    </>
  );
}

export default Card;
