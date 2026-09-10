import React from "react";
import NavLinks from "../molecules/NavLinks";
import NavAction from "../molecules/NavAction";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`
        sticky
        top-0
        z-50
        h-[76px]
        w-full
        border-b
        transition-colors
        duration-300
        ${
          darkMode
            ? "border-gray-800 bg-[#111111]"
            : "border-red-100 bg-white"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1200px]
          items-center
          px-[30px]
        "
      >

    
        <div className="whitespace-nowrap text-2xl font-bold">
          <span
            className={
              darkMode
                ? "text-white"
                : "text-black"
            }
          >
            &amp;Code
          </span>

          <span className="text-red-800">
            Judge
          </span>
        </div>


        
        <div className="ml-auto mr-[55px]">
          <NavLinks darkMode={darkMode} />
        </div>


        
        <NavAction
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

      </div>
    </header>
  );
};

export default Navbar;