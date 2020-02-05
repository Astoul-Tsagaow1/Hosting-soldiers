import React, { Component } from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class SoldierNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar navbar bg="dark"  navbar="true">
                <Nav className="mr-auto">
                <Link to="/"><img src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)https://img.icons8.com/color/48/000000/camo-cream.png" alt ="logo"/></Link>
                    <Link onClick = {()=>localStorage.clear()} to="/">Logout</Link>
                    <Link to="/">History</Link>
                    <Link to="/">Setting</Link>
                    <Link to="/">About soldier</Link>
                </Nav>
            </Navbar>
            </div>
        )
    }
}
