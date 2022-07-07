import React from "react";
import { ReactComponent as Icon } from "../../assets/logo.svg";
import { ReactComponent as NotBell } from "../../assets/notbar.svg";
import { ReactComponent as Dropdown } from "../../assets/dropdown.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import "./Navbar.css";
const TopNavbar = () => {
  return (
    <>
      <div className="top-nav d-flex justify-content-between align-items-center w-100">
        <div className="top-nav-left">
          <Icon className="company-logo" />
          <span className="dash">Dash</span>
          <span className="element">Element</span>
        </div>
        <div className="top-nav-right">
          <div className="bell-logo">
            {" "}
            <NotBell />
            <sup className="num-three">3</sup>
          </div>
          <div className="alex">Alex Doe</div>
          <div className="drop-down">
            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
