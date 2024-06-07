import React, { useState } from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../../../images/img1.jpg';
import foto2 from '../../../images/img2.jpg';
import foto6 from '../../../images/img6.jpg';
import foto7 from '../../../images/img7.jpg';
import foto8 from '../../../images/img8.jpg';
import foto9 from '../../../images/img9.jpg';
import foto10 from '../../../images/img10.jpg';
import foto11 from '../../../images/img11.jpg';
import foto12 from '../../../images/img12.jpg';
import foto13 from '../../../images/img13.jpg';
import foto14 from '../../../images/img14.jpg';
import foto15 from '../../../images/img15.jpg';
import foto16 from '../../../images/img16.jpg';
import foto20 from '../../../images/img20.jpg';
import foto21 from '../../../images/img21.jpg';
import foto22 from '../../../images/img22.jpg';
import foto23 from '../../../images/img23.jpg';

const Carroussel = () => {
    const [paused, setPaused] = useState(false);

    const handlePauseToggle = () => {
        setPaused(!paused);
    };

    return (
        <div className="d-flex flex-column justify-content-center">
            <Carousel interval={paused ? null : 2000} pause={paused ? 'hover' : false}>
                <Carousel.Item>
                    <img tabIndex={0} className="d-block w-100" src={foto1} alt="El centro" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">El centro</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img tabIndex={0} className="d-block w-100" src={foto22} alt="Vista del césped y la galería de juegos" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Vista del césped y la galería de juegos</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img tabIndex={0} className="d-block w-100" src={foto6} alt="Puesta de sol en el césped" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Puesta de sol en el césped</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img tabIndex={0} className="d-block w-100" src={foto7} alt="Cielo con gaviotas visto desde la galería de juegos" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Cielo con gaviotas visto desde la galería de juegos</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img tabIndex={0} className="d-block w-100" src={foto20} alt="Zona de juegos exterior con Gibraltar de fondo" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Zona de juegos exterior con Gibraltar de fondo</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto21} alt="Puesta de sol desde el tobogán de niños" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Puesta de sol desde el tobogán de niños</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto10} alt="Recepción" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Recepción</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto8} alt="Clase diáfana" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Clase diáfana</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto16} alt="Juguetes en la mesa" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Juguetes en la mesa</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto15} alt="Juguetes en la estantería" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Juguetes en la estantería</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto9} alt="Clase con mesas 1" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Clase con mesas 1</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto11} alt="Clase con mesas 2" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Clase con mesas 2</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto12} alt="Clase con mesas 3" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Clase con mesas 3</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto13} alt="Clase cunas" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Clase cunas</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto23} alt="Anochecer visto desde la galería de juegos" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Anochecer visto desde la galería de juegos</span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={foto14} alt="Clase cunas a oscuras" />
                    <div aria-live="polite" className="carousel-caption">
                        <span className="bg-white text-success fw-bold p-1 rounded">Clase cunas a oscuras</span>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Button onClick={handlePauseToggle} tabIndex={0}  className="mt-3 btn-success">
                {paused ? 'Reiniciar el pase de fotografías' : 'Pausar el pase de fotografías'}
            </Button>
        </div>
    );
}

export default Carroussel;

