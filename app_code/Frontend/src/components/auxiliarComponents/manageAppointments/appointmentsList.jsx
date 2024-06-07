import React, { useEffect, useState } from "react";
import { getAllCitas } from "../../../services/citaService";
import { getUsuarioById } from "../../../services/usuarioService";

export default function CitasList({ onReload }) {
    const [citas, setCitas] = useState([]);
    const [usuarios, setUsuarios] = useState({});

    useEffect(() => {
        fetchCitas();
    }, [onReload]); // Agrega 'onReload' como dependencia

    const fetchCitas = async () => {
        try {
            const citasData = await getAllCitas();
            setCitas(citasData);
            fetchUsuarios(citasData);
        } catch (error) {
            console.error("Error fetching citas:", error);
        }
    };

    const fetchUsuarios = async (citasData) => {
        try {
            const usuariosData = await Promise.all(
                citasData.map(async (cita) => {
                    const usuario = await getUsuarioById(cita.idUsuario);
                    return { id: cita.idUsuario, nombre: usuario.data.nombre };
                })
            );
            const usuariosMap = usuariosData.reduce((acc, user) => {
                acc[user.id] = user.nombre;
                return acc;
            }, {});
            setUsuarios(usuariosMap);
        } catch (error) {
            console.error("Error fetching usuarios:", error);
        }
    };

    const formatDateToWords = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            <ul className="list-group">
                {citas.map((cita, index) => (
                    <li key={index} className="mb-2 list-group-item" aria-label="Cita">
                        <div className="card-body">
                            <h4 role="heading">Solicitante: {usuarios[cita.idUsuario]}</h4>
                            <p className="mb-2"><strong>Mensaje:</strong> {cita.mensaje}</p>
                            <p className="mb-0"><strong>Fecha:</strong> {formatDateToWords(cita.fecha)}</p>
                        </div>
                    </li>
                ))}
            </ul>   
        </div>
    );
}
