import React from "react";
import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
const combine = () => {
  return (
    <div className="combine-navbar w-100">
      <div className="topnavbar">
        <TopNavbar />
      </div>
      <div className="mainnavbar">
        <MainNavbar />
      </div>
    </div>
  );
};

export default combine;
