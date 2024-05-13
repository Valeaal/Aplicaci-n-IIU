import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from 'jwt-decode';
import Application from "../home/Application";
import Map from "../home/Map";
import Carroussel from "../home/Carroussel";

export default function Everyone() {
    const navigate = useNavigate();
    const [noticias, setNoticias] = useState([]);
    const [numNoticiasMostradas, setNumNoticiasMostradas] = useState(0);

    useEffect(() => {
        async function fetchNoticias() {
            try {
                // Realizar una solicitud a la base de datos para obtener las noticias
                const response = await fetch('http://localhost:3001/noticia/');
                if (!response.ok) {
                    throw new Error('Error al obtener las noticias');
                }
                const data = await response.json();
                setNoticias(data); // Actualizar el estado con las noticias obtenidas
            } catch (error) {
                console.error('Error:', error);
                // Aquí puedes manejar el error, redirigir a una página de error, etc.
            }
        }

        fetchNoticias();
    }, []);

    const token = sessionStorage.getItem('token'); //Recuperamos el token
    let tipo = 'Everyone';
    if (token){ //Si el token está lo decodificamos y guardamos el tipo de usuario que ha iniciado sesión
        const tokenDecoded = jwt.jwtDecode(token);
        tipo = tokenDecoded.userType;
        console.log(tipo);
    }

    const mostrarSiguienteNoticia = () => {
        if (numNoticiasMostradas < noticias.length) {
            setNumNoticiasMostradas(prevNumNoticiasMostradas => prevNumNoticiasMostradas + 1);
        }
    };

    return(
        <>
            <h1 style={{textAlign:"center"}} className="m-3">Escuela Infantil Virgen Inmaculada</h1>
            <div className='d-flex flex-wrap'>

                <div className='d-flex flex-column' style={{width:'70%'}}>
                   <Carroussel/>
                    <div className='d-flex flex-wrap m-2'>
                        <section style={{width:"60%"}} className='d-flex justify-content-center'>
                            <Map/>
                        </section>
                        
                        <section style={{width:"40%"}}>
                            <Application/>
                        </section>
                        
                    </div>
                </div>

                <div style={{width:'30%'}}>
                    <h2>Noticias:</h2>
                    <ul>
                        {noticias.slice(0, numNoticiasMostradas).map(noticia => (
                            <li key={noticia.id}>
                                <h3>{noticia.titulo}</h3>
                                <p>{noticia.mensaje}</p>
                            </li>
                        ))}
                    </ul>
                    {numNoticiasMostradas < noticias.length && (
                        <button onClick={mostrarSiguienteNoticia}>Mostrar Noticia</button>
                    )}
                </div>
            </div>
        </>
    );
}
