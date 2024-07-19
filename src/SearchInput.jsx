import React, { useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { graduates } from "./data";
import { useAppContext } from "./AppContext";
const SearchInput = () => {
  const [showBorder, setShowBorder] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { setSearchInput, setCourseFilter, courseFilter, searchInput } =
    useAppContext();
  const courses = graduates.flatMap((item) =>
    item.flatMap((graduate) => graduate.courses[0])
  );
  const uniqueCourses = courses.filter(
    (item, index, self) => self.indexOf(item) === index
  );
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="w-full justify-end flex mb-6 ">
      <div
        className={`relative bg-purple-100 rounded-full flex items-center px-2 w-[28%] ${
          showBorder ? "border-purple-600" : null
        } border-2 `}
      >
        <input
          type="search"
          name="name"
          id=""
          placeholder="Search"
          value={searchInput}
          disabled={courseFilter && true}
          className="bg-purple-100 rounded-full p-2  px-4 outline-none  w-full"
          onClick={() => setShowBorder(true)}
          onChange={handleChange}
        />
        {courseFilter && (
          <p className="bg-slate-200 rounded-full flex  absolute left-2">
            <span className=" px-2 pr-1 py-1">{courseFilter} </span>
            <span
              className="text-purple-400 flex  items-start cursor-pointer h-full px-1"
              onClick={() => setCourseFilter(null)}
            >
              &times;
            </span>
          </p>
        )}
        <div className="relative">
          <MdFilterAlt
            title="Filter by course"
            className="text-2xl cursor-pointer text-purple-400 hover:text-purple-600"
            onClick={() => setShowFilter((prev) => !prev)}
          />
          <ul
            className={`bg-white transition-all overflow-hidden ease-in-out duration-300 rounded-xl z-[50] right-0 flex gap-2  absolute flex-col text-sm  p-2 items-center justify-center ${
              showFilter
                ? "h-[240px] w-[180px] opacity-100"
                : "h-0 w-0 opacity-0"
            }`}
          >
            {uniqueCourses.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-700 hover:text-black"
                onClick={() => {
                  setCourseFilter(item);

                  setShowFilter(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
