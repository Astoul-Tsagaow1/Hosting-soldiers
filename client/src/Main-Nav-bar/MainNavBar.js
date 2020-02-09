import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav-bar.css";

export default function MainNavBar() {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="main-navBar" to="/">
              Home
            </Link>
            <Link className="main-navBar" to="/SignUpSoldiers">
              SignUp Soldiers
            </Link>
            <Link className="main-navBar" to="/SignUpFamily">
              SignUp Family
            </Link>
            <Link className="main-navBar" to="/Login">
              Login
            </Link>
            <Link className="main-navBar" to="/About">
              About
            </Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
