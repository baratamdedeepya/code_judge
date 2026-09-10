import React from "react";

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
  },
  {
    id: 2,
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
  },
  {
    id: 3,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
  },
  {
    id: 4,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String",
  },
  {
    id: 5,
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array",
  },
  {
    id: 6,
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    category: "Tree",
  },
  {
    id: 7,
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph",
  },
  {
    id: 8,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    category: "Tree",
  },
];


const ProblemList = ({
  search = "",
  difficulty = "All",
  topic = "All",
  darkMode = false,
}) => {

  const searchValue = search.toLowerCase().trim();


  const filteredProblems = problems.filter((problem) => {

    const matchesSearch =
      searchValue === "" ||
      problem.title
        .toLowerCase()
        .includes(searchValue) ||
      problem.category
        .toLowerCase()
        .includes(searchValue) ||
      problem.difficulty
        .toLowerCase()
        .includes(searchValue);


    const matchesDifficulty =
      difficulty === "All" ||
      problem.difficulty === difficulty;


    const matchesTopic =
      topic === "All" ||
      problem.category === topic;


    return (
      matchesSearch &&
      matchesDifficulty &&
      matchesTopic
    );
  });


  return (
    <div className="mt-6">

      
      <div
        className={`
          mb-5
          text-sm

          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-500"
          }
        `}
      >
        {filteredProblems.length} problem
        {filteredProblems.length !== 1
          ? "s"
          : ""}{" "}
        found
      </div>


      {/* RESULTS */}
      {filteredProblems.length > 0 ? (

        <div className="space-y-4">

          {filteredProblems.map((problem) => (

            <div
              key={problem.id}
              className={`
                flex
                items-center
                justify-between
                rounded-xl
                border
                p-5
                transition-all
                duration-300
                hover:-translate-y-1

                ${
                  darkMode
                    ? "border-gray-700 bg-[#1c1c1c] hover:bg-[#242424]"
                    : "border-gray-200 bg-white shadow-sm hover:shadow-lg"
                }
              `}
            >

              
              <div>

                <h3
                  className={`
                    text-lg
                    font-semibold

                    ${
                      darkMode
                        ? "text-white"
                        : "text-gray-900"
                    }
                  `}
                >
                  {problem.id}. {problem.title}
                </h3>


                <p
                  className={`
                    mt-1
                    text-sm

                    ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  {problem.category}
                </p>

              </div>


              {/* Difficulty */}
              <span
                className={`
                  rounded-full
                  px-4
                  py-1
                  text-sm
                  font-semibold

                  ${
                    problem.difficulty === "Easy"
                      ? "bg-green-100 text-green-700"
                      : problem.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {problem.difficulty}
              </span>

            </div>

          ))}

        </div>

      ) : (

        
        <div
          className={`
            rounded-xl
            border
            py-16
            text-center

            ${
              darkMode
                ? "border-gray-700 bg-[#1c1c1c]"
                : "border-gray-200 bg-gray-50"
            }
          `}
        >

          <h3
            className={`
              text-xl
              font-semibold

              ${
                darkMode
                  ? "text-white"
                  : "text-gray-800"
              }
            `}
          >
            No problems found
          </h3>


          <p
            className={`
              mt-2

              ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }
            `}
          >
            Try a different search, difficulty, or topic.
          </p>

        </div>

      )}

    </div>
  );
};

export default ProblemList;