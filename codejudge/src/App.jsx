import { useState } from "react";
import Navbar from "./components/organisms/Navbar";
import './App.css';
import Landing from "./components/organisms/Landing";
import LoginForm from "./components/molecules/LoginForm";
function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
           <Landing/>
           <LoginForm/>
        </>
    );
}

export default App;