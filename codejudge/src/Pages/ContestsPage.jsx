import React from "react";

const contests = [
  {
    id: 1,
    title: "Weekly Coding Challenge",
    date: "Every Sunday",
    duration: "2 Hours",
    participants: "5,000+",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Code.Compile. Conquer.",
    date: "September 15, 2026",
    duration: "3 Hours",
    participants: "10,000+",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Beginner Coding Contest",
    date: "September 20, 2026",
    duration: "2 Hours",
    participants: "3,000+",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Algorithm Masters",
    date: "September 25, 2026",
    duration: "3 Hours",
    participants: "7,000+",
    status: "Upcoming",
  },
];

const ContestsPage = ({ darkMode }) => {
  return (
    <section
      id="contests"
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
            : "bg-[#fffafa] text-black"
        }
      `}
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <h1
            className={`
              text-4xl
              font-bold
              md:text-5xl
              ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            Coding Contests
          </h1>

          <p
            className={`
              mt-4
              text-lg
              ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            Compete with developers and prove your coding skills
          </p>

        </div>


        {/* Contest Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {contests.map((contest) => (

            <div
              key={contest.id}
              className={`
                rounded-2xl
                border
                p-6
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

              {/* Contest title */}
              <h2
                className={`
                  text-2xl
                  font-bold
                  ${
                    darkMode
                      ? "text-white"
                      : "text-gray-900"
                  }
                `}
              >
                {contest.title}
              </h2>


              {/* Status */}
              <span className="mt-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                {contest.status}
              </span>


              {/* Information */}
              <div
                className={`
                  mt-6
                  space-y-3
                  ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }
                `}
              >

                <p>
                  📅 <strong>Date:</strong>{" "}
                  {contest.date}
                </p>

                <p>
                  ⏱️ <strong>Duration:</strong>{" "}
                  {contest.duration}
                </p>

                <p>
                  👥 <strong>Participants:</strong>{" "}
                  {contest.participants}
                </p>

              </div>


              {/* Button */}
              <button
                className="
                  mt-6
                  rounded-full
                  bg-red-800
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-red-900
                  hover:-translate-y-0.5
                "
              >
                View Contest
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ContestsPage;