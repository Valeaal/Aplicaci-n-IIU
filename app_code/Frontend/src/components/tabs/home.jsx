import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from 'jwt-decode';
import Application from "../home/Application";
import Map from "../home/Map";
import Carroussel from "../home/Carroussel";
import '../../styles/global.css';

const Everyone = () => {
    const navigate = useNavigate();
    const [noticias, setNoticias] = useState([]);
    const [numNoticiasMostradas, setNumNoticiasMostradas] = useState(0);

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

    const mostrarSiguienteNoticia = () => {
        if (numNoticiasMostradas < noticias.length) {
            setNumNoticiasMostradas(prevNumNoticiasMostradas => prevNumNoticiasMostradas + 1);
        }
    };

    return (
        <div className="home-container">
            <h1 className="text-center">Escuela Infantil Virgen Inmaculada</h1>
            <hr className="borde mt-0"></hr>
            <div className='row mx-2'>
                {/* Primera fila de elementos */}
                <div className='col-lg-8'>
                    <div className='d-flex flex-column main-content'>
                        <Carroussel />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='noticias-section'>
                        <h2>Últimas noticias:</h2>
                        <ul className="list-group">
                            {noticias.slice(0, numNoticiasMostradas).map(noticia => (
                                <li key={noticia.id} className="list-group-item">
                                    <h3>{noticia.titulo}</h3>
                                    <p>{noticia.mensaje}</p>
                                    {noticia.createdAt}
                                </li>
                            ))}
                        </ul>
                        {numNoticiasMostradas < noticias.length && (
                            <button className="btn btn-primary mt-3" onClick={mostrarSiguienteNoticia}>Mostrar Noticia</button>
                        )}
                    </div>
                </div>
            </div>
            <div className='row mx-2 mt-5'>
                {/* Segunda fila de elementos */}
                <div className='col-lg-8'>
                    <h2>Encuéntranos:</h2>
                    <section className='map-section'>
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
