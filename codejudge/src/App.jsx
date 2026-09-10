import { useState } from "react";
import Navbar from "./components/organisms/Navbar";
import "./App.css";
import Landing from "./components/organisms/Landing";
import WhyChooseUs from "./components/organisms/WhyChooseUs";
function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "app dark" : "app"}>

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