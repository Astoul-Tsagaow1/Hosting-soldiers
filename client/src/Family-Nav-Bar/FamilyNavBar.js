import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Familynavbar.css'


export default function NavBarAfterRegistration(props) {
    return (
        <div className="Navbar NavBarAfterRegistration" >
            <Navbar navbar bg="light"  navbar="true">
                <Nav className="mr-auto">
                <Link to="/"><img src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"/></Link>
                    <Link to="/">Home</Link>
                    <Link to="/">History</Link>
                    <Link to="/">Setting</Link>
                    <Link to="/">About</Link>
                </Nav>
            </Navbar>

        </div>



    )
}
