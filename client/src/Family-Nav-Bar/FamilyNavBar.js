import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function FamilyNavBar(props) {
    return (
        <div className="Navbar">
            <Navbar navbar bg="light"  navbar="true">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Link to="/Home">Home</Link>
                    <Link to="/SignUpSoldiers">History</Link>
                    <Link to="/SignUpFamily">Setting</Link>
                    <Link to="/x">About</Link>
                </Nav>
            </Navbar>

        </div>



    )
}
