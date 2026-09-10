import React from "react";

const SearchBox = ({
  search,
  setSearch,
  darkMode,
}) => {

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search problems..."
      className={`
        w-full
        rounded-xl
        border
        px-5
        py-3
        outline-none
        transition

        ${
          darkMode
            ? "border-gray-600 bg-[#1c1c1c] text-white placeholder-gray-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
        }

        md:flex-1
      `}
    />
  );
};

export default SearchBox;