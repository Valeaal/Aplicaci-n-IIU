import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from './a.jpg';
import foto1 from '../../images/img1.jpg';
import foto2 from '../../images/img2.jpg';
import foto3 from '../../images/img3.jpg';
import foto4 from '../../images/img4.jpg';
import foto5 from '../../images/img5.jpg';
import foto6 from '../../images/img6.jpg';
import foto7 from '../../images/img7.jpg';
import foto8 from '../../images/img8.jpg';
import foto9 from '../../images/img9.jpg';
import foto10 from '../../images/img10.jpg';
import foto11 from '../../images/img11.jpg';
import foto12 from '../../images/img12.jpg';
import foto13 from '../../images/img13.jpg';
import foto14 from '../../images/img14.jpg';
import foto15 from '../../images/img15.jpg';
import foto16 from '../../images/img16.jpg';
import foto17 from '../../images/img17.jpg';
import foto18 from '../../images/img18.jpg';
import foto19 from '../../images/img19.jpg';
import foto20 from '../../images/img20.jpg';
import foto21 from '../../images/img21.jpg';
import foto22 from '../../images/img22.jpg';
import foto23 from '../../images/img23.jpg';


function Carroussel(){
    return (
        <>
            <div className="d-flex justify-content-center">
                <div id="carousel" class="carousel slide" data-bs-ride="carousel" style={{width:"70%"}}>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto1} alt="First slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto2}alt="Second slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto3} alt="Third slide"/>
                        </div>

                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto4} />
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto5}/>
                        </div>

                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
            </div>
        </>
    );
}

export default Carroussel;

/*

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto6} />
                        </div>

                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto7} />
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto8}alt="Second slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto9} alt="Third slide"/>
                        </div>

                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto10} alt="First slide"/>
                        </div>
                        
				        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto11}alt="Second slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto12} alt="Third slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto13} alt="Third slide"/>
                        </div>

                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto14} alt="First slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto15}alt="Second slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto16} alt="Third slide"/>
                        </div>

                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto17} alt="First slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto18}alt="Second slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto19} alt="Third slide"/>
                        </div>
                        
                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto20}alt="Second slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto21} alt="Third slide"/>
                        </div>

                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto22} alt="First slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto23}alt="Second slide"/>
                        </div>
                        

*/