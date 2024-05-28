import React, { useEffect, useState } from "react";
import "../../styles/news.css";

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

    const formatDate = (dateString) => {
 
        const date = new Date(dateString);
    
        const day = date.getDate();
        const month = date.getMonth() + 1; // Los meses van de 0 a 11, por lo que agregamos 1
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
    
        const formattedDay = String(day).padStart(2, '0');
        const formattedMonth = String(month).padStart(2, '0');
        const formattedYear = String(year).padStart(4, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
    
        return `${formattedDay}/${formattedMonth}/${formattedYear} - ${formattedHours}:${formattedMinutes}`;
    }

    return (
        <div className="noticias-container">
            <ul className="list-group">
                {noticias.map(noticia => (
                    <li key={noticia.id} className="mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h4>{noticia.titulo}</h4>
                                <p className="noticia">{noticia.mensaje}</p>
                                <p className="noticiaFecha mt-auto">{formatDate(noticia.createdAt)}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
