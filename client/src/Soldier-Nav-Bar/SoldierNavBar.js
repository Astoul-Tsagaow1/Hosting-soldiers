import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class SoldierNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar navbar bg="dark" navbar="true">
          <Nav className="mr-auto">
          <Navbar.Brand >
         <Link to="/"> <img
            src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"
          /></Link>
        </Navbar.Brand>
            <Link 
            to="/" 
            className="SoldierNavBar" 
            >Home
            </Link>

            <Link 
            className="SoldierNavBar" 
            onClick={() => localStorage.clear()}
             to="/">
              Logout
            </Link>

            <Link
            className="SoldierNavBar"
              to="/history"
            >
              History
            </Link>

            <Link 
            className="SoldierNavBar" 
            to="/EditSoldier">Edit</Link>

            <Link 
            className="SoldierNavBar"
            to="/About">About soldier</Link>

          </Nav>
        </Navbar>
      </div>
    );
  }
}
