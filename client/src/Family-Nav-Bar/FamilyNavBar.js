import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Familynavbar.css";

export default function FamilyNavBar(props) {
  return (
    <div className="Navbar NavBarAfterRegistration">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >
         <Link to="/"> <img
            src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"
          /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          {/* Home</Link> */}

            <Link
              className="family-nav-bar"
              onClick={() => localStorage.clear()}
              to="/"
            >
              Logout
            </Link>

            <Link 
            className="family-nav-bar"  
            to="/history"
            >
              History
            </Link>

            <Link 
            className="family-nav-bar" 
            to="/EditFamily"
            >
              Edit profile
            </Link>
           
            <Link 
            className="family-nav-bar" 
            to="/About">
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
