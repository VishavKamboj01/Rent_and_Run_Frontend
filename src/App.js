import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home type="movies" />} />
        </Routes>
        <Routes>
          <Route index path="/anime" element={<Home type="anime" />} />
        </Routes>
        <Routes>
          <Route index path="/series" element={<Home type="series" />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
