import React, { useState } from "react";
import Gallery from "./Gallery";
import Search from "./Search";
import { useAppContext } from "./AppContext";

const App = () => {
  const { searchInput, courseFilter } = useAppContext();
  return (
    <div className="bg-purple-300 w-full flex p-6 px-24 flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">2024 SET YEARBOOK</h1>
      <Search
        
      />
      {!searchInput && !courseFilter && <Gallery />}
    </div>
  );
};

export default App;
