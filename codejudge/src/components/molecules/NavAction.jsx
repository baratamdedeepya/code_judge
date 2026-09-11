import React from "react";

const NavAction = ({ darkMode, setDarkMode }) => {
  const handleLogin = () => {
    alert("Login page coming soon!");
  };

  const handleSignUp = () => {
    alert("Sign Up page coming soon!");
  };

  return (
    <div className="flex items-center gap-2.5">

      {/* Login */}
      <button
        type="button"
        onClick={handleLogin}
        className="
          h-[38px]
          min-w-[102px]
          rounded-full
          border-2
          border-red-800
          bg-transparent
          px-5
          text-[15px]
          font-semibold
          text-red-800
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-red-800
          hover:text-white
        "
      >
        Login
      </button>

      {/* Sign Up */}
      <button
        type="button"
        onClick={handleSignUp}
        className="
          h-[38px]
          min-w-[102px]
          rounded-full
          border-2
          border-red-800
          bg-red-800
          px-5
          text-[15px]
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-red-900
        "
      >
        Sign Up
      </button>

      {/* Light / Dark mode */}
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
        className={`
          flex
          h-[38px]
          w-[64px]
          items-center
          justify-center
          rounded-full
          border-2
          text-xl
          transition-all
          duration-300
          hover:-translate-y-0.5

          ${
            darkMode
              ? "border-gray-500 bg-gray-800 text-white hover:bg-white hover:text-black"
              : "border-red-800 bg-white text-red-800 hover:bg-red-800 hover:text-white"
          }
        `}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

    </div>
  );
};

export default NavAction;