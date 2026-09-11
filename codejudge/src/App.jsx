import React, { useState } from "react";

import Navbar from "./components/organisms/Navbar";
import Landing from "./components/organisms/Landing";
import WhyChooseUs from "./components/organisms/WhyChooseUs";
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

            <Landing />
            <WhyChooseUs />
        </div>
    );
}

export default App;