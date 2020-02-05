import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './nav-bar.css'
import Footer from '../Footer/Footer'



export default function MainNavBar() {

  HendelColor = ()=>{



    
  }
    return (

        <div className="Navbar">
               <Navbar navbar bg="dark" p="0" navbar="true">
            <Link to="/"><img src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
              <Link className="main-navBar" to="/">Home</Link>
              <Link  className="main-navBar" to="/SignUpSoldiers">SignUp Soldiers</Link>
              <Link  className="main-navBar" onClick={HendelColor} to="/SignUpFamily">SignUp Family</Link>
              <Link  className="main-navBar" to="/Login">Login</Link>
              <Link  className="main-navBar" to="/x">About</Link>
            </Nav>
          </Navbar>
          <Footer/>
            
        </div>
    )
}
