import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from 'jwt-decode';
import Application from "../home/Application";
import Map from "../home/Map";
import Carroussel from "../home/Carroussel";
import News from "../home/News.jsx";

const Everyone = () => {
    const navigate = useNavigate();

    const token = sessionStorage.getItem('token');
    let tipo = 'Everyone';
    if (token){
        const tokenDecoded = jwt.jwtDecode(token);
        tipo = tokenDecoded.userType;
    }

    return (
        <div className="home-container">
            <h1 className="text-center">Escuela Infantil Virgen Inmaculada</h1>
            <hr className="borde mt-0"></hr>
            <div className='row mx-2 flex-grow-1'>
                {/* Primera fila de elementos */}
                <div className='col-lg-8'>
                    <h2>Nuestro centro:</h2>
                    <div className='d-flex flex-column main-content mb-5'>
                        <Carroussel />
                    </div>
                </div>
                <div className='col-lg-4 d-flex flex-column'>
                    <div className='noticias-section' tabIndex={0}>
                        <h2>Últimas noticias:</h2>
                        <div className='d-flex flex-column mb-5'>
                            <News publico={tipo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mx-2 mt-2'>
                {/* Segunda fila de elementos */}
                <div className='col-lg-8'>
                    <h2>Encuéntranos:</h2>
                    <section className='map-section mb-5'>
                        <Map />
                    </section>
                </div>
                <div className='col-lg-4'>
                    <h2>Escríbanos:</h2>
                    <section className='application-section'>
                        <Application />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Everyone;
