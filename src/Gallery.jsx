import React, { useState } from "react";
import graduate from "./assets/graduate.png";
import { graduates } from "./data";

import Lightbox from "./Lightbox";
import Eagles from "./Eagles";
import Pagination from "./Pagination";
import DisplayedImages from "./DisplayedImages";
import { useAppContext } from "./AppContext";
const Gallery = () => {
  const {
    handleGraduatesNext,
    handleGraduatesPrevious,
    lightboxOpen,
    graduatesIndex,
  } = useAppContext();
 
  return (
    <div className="w-full flex flex-col gap-4  items-center justify-center ">
      <div className="relative w-full flex gap-12 items-center justify-center">
        <div className="absolute top-0 left-[6%] w-[28%]">
          <img src={graduate} alt="" className="w-[100%] mb-6" />
          <h1 className="text-2xl mb-2 font-bold">KUNAL NAIK</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            debitis ut numquam nam velit dolore, ex est iste repudiandae
            voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Corrupti debitis utdebitis utdebitis utdebitis utdebitis Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti debitis
          </p>
        </div>
        <DisplayedImages display={graduates} />
      </div>

      {lightboxOpen && <Lightbox />}
      <div className="w-full flex justify-between items-center text-white mt-4">
        <Eagles />
        <Pagination
          graduatesIndex={graduatesIndex}
          handleGraduatesNext={handleGraduatesNext}
          handleGraduatesPrevious={handleGraduatesPrevious}
          graduates={graduates}
        />
      </div>
    </div>
  );
};

export default Gallery;
