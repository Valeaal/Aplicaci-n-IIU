import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import * as usuarioService from "../../services/usuarioService";
import Swal from 'sweetalert2';

export default function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [tipo, setTipo] = useState('');
    const [curso, setCurso] = useState('');
    const [password, setPassword] = useState('');


    const token = sessionStorage.getItem('token');
    if (!token) {
        navigate("/login");
    } else {
        const decodedToken = jwtDecode(token);
        if (decodedToken.userType !== 1) {
            navigate("/error");
        }
        id = decodedToken.userId;
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate("/login");
        } else {
            const decodedToken = jwtDecode(token);
            console.log("Decoded Token: ", decodedToken);
            if (decodedToken.userType !== 1) {
                navigate("/error");
            }
            fetchUsuario(id);
        }
    }, [id]);

    const fetchUsuario = async (userId) => {
        try {
            console.log("Fetching user data for ID:", userId);
            const response = await usuarioService.getUsuarioById(userId);
            console.log("API Response: ", response);
            const usuario = response.data;
            if (usuario) {
                console.log("Usuario Data: ", usuario);
                setNombre(usuario.nombre);
                setCorreo(usuario.email);
                setTipo(usuario.tipo);
                setCurso(usuario.curso);
            } else {
                console.error("No user data found for ID:", userId);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleSave = async (event) => {
        event.preventDefault();
        const updatedUser = { nombre, correo, tipo, curso };
        if (password) {
            updatedUser.password = password;
        }
        try {
            await usuarioService.updateUsuario(id, updatedUser);
            Swal.fire('Usuario actualizado', '', 'success');
            navigate("/editarCuentas");
        } catch (error) {
            console.error("Error updating user:", error);
            Swal.fire('Error al actualizar el usuario', '', 'error');
        }
    };

    return (
        <div className="home-container">
            <h1>Editar el usuario {nombre}</h1>
            <hr className="borde mt-0"></hr>
            <div className="container">
                <form onSubmit={handleSave}>
                    <section className="mb-4">
                        <label htmlFor="nombre" className="form-label">
                            <h3 className="mb-0">Nombre:</h3>
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </section>
                    <section className="mb-4">
                        <label htmlFor="correo" className="form-label">
                            <h3 className="mb-0">Correo:</h3>
                        </label>
                        <input
                            type="email"
                            id="correo"
                            className="form-control"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </section>
                    <div className="mb-3">
                        <label htmlFor="tipo" className="form-label">
                            <h3 className="mb-0">Rol:</h3>                           
                        </label>
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
                        <label htmlFor="curso" className="form-label">
                        <h3 className="mb-0">Curso:</h3>
                        <h5 className="mb-0">Si corresponde (si es profesor)</h5>
                        </label>
                        <input
                            type="text"
                            id="curso"
                            className="form-control"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                            <h3 className="mb-0">Nueva contraseña:</h3>
                            <h5 className="mb-0">Este campo es para cambiar la contraseña, si no quiere hacerlo déjelo en blanco</h5>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Guardar Cambios</button>
                </form>
            </div>
        </div>
    );
}
