// import Weather from './pages/weather';
import "./App.css";
import Calculator from "./pages/Calculator";
import StickyNotes from "./pages/sticky-notes";
import Weather from "./pages/weather";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/sticky-notes" element={<StickyNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
