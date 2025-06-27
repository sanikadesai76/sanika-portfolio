import About from "./Componants/Navbar/About";
import Experience from "./Componants/Navbar/Experience";
import Home from "./Componants/Navbar/Home";
import Nav from "./Componants/Navbar/Nav";
import { Element } from "react-scroll";
import Project from "./Componants/Navbar/Project";

function App() {
  return (
    <>
      <Nav />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="education">
        <Experience />
      </Element>

      <Element name="projects">
        <Project />
      </Element>
    </>
  );
}

export default App;
