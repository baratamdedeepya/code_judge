import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";
import Toggle from "../atoms/Toggle";
import NavAction from "../molecules/NavAction";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="navbar">
            <Logo />

            <NavLinks />
            <NavAction />
            <Toggle
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            
        </nav>
    );
};

export default Navbar;