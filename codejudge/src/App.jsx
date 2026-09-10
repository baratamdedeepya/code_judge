import React, { useState } from "react";

import Navbar from "./components/organisms/Navbar";
import Landing from "./components/organisms/Landing";

import ProblemPage from "./Pages/ProblemPage";
import ContestsPage from "./Pages/ContestsPage";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`
        min-h-screen
        transition-colors
        duration-300

        ${
          darkMode
            ? "bg-[#111111] text-white"
            : "bg-white text-black"
        }
      `}
    >

      
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      

      <main>

        <section id="home">
          <Landing darkMode={darkMode} />
        </section>


        
        <ProblemPage
          darkMode={darkMode}
        />


       

        <ContestsPage
          darkMode={darkMode}
        />

      </main>

    </div>
  );
}

export default App;