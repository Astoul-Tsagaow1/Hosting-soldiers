import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Familynavbar.css'


export default function FamilyNavBar(props) {
    return (
        <div className="Navbar NavBarAfterRegistration" >
            <Navbar className="Family-nav-bar" navbar bg="dark"  navbar="true">
            <Link to="/"><img src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"/></Link>    <div className="x">
                <Nav className="mr-auto">
                    <Link className="family-nav-bar" onClick = {()=>localStorage.clear()} to="/">Logout</Link>
                    <Link className="family-nav-bar" to="/">History</Link>
                    <Link className="family-nav-bar" to="/">Setting</Link>
                    <Link className="family-nav-bar" to="/">About Family</Link>
                </Nav>
                </div>
            </Navbar>

        </div>



    )
}
