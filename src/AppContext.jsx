import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react";
import { graduates } from "./data";
import { FilterDataAdvanced } from "filter-data-advanced/dist/FilterDataAdvanced";
const Context = createContext();

export const AppContext = ({ children }) => {
  const [searchInput, setSearchInput] = useState(null);
  const [courseFilter, setCourseFilter] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({
    name: null,
    image: null,
    course: null,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [graduatesIndex, setGraduatesIndex] = useState(0);

  const obj = new FilterDataAdvanced();
  const fullGraduates = [...graduates[0], ...graduates[1]];

  const resultFromFilter = courseFilter
    ? obj.filterByKeyValue(fullGraduates, "courses", courseFilter)
    : null;
  const resultFromInput = searchInput
    ? obj.filterByKeyValue(fullGraduates, "names", searchInput)
    : null;

  const openLightbox = (image, name, course, groupIndex, index) => {
    setSelectedPerson({
      name: name,
      image: image,
      course: course,
    });
    setCurrentGroupIndex(groupIndex);
    setCurrentIndex(index);
    setLightboxOpen(true);
    console.log(groupIndex);
  };

  const closeLightbox = () => {
    setSelectedPerson({
      name: null,
      image: null,
      course: null,
    });
    setLightboxOpen(false);
  };

  const handleNext = (isSearchResults) => {
    let newIndex = currentIndex + 1;
    let newGroupIndex = currentGroupIndex;

    if (isSearchResults) {
      if (
        newIndex >=
        (courseFilter ? resultFromFilter : resultFromInput)[newGroupIndex]
          .images.length
      ) {
        newIndex = 0;
        newGroupIndex =
          (currentGroupIndex + 1) %
          (courseFilter ? resultFromFilter : resultFromInput).length;
      }
      console.log(newGroupIndex);
      console.log(newIndex);
      setCurrentIndex(newIndex);
      setCurrentGroupIndex(newGroupIndex);
      setSelectedPerson({
        name: (courseFilter ? resultFromFilter : resultFromInput)[newGroupIndex]
          .names[newIndex],
        image: (courseFilter ? resultFromFilter : resultFromInput)[
          newGroupIndex
        ].images[newIndex],
        course: (courseFilter ? resultFromFilter : resultFromInput)[
          newGroupIndex
        ].courses[newIndex],
      });
    } else {
      if (newIndex >= graduates[graduatesIndex][newGroupIndex].images.length) {
        newIndex = 0;
        newGroupIndex =
          (currentGroupIndex + 1) % graduates[graduatesIndex].length;
      }
      console.log(newGroupIndex);
      console.log(newIndex);
      setCurrentIndex(newIndex);
      setCurrentGroupIndex(newGroupIndex);
      setSelectedPerson({
        name: graduates[graduatesIndex][newGroupIndex].names[newIndex],
        image: graduates[graduatesIndex][newGroupIndex].images[newIndex],
        course: graduates[graduatesIndex][newGroupIndex].courses[newIndex],
      });
    }
  };

  const handlePrevious = () => {
    let newIndex = currentIndex - 1;
    let newGroupIndex = currentGroupIndex;

    if (newIndex < 0) {
      newGroupIndex =
        (currentGroupIndex - 1 + graduates[graduatesIndex].length) %
        graduates[graduatesIndex].length;
      newIndex = graduates[graduatesIndex][newGroupIndex].images.length - 1;
    }

    setCurrentIndex(newIndex);
    setCurrentGroupIndex(newGroupIndex);
    setSelectedPerson({
      name: graduates[graduatesIndex][newGroupIndex].names[newIndex],
      image: graduates[graduatesIndex][newGroupIndex].images[newIndex],
      course: graduates[graduatesIndex][newGroupIndex].courses[newIndex],
    });
  };

  const handleGraduatesNext = () => {
    if (graduatesIndex < graduates.length - 1) {
      setGraduatesIndex(graduatesIndex + 1);
      setCurrentGroupIndex(0);
      setCurrentIndex(0);
    }
  };

  const handleGraduatesPrevious = () => {
    if (graduatesIndex > 0) {
      setGraduatesIndex(graduatesIndex - 1);
      setCurrentGroupIndex(0);
      setCurrentIndex(0);
    }
  };

  console.log(searchInput);
  console.log(courseFilter);
  console.log(resultFromInput);
  console.log(resultFromFilter);
  return (
    <Context.Provider
      value={{
        handleGraduatesNext,
        handleGraduatesPrevious,
        handleNext,
        handlePrevious,
        openLightbox,
        setLightboxOpen,
        setSelectedPerson,
        setGraduatesIndex,
        setCurrentGroupIndex,
        lightboxOpen,
        selectedPerson,
        closeLightbox,
        graduatesIndex,
        searchInput,
        setSearchInput,
        courseFilter,
        setCourseFilter,
        resultFromFilter,
        resultFromInput,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
