import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class SoldierNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar navbar bg="dark" navbar="true">
          <Nav className="mr-auto">
            <Link to="/">
              <img
                src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)https://img.icons8.com/color/48/000000/camo-cream.png"
                alt="logo"
              />
            </Link>

            <Link to="/" onClick = {()=>{}}>Home</Link>

            <Link onClick={() => localStorage.clear()} to="/">
              Logout
            </Link>

            <Link
              to="/history"
            >
              History
            </Link>

            <Link to="/EditSoldier">Edit</Link>

            <Link 
            to="/About">About soldier</Link>

          </Nav>
        </Navbar>
      </div>
    );
  }
}
