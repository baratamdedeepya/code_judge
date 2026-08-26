import { FiSun, FiMoon } from "react-icons/fi";
import "./Toggle.css";

const Toggle = ({ darkMode, setDarkMode }) => {
    return (
        <button
            className={`theme-toggle ${darkMode ? "dark" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
           >
            <span className="toggle-circle">
                {darkMode ? <FiMoon /> : <FiSun />}
            </span>
        </button>
    );
};

export default Toggle;