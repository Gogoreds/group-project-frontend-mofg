import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import Education from "./views/Education.js";
import Apply from "./views/Apply";
import Staff from "./views/Staff";
import Administration from "./views/Administration";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/education" element={<Education />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/administration" element={<Administration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);