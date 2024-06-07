import React, { useState } from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto2 from '../../../images/img4.jpg';
import foto1 from '../../../images/img5.jpg';
import foto3 from '../../../images/img17.jpg';

const Carroussel = () => {
    const [paused, setPaused] = useState(false);

    const handlePauseToggle = () => {
        setPaused(!paused);
    };

    return (
        <div className="d-flex flex-column justify-content-center">
            <Carousel interval={paused ? null : 5000} pause={paused ? 'hover' : false}>
                <Carousel.Item>
                    <img className="d-block w-100" src={foto1} alt="Cartel de dirección" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Cartel de dirección</span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={foto2} alt="Plantas de dirección" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Plantas de dirección</span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={foto3} alt="Exterior de dirección" style={{ objectFit: 'cover', objectPosition: 'center', height: '40vh' }} />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Exterior de dirección</span>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Button onClick={handlePauseToggle} tabIndex={0} className="mt-3 btn-success">
                {paused ? 'Reiniciar el pase de fotografías' : 'Pausar el pase de fotografías'}
            </Button>
        </div>
    );
}

export default Carroussel;
