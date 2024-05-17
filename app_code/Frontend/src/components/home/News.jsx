import React, { useEffect, useState } from "react";
import "../../styles/News.css";

const News = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        sincronizarNoticias();
    }, []);

    const sincronizarNoticias = async () => {
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
    };

    return (
        <div className="noticias-container">
            <ul className="list-group">
                {noticias.map(noticia => (
                    <li key={noticia.id} className="mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h4>{noticia.titulo}</h4>
                                <p className="noticia">{noticia.mensaje}</p>
                                <p className="noticiaFecha mt-auto">{noticia.createdAt}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
