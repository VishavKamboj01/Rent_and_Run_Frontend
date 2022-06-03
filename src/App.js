import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import LeftSidebar from "./components/Home/Sidebar/LeftSidebar";
import RightSidebar from "./components/Home/Sidebar/RightSidebar";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <Fragment>
      <Router>
        <LeftSidebar />
        <Navbar />
        <RightSidebar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
