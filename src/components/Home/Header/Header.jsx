import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Header() {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
    </Fragment>
  );
}
