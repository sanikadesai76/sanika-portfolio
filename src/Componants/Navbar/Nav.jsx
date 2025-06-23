import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import "./Nav.css";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <header className="navbar">
      <h1>
        <span>Sanika</span> Desai
      </h1>

      <div className="nav-right">
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun size={15} /> : <BsMoon size={15} />}
        </button>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
