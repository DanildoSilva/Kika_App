import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkInBioPage from "./components/LinkInBioPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkInBioPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;