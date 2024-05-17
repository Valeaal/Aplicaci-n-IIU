import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto2 from '../../images/img4.jpg';
import foto1 from '../../images/img5.jpg';
import foto3 from '../../images/img17.jpg';



const Carroussel = () => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img className="d-block w-100" src={foto2} alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto1} alt="Second slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto3} alt="Third slide" />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default Carroussel;
