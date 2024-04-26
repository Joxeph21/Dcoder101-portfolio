import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useEffect } from "react";
//Aos animation library
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="App">
    <Navbar />
    <Intro />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
