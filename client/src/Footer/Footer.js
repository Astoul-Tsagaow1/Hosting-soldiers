import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="Inner-footer">
      <div className="Footer-items">
         <h4 className="Titel-footer">Hosting soldiers</h4>
         <p>We believe in connections</p>
         
      </div> 
      <div className="Footer-items">
       
         <h4 className="Titel-footer">Stay in touch</h4>
        <p> our Email : soldierhostingwebsite@gmail.com </p>
      </div> 
      <div className="Footer-items">
        <h4 className="Titel-footer">Links</h4>
         
      </div> 
      <div className="Footer-items">
        <h4 className="Titel-footer">Quick Links</h4>
         <ul className="Footer-ul">
           <Link to="/About"><li> About us</li></Link>
        
         </ul>
      </div> 
      <div className="Footer-Bottom">
        &copy; Hosting soldiers | bild by astoul and shay
      </div>
      </div>
    </footer>
  )
}
