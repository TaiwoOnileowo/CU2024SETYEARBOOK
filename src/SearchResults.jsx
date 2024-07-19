import React from "react";
import { useAppContext } from "./AppContext";
import DisplayedImages from "./DisplayedImages";
import Lightbox from "./Lightbox";

const SearchResults = () => {
  const { lightboxOpen, resultFromFilter, resultFromInput , courseFilter} = useAppContext();

  return (
    <div className="min-h-screen">
      <DisplayedImages
        display={courseFilter ? resultFromFilter : resultFromInput}
        isSearchResults
      />
      {lightboxOpen && <Lightbox isSearchResults />}
    </div>
  );
};

export default SearchResults;
