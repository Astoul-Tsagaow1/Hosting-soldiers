import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    return (
        <div className="Home-page">
            <div className="Carousel ">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-35" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXh1ynz209cK-baTArlumpyZuihBwGikFd7cUS3yuhs1LtS22qQ(11 kB)
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXh1ynz209cK-baTArlumpyZuihBwGikFd7cUS3yuhs1LtS22qQ
&s" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-35" src="https://image.shutterstock.com/image-photo/mighty-lion-watching-lionesses-who-260nw-149105702.jpg(22 kB)
https://image.shutterstock.com/image-photo/mighty-lion-watching-lionesses-who-260nw-149105702.jpg
" alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-35 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrz8un8BD_dEDlaqprwxt8eltVBB-tRZ89Qs-CVv2hO-_xvTfw(8 kB)
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrz8un8BD_dEDlaqprwxt8eltVBB-tRZ89Qs-CVv2hO-_xvTfw
&s" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        
        </div>
    )
}