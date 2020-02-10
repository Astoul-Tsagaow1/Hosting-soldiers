import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import soldier from "./images/soldiers-11.jpg";
import soldier2 from "./images/soldiers-6.jpg";
import soldier3 from "./images/soldiers-20.jpg";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="Home-page">
        <div className="Sign-up-form">
          <Link className="main-navBar" to="/SignUpSoldiers">
            SignUp Soldiers
          </Link>
          <Link className="main-navBar" to="/SignUpFamily">
            SignUp Family
          </Link>
          <div className="Wrapper-Sign-up-form-content"></div>
        </div>

        <div className="Carousel divWarp">
          <Carousel>
            <Carousel.Item>
              <img className="carusel-images" src={soldier} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carusel-images"
                src={soldier2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carusel-images"
                src={soldier3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <div className = "footer">
                    <Footer/>
                </div> */}
      </div>
    );
  }

  componentDidMount() {
    this.props.UserRegister(false);
    localStorage.clear();
  }
}
