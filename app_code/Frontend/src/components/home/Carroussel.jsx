import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto5 from '../../images/img5.jpg';
import foto6 from '../../images/img6.jpg';
import foto11 from '../../images/img11.jpg';
import foto16 from '../../images/img16.jpg';
import foto22 from '../../images/img22.jpg';


function Carroussel(){
    return (
        <>
            <div className="d-flex justify-content-center">
                <div id="carousel" class="carousel slide" data-bs-ride="carousel" style={{width:"70%"}}>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto11} alt="First slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto22}alt="Second slide"/>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto16} alt="Third slide"/>
                        </div>

                        <div class="carousel-item active" data-bs-interval="2000">
                            <img class="d-block w-100" src={foto6} />
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