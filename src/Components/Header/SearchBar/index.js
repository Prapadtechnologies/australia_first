import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="absolute">
        <div className="flex justify-center items-center bg-white w-9 h-9 rounded-full">
          <img src="/search.png" className="w-4 h-4 object-contain" />
        </div>
      </div>
      <input
        type="text"
        className="bg-secondary rounded-full  h-9 placeholder-white text-white px-12 text-sm font-pop"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
