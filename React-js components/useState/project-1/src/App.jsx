import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import FetchAPI from "./pages/FetchAPI";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {FetchAPI} />
      </Routes>
    </>
  );
};

export default App;
