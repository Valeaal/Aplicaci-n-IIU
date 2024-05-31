import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Carroussel from "../editAccounts/carroussel";
import Tarjeta from "../editAccounts/explicativeCard";
import { jwtDecode } from "jwt-decode";
import * as usuarioService from "../../services/usuarioService";
import Swal from 'sweetalert2';

export default function EditUser() { 

    const navigate = useNavigate();
    const { id } = useParams(); // Obtener el ID del usuario de los parámetros de la URL
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [tipo, setTipo] = useState('');
    const [curso, setCurso] = useState('');

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate("/login");
        } else {
            const decodedToken = jwtDecode(token);
            if (decodedToken.userType !== 1) {
                navigate("/error");
            }
            fetchUsuario(id);
        }
    }, [id]);

    const fetchUsuario = async (userId) => {
        try {
            const usuarioData = await usuarioService.getUsuarioById(userId);
            setNombre(usuarioData.data.nombre);
            setCorreo(usuarioData.data.email);
            setTipo(usuarioData.data.tipo);
            setCurso(usuarioData.data.curso);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            await usuarioService.updateUsuario(id, { nombre, correo, tipo, curso });
            Swal.fire('Usuario actualizado', '', 'success');
            navigate("/editarCuentas");
        } catch (error) {
            console.error("Error updating user:", error);
            Swal.fire('Error al actualizar el usuario', '', 'error');
        }
    };

    return (
        <div className="home-container">
            <h1 className="text-center">Editar el usuario {nombre}</h1>
            <hr className="borde mt-0 mb-1"></hr>
            <h2>Esta en beta tenganme paciencia</h2>
            <form onSubmit={handleSave}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        className="form-control"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">Tipo:</label>
                    <select
                        id="tipo"
                        className="form-control"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <option value="1">Administrador</option>
                        <option value="2">Personal</option>
                        <option value="3">Padre-Madre</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="curso" className="form-label">Curso:</label>
                    <input
                        type="text"
                        id="curso"
                        className="form-control"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </div>
    );
}
