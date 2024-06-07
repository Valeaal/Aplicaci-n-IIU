import React, { useEffect, useState } from "react";
import { getAllCitas } from "../../services/citaService";

export default function CitasList({ onReload }) {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        fetchCitas();
    }, [onReload]); // Agrega 'onReload' como dependencia

    const fetchCitas = async () => {
        try {
            const citasData = await getAllCitas();
            setCitas(citasData);
        } catch (error) {
            console.error("Error fetching citas:", error);
        }
    };

    const getUserNameById = (userId) => {
        // Implementa la lógica para obtener el nombre del usuario según su ID
        return "Nombre de Usuario"; // Reemplaza esto con tu lógica real
    };

    const formatDateToWords = (date) => {
        // Implementa la lógica para formatear la fecha
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            <ul className="list-group">
                {citas.map((cita, index) => (
                    <li key={index} className="mb-2 list-group-item" aria-label="Cita">
                        <div className="card-body">
                            <h4 role="heading">Solicitante: {getUserNameById(cita.idUsuario)}</h4>
                            <p className="mb-2"><strong>Mensaje:</strong> {cita.mensaje}</p>
                            <p className="mb-0"><strong>Fecha:</strong> {formatDateToWords(cita.fecha)}</p>
                        </div>
                    </li>
                ))}
            </ul>   
        </div>
    );
}
