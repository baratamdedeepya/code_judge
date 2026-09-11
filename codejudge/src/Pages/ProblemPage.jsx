import React, { useState } from "react";

import ProblemFilters from "../components/organisms/ProblemFilters";
import ProblemList from "../components/organisms/ProblemList";

const ProblemPage = ({ darkMode }) => {

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");

  return (
    <section
      id="problems"
      className={`
        min-h-screen
        scroll-mt-[76px]
        px-6
        py-20
        transition-colors
        duration-300

        ${
          darkMode
            ? "bg-[#111111] text-white"
            : "bg-white text-black"
        }
      `}
    >

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">

          <h1
            className={`
              text-4xl
              font-bold

              ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            Problems
          </h1>

          <p
            className={`
              mt-3

              ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }
            `}
          >
            Practice coding problems and improve your skills
          </p>

        </div>


        {/* Filters */}
        <ProblemFilters
          search={search}
          setSearch={setSearch}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          topic={topic}
          setTopic={setTopic}
          darkMode={darkMode}
        />


        {/* Problems */}
        <ProblemList
          search={search}
          difficulty={difficulty}
          topic={topic}
          darkMode={darkMode}
        />

      </div>

    </section>
  );
};

export default ProblemPage;