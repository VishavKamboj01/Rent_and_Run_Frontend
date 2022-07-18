import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/Info/Info";
import Form from "./components/Login/Form";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/login" element={<Form type="login" />} />
          <Route path="/register" element={<Form type="register" />} />
          <Route path="/anime" element={<Home type="Anime" />} />
          <Route path="/series" element={<Home type="Series" />} />
          <Route path="/movies" element={<Home type="Movies" />} />

          <Route path="/anime/:id" element={<Info type="Anime" />} />
          <Route path="/series/:id" element={<Info type="Series" />} />
          <Route path="/movies/:id" element={<Info type="Movies" />} />
          <Route path="/all/:id" element={<Info type="all" />} />

          <Route index path="/" element={<Home type="all" />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
