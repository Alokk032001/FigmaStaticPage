import React from "react";
//import  from "./Logo/logo";
// import { ReactComponent as Icon } from "../../assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import { ReactComponent as Icon } from "../../assets/logo.svg";
import TopNavbar from "./TopNavbar";
const MainNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect top="fixed" expand="sm">
        {/* id="responsive-navbar-nav" */}
        {/* aria-controls="responsive nvbar-nav" */}
        <Navbar.Toggle className="ham" />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link className="active" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="nav-ele" href="#">
              My Projects
            </Nav.Link>
            <Nav.Link className="nav-ele" href="#">
              Payments
            </Nav.Link>
            <Nav.Link className="nav-ele" href="#">
              Activity
            </Nav.Link>
            <Nav.Link className="nav-ele" href="#">
              Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNavbar;
