import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../../images/img2.jpg';
import foto2 from '../../images/img3.jpg';
import foto3 from '../../images/img17.jpg';
import foto4 from '../../images/img19.jpg';
import foto5 from '../../images/img18.jpg';



const Carroussel = () => {
    return (
        <div tabIndex="-1" className="d-flex flex-column justify-content-center">
            <Carousel interval={5000}>
                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto1} alt="Portada de la escuela" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto2} alt="Interior de dirección" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto3} alt="Exterior de dirección" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto4} alt="Fuegos de la cocina" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto5} alt="Plano general de la cocina" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carroussel;
