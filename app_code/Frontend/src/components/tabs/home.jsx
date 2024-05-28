import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from 'jwt-decode';
import Application from "../home/Application";
import Map from "../home/Map";
import Carroussel from "../home/Carroussel";
import News from "../home/News.jsx";

const Everyone = () => {
    const navigate = useNavigate();
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        async function fetchNoticias() {
            try {
                const response = await fetch('http://localhost:3001/noticia/');
                if (!response.ok) {
                    throw new Error('Error al obtener las noticias');
                }
                const data = await response.json();
                // Ordenar las noticias por createdAt
                data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setNoticias(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchNoticias();
    }, []);

    const token = sessionStorage.getItem('token');
    let tipo = 'Everyone';
    if (token){
        const tokenDecoded = jwt.jwtDecode(token);
        tipo = tokenDecoded.userType;
    }

    return (
        <div className="home-container">
            <h1 className="text-center" tabIndex={1}>Escuela Infantil Virgen Inmaculada</h1>
            <hr className="borde mt-0"></hr>
            <div className='row mx-2 flex-grow-1'>
                {/* Primera fila de elementos */}
                <div className='col-lg-8'>
                <h2 tabIndex={2}>Nuestro centro:</h2>
                    <div className='d-flex flex-column main-content mb-5'>
                        <Carroussel />

                    </div>
                </div>
                <div className='col-lg-4 d-flex flex-column'>
                    <div className='noticias-section'>
                        <h2 tabIndex={3}>Últimas noticias:</h2>
                        <div className='d-flex flex-column mb-5'>
                            <News />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mx-2 mt-2'>
                {/* Segunda fila de elementos */}
                <div className='col-lg-8'>
                    <h2 tabIndex={4}>Encuéntranos:</h2>
                    <section className='map-section mb-5'>
                        <Map />
                    </section>
                </div>
                <div className='col-lg-4'>
                    <h2 tabIndex={5}>Escríbanos:</h2>
                    <section className='application-section'>
                        <Application />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Everyone;
