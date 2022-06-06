import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/Info";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/anime" element={<Home type="anime" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/movies" element={<Home type="movies" />} />

          <Route path="/anime/:id" element={<Info type="anime" />} />
          <Route path="/series/:id" element={<Info type="series" />} />
          <Route path="/movies/:id" element={<Info type="movies" />} />
          <Route path="/all/:id" element={<Info type="all" />} />

          <Route index path="/" element={<Home type="all" />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
