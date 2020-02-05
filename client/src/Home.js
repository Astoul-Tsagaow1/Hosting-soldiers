import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import soldier from './images/soldiers-11.jpg'
import soldier2 from './images/soldiers-6.jpg'
import soldier3 from './images/soldiers-20.jpg'
export default class Home extends Component{
    render(){
        return (
            <div className="Home-page">
                <div className="Carousel ">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carusel-images" src={soldier} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carusel-images" src={soldier2} alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carusel-images" src={soldier3} alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            
            </div>
        )
    }
    
    componentDidMount(){
        this.props.UserRegister(false);
        localStorage.clear();
    }
}