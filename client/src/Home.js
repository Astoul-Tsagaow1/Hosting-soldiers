import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Home extends Component{
    render(){
        return (
            <div className="Home-page">
                <div className="Carousel ">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-20" src="https://media-public.canva.com/MADarVVQnoU/1/thumbnail_large-1.jpg" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-20" src="https://media-public.canva.com/MADarVVQnoU/1/thumbnail_large-1.jpg" alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-20 " src="https://media-public.canva.com/MADarVVQnoU/1/thumbnail_large-1.jpg" alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            
            </div>
        )
    }
    
    componentDidMount(){
        this.props.UserRegister(false);
    }
}