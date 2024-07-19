import React from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

import { useAppContext } from "./AppContext";
const Search = () => {
  const { searchInput, courseFilter } = useAppContext();

  return (
    <div className="w-full ">
      <SearchInput />
      {(searchInput || courseFilter) && <SearchResults />}
    </div>
  );
};

export default Search;
