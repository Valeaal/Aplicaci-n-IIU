import React, { useEffect, useState } from "react";
import "../../../styles/News.css";

const News = (props) => {
    const [noticias, setNoticias] = useState([]);
    const {publico} = props;

    useEffect(() => {
        sincronizarNoticias();
    }, []);

    const sincronizarNoticias = async () => {
        try {
            console.log("\n-----------"+publico+"-------------\n")
            let filtro = 0;
            if(publico != "Everyone")
                filtro = 1 ;
            const response = await fetch('http://localhost:3001/noticia/'+filtro);
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
    };

    return (
        <div className="noticias-container" role="region" aria-live="polite" aria-atomic="true">
            <ul className="list-group" aria-label="Noticias de más nueva a más antigua">
                {noticias.map(noticia => (
                    <li tabIndex={0} key={noticia.id} className="mb-2 list-group-item" aria-label="Noticia">
                        <div className="card-body">
                            <h4 role="heading" aria-level="2">{noticia.titulo}</h4>
                            <p className="noticia">{noticia.mensaje}</p>
                            <p className="noticiaFecha mt-auto">{formatDate(noticia.createdAt)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
