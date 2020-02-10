import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Familynavbar.css";

export default function FamilyNavBar(props) {
  return (
    <div className="Navbar NavBarAfterRegistration">
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
            <Link
              className="family-nav-bar"
              onClick={() => localStorage.clear()}
              to="/"
            >
              Logout
            </Link>
            <Link className="family-nav-bar" to="/HistoryFamily">
              History
            </Link>
            <Link className="family-nav-bar" to="/">
              Setting
            </Link>
            <Link className="family-nav-bar" to="/">
              About Family
            </Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
      ;
    </div>
  );
}
