import React, { Component } from "react";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import soldier from "./images/soldiers-11.jpg";
import IconeFamily from "./images/icons8-full-family-90.png";
import IconeSoldiers from "./images/icons8-soldier-90.png";
// 216340
import { Link } from "react-router-dom";
import IconeConctions from './images/icons8-safety-collection-place-100.png'
import IconeLonesoldiers from './images/icons8-soldier-50.png'
export default class Home extends Component {
  render() {
    return (
      <div className="Home-page">
        <div className="Sign-up-form">
          {" "}
          <div className="Soldiers-Home-page">
            {" "}
            <img src={IconeSoldiers} height="55px" />
            <Link to="/SignUpSoldiers">
              <button className="btn btn SignUpSoldiersButoonHomePage btn-dark">
                {" "}
                SignUp Soldiers
              </button>
            </Link>
          </div>
          <div className="Family-Home-page">
             <img src={IconeFamily}/>
             <Link to="/SignUpFamily">
            <button className="btn btn  SignUpFamilyButoonHomePage btn-dark">
              SignUp Family
            </button>
          </Link>
          </div>
         <div className="Login-Home-Page">    <Link className="main-navBar" to="/Login">
            <button className="btn btn LoginButton submitbutoon ">Login</button>
          </Link></div>
      
          <div className="Wrapper-Sign-up-form-content"></div>
        </div>
        <div className="Titel-Home-Page">
          <div class="page-header">
            <i> <h1>'You'll Never Walk Alone'</h1></i>
          </div>
       
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.UserRegister(false);
    localStorage.clear();
  }
}
