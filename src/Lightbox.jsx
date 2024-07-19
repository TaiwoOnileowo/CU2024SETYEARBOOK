import React from "react";
import { BsFillMortarboardFill } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useAppContext } from "./AppContext";
const Lightbox = ({isSearchResults}) => {
  const { selectedPerson, closeLightbox, handlePrevious, handleNext } =
    useAppContext();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button
        className="absolute top-2 right-4 text-white text-3xl"
        onClick={closeLightbox}
      >
        &times;
      </button>
      <button
        className="absolute text-white text-xl top-[50%] right-4"
        onClick={()=>handleNext(isSearchResults)}
      >
        <GrNext />
      </button>
      <button
        className="absolute text-white text-xl top-[50%] left-4"
        onClick={()=>handlePrevious(isSearchResults)}
      >
        <GrPrevious />
      </button>
      <div className="bg-purple-600">
        <img
          src={selectedPerson.image}
          alt={selectedPerson.name}
          className="max-w-full max-h-full"
        />
        <div className="p-4 text-white ">
          <h1 className="text-4xl font-bold">{selectedPerson.name}</h1>
          <p className="font-medium text-sm mt-2 flex items-center gap-2 ">
            <span>
              <BsFillMortarboardFill />
            </span>
            Bachelor of {selectedPerson.course}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
