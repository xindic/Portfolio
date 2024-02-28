import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
