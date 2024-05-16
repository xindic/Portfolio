import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";
import Showcase from "./Pages/Showcase";

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? "/portfolio" : "/portfolio/"}
    >
      <Routes>
        <Route path="/portfolio" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
