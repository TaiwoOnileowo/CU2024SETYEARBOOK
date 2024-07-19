import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
const Pagination = ({
  graduates,
  graduatesIndex,
  handleGraduatesNext,
  handleGraduatesPrevious,
}) => {
  return (
    <div className="flex gap-3 justify-end">
      <button
        className={`bg-black p-2 ${
          graduatesIndex === 0 ? "bg-opacity-50" : ""
        }`}
        onClick={handleGraduatesPrevious}
        disabled={graduatesIndex === 0}
      >
        <GrPrevious />
      </button>
      <button
        className={`bg-black p-2 ${
          graduatesIndex === graduates.length - 1 ? "bg-opacity-50" : ""
        }`}
        onClick={handleGraduatesNext}
        disabled={graduatesIndex === graduates.length - 1}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
