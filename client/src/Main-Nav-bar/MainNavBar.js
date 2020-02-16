import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav-bar.css";

export default function MainNavBar() {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img
              src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="main-navBar" to="/">
              Home
            </Link>
    

            <Link className="main-navBar" to="/About">
              About Use 
            </Link>
          </Nav>
          <Nav style={{color:"#fff"}}> Hosting soldiers</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
