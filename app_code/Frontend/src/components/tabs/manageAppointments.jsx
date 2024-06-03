import React, { useEffect, useState } from "react";
import { getAllCitas } from "../../services/citaService";
import { getAllUsuarios } from "../../services/usuarioService";
import { getNombrebyId } from "../../services/usuarioService";
import "../../styles/manageAppointment.css";


export default function ManageAppointment() {
    const [citas, setCitas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const citasData = await getAllCitas();
                setCitas(citasData);
            } catch (error) {
                console.error("Error fetching citas:", error);
            }
        };

        const fetchUsuarios = async () => {
            try {
                const usuariosData = await getAllUsuarios();
                setUsuarios(usuariosData);
            } catch (error) {
                console.error("Error fetching usuarios:", error);
            }
        };

        fetchCitas();
        fetchUsuarios();
    }, []);

    const getUserNameById = (userId) => {
        const usuario = usuarios.find(user => user.id === userId);
        return usuario ? usuario.nombre : "Usuario no encontrado";
    };

    const formatDateToWords = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };    

    return (
        <div className="home-container">
            <h1>Gestionar Citas</h1>
            <hr className="borde mt-0"></hr>
            <div className="container citas-list">
            {citas.map((cita, index) => (
                    <div key={index} className="cita-block">
                        <h2>Nombre: {getUserNameById(cita.idUsuario)}</h2>
                        <p><strong>Mensaje:</strong> {cita.mensaje}</p>
                        <p><strong>Fecha:</strong> {formatDateToWords(cita.fecha)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

