import React from "react";
import SearchBox from "../molecules/SearchBox";

const ProblemFilters = ({
  search,
  setSearch,
  difficulty,
  setDifficulty,
  topic,
  setTopic,
  darkMode,
}) => {

  return (
    <div className="my-8 flex flex-col gap-4 md:flex-row">

      
      <SearchBox
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
      />


      
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className={`
          rounded-xl
          border
          px-4
          py-3
          outline-none
          transition

          ${
            darkMode
              ? "border-gray-600 bg-[#1c1c1c] text-white"
              : "border-gray-300 bg-white text-gray-700"
          }

          md:w-52
        `}
      >

        <option value="All">
          All Difficulty
        </option>

        <option value="Easy">
          Easy
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="Hard">
          Hard
        </option>

      </select>


      
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className={`
          rounded-xl
          border
          px-4
          py-3
          outline-none
          transition

          ${
            darkMode
              ? "border-gray-600 bg-[#1c1c1c] text-white"
              : "border-gray-300 bg-white text-gray-700"
          }

          md:w-52
        `}
      >

        <option value="All">
          All Topics
        </option>

        <option value="Array">
          Array
        </option>

        <option value="Linked List">
          Linked List
        </option>

        <option value="String">
          String
        </option>

        <option value="Stack">
          Stack
        </option>

        <option value="Tree">
          Tree
        </option>

        <option value="Graph">
          Graph
        </option>

      </select>

    </div>
  );
};

export default ProblemFilters;