import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../../images/img1.jpg';
import foto5 from '../../images/img5.jpg';
import foto6 from '../../images/img6.jpg';
import foto7 from '../../images/img7.jpg';
import foto8 from '../../images/img8.jpg';
import foto10 from '../../images/img10.jpg';
import foto11 from '../../images/img11.jpg';
import foto16 from '../../images/img16.jpg';
import foto22 from '../../images/img22.jpg';

const Carroussel = () => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img className="d-block w-100" src={foto1} alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto11} alt="Second slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto22} alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto16} alt="Fourth slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto6} alt="Fifth slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto5} alt="Sixth slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto7} alt="Seventh slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto8} alt="Eight slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={foto10} alt="Tenth slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carroussel;
