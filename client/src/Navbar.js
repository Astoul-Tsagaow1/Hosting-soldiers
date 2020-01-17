import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function NavBarBeforeRegistration() {
    return (
        <div className="Navbar">
               <Navbar navbar bg="light" p="0" fixed="top" navbar="true">
            <Navbar.Brand href="#home"><img src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
              <Link  to="/">Home</Link>
              <Link to="/SignUpSoldiers">SignUp Soldiers</Link>
              <Link to="/SignUpFamily">SignUp Family</Link>
              <Link to="/x">Login</Link>
              <Link to="/x">About</Link>
            </Nav>
          </Navbar>
            
        </div>
    )
}
