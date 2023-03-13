import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Rationale from "./components/Rationale";
import { Routes, route, Route } from "react-router-dom";
import RationaleTailwind from "./components/RationaleTailwind";
import RationaleComGal from "./components/RationaleComGal";
import RationaleGridLayout from "./components/RationaleGridLayout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/rationale' element={<Rationale />} />
          <Route path='/rationaleTailwind' element={<RationaleTailwind />} />
          <Route path='/rationaleComGal' element={<RationaleComGal />} />
          <Route path='/rationaleGridLayout' element={<RationaleGridLayout />} />


          {/* <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />        */}
      </Routes>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
