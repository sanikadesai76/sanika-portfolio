import About from "./Componants/Navbar/About";
import Home from "./Componants/Navbar/Home";
import Nav from "./Componants/Navbar/Nav";
import { Element } from "react-scroll";

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
    </>
  );
}

export default App;
