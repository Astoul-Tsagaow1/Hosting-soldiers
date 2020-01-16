import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function FamilyNavBar() {
    return (

        <div className="Navbar">
            <Navbar navbar bg="light" fixed="top" navbar="true">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Link href="/Home">Home</Link>
                    <Link href="/SignUpSoldiers">History</Link>
                    <Link href="/SignUpFamily">Setting</Link>
                    <Link href="/x">About</Link>
                </Nav>
            </Navbar>

        </div>



    )
}
