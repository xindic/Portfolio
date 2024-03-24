import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/portfolio/"}>
      <Routes>
        <Route index element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
