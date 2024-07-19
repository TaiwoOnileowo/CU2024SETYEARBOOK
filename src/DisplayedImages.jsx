import React from "react";
import { useAppContext } from "./AppContext";

const DisplayedImages = ({ display, isSearchResults }) => {
  const getColor = (course) => {
    switch (course) {
      case "Computer Science":
        return { backgroundColor: "blue" };
      case "Mass Communication":
        return { backgroundColor: "red" };
      case "Biological Science":
        return { backgroundColor: "yellow" };
      case "Building Technology":
        return { backgroundColor: "orange" };

      default:
        return { backgroundColor: "gray" };
    }
  };
  const { graduatesIndex, openLightbox } = useAppContext();
  return (
    <>
      <div className="flex flex-col gap-2 w-full items-end">
        {(isSearchResults ? display : display[graduatesIndex])?.map(
          (graduate, groupIndex) => (
            <div className="flex gap-1" key={groupIndex}>
              <div className="mx-4 flex items-center h-36 flex-col justify-center">
                {graduate.names.map((name, index) => (
                  <p key={index} className="animate-come-up">
                    {name}
                  </p>
                ))}
              </div>
              <div
                className="w-[3px] h-48 rounded-full"
                style={getColor(graduate.courses[0])}
              />
              <div className="flex gap-2">
                {graduate.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-48 cursor-pointer"
                    onClick={() => {
                      openLightbox(
                        graduate.images[index],
                        graduate.names[index],
                        graduate.courses[index],
                        groupIndex,
                        index
                      );
                    }}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full animate-come-up"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 duration-300 ease-in-out transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      {!display.length && (
        <h1 className="flex justify-center mt-8 text-2xl font-bold text-gray-700">
          Nothing Found🫠
        </h1>
      )}
    </>
  );
};

export default DisplayedImages;
