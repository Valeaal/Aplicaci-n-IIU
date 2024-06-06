import React, { useState } from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../../images/img2.jpg';
import foto2 from '../../images/img3.jpg';
import foto3 from '../../images/img17.jpg';
import foto4 from '../../images/img19.jpg';
import foto5 from '../../images/img18.jpg';

const Carroussel = () => {
    const [paused, setPaused] = useState(false);

    const handlePauseToggle = () => {
        setPaused(!paused);
    };

    return (
        <div tabIndex="-1" className="d-flex flex-column justify-content-center">
            <Carousel interval={paused ? null : 5000} pause={paused ? 'hover' : false}>
                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto1} alt="Portada de la escuela" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Portada de la escuela</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto2} alt="Interior de dirección" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Interior de dirección</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto3} alt="Exterior de dirección" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Exterior de dirección</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto4} alt="Fuegos de la cocina" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Fuegos de la cocina</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item tabIndex={-1}>
                    <img tabIndex={-1} className="d-block w-100" src={foto5} alt="Plano general de la cocina" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Plano general de la cocina</span>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Button onClick={handlePauseToggle} className="mt-3 btn-success">
                {paused ? 'Reiniciar el pase de fotografías' : 'Pausar el pase de fotografías'}
            </Button>
        </div>
    );
}

export default Carroussel;
