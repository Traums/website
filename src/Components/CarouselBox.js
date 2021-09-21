import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CarouselItem} from "react-bootstrap";
import sunsetImg from '../assets/Sunset.jpg';
import forestImg from '../assets/Forest.jpg';
import bridgeImg from '../assets/Bridge.jpg';

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem style={{height:'800px'}}>
                    <img
                        className="d-block w-100"
                        src={ sunsetImg }
                        alt="Sunset"
                    />
                    <Carousel.Caption>
                        <h3>Sunset image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{height:'800px'}}>
                    <img
                        className="d-block w-100"
                        src={ forestImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>,
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{height:'800px'}}>
                    <img
                        className="d-block w-100"
                        src={ bridgeImg }
                        alt="Bridge"
                    />
                    <Carousel.Caption>
                        <h3>Bridge image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default CarouselBox;