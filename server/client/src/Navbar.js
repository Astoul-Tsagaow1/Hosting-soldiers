import React from 'react'
import { Nav, Navbar, NavItem } from "react-bootstrap";


export default function NavbaR() {
    return (
        <div className="Navbar">
               <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
              <Nav.Link  href="/">Home</Nav.Link>
              <Nav.Link href="/SignUpSoldiers">SignUp Soldiers</Nav.Link>
              <Nav.Link href="/SignUpFamily">SignUp Family</Nav.Link>
              <Nav.Link href="/x">Login</Nav.Link>
              <Nav.Link href="/x">About</Nav.Link>
            </Nav>
          </Navbar>
            
        </div>
    )
}
