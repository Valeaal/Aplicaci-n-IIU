import React, { useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import Login from "./login";
import { jwtDecode } from "jwt-decode";
import * as usuarioService from '../../services/usuarioService';
import * as alumnoService from '../../services/alumnoService';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


//Esta página es privada y solo se mostrará si el usuario ha iniciado sesión
//Cuando llamemos a esta pagina el navegador va a buscar a ver si tiene el token guardado en el estado
//Una vez resulva el tema del token volverá a la página


export default function NewChild() {
    const navigate = useNavigate();

    const [parentName, setParentName] = useState("");
    const [childName, setChildName] = useState("");
    const [childDOB, setChildDOB] = useState("");
    const [email, setEmail] = useState("");
    const [repeatEmail, setRepeatEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");

    // Obtener el token de sessionStorage
    const tokenString = sessionStorage.getItem('token');
    const childDateOfBirth = new Date(childDOB);
    //si no hay token aparece registro completo
    const handleRegister = async (e) => {
        e.preventDefault();
        
        
        if (childDateOfBirth > Date.now()) {
            setError("La fecha de nacimiento no puede ser posterior al dia de hoy");
            return;
        }
        if (childDateOfBirth < new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 3)) {
            setError("La fecha de nacimiento no puede ser anterior a 3 años");
            return;
        }
        if(!tokenString){
        // Expresión regular para verificar el formato del correo electrónico
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            setError("Formato de correo incorrecto");
            return;
        }
        if (email !== repeatEmail) {
            setError("Los correos no coinciden");
            return;
        }
        if (password !== repeatPassword) {
            setError("Las contraseñaas no coinciden");
            return;
        }
    }
        try {
            let res = null;
            Swal.fire({
                title: "¿Estás seguro de enviar la petición?",
                text: "No podrá cancelarla después",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, enviar"
              }).then(async (result) => {
                if (result.isConfirmed) {
                    if(!tokenString){
                        res = await usuarioService.RegisterUser({ parentName, childName, childDOB, email, password });
                   }else{
                       const decodedToken = jwtDecode(tokenString);
                       const userId = decodedToken.userId;
                       res = await alumnoService.RegisterChild({ childName, childDOB, userId });
                   }
                  Swal.fire({
                    title: "¡Registro solicitado!",
                    text: "Su solicitud será procesada",
                    icon: "success"
                  });
                  navigate("/");
                }
              });

        } catch (error) {
            setError(error.response.data.error);
        }

    };
   
    if (!tokenString) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title text-center">Registro</h1>
                                <form onSubmit={handleRegister}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="parentName">Nombre del tutor:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={parentName}
                                            onChange={(e) => setParentName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="childName">Nombre del alumno:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={childName}
                                            onChange={(e) => setChildName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="childDOB">Fecha de Nacimiento del alumno:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={childDOB}
                                            onChange={(e) => setChildDOB(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="repeatEmail">Repetir Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={repeatEmail}
                                            onChange={(e) => setRepeatEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Contraseña:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="repeatPassword">Repetir Contraseña:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={repeatPassword}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-3">Registrarse</button>
                                    {error && <p className="alert alert-danger">{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {

        //si no es tipo padre no puede acceder 
        const decodedToken = jwtDecode(tokenString);
        if (decodedToken.userType !== 3) {
            return <Navigate to="/home" replace />;
        }
        // Si es padre, mostrar el contenido de registro nuevo hijo
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: "column" }}>
                <div className="card" style={{ width: "18rem", textAlign: "center", height: '15rem' }}>
                    <h1>Registro</h1>

                    <form onSubmit={handleRegister}>
                        <div style={{ marginBottom: "20px" }}>
                            <input
                                type="text"
                                value={childName}
                                onChange={(e) => setChildName(e.target.value)}
                                placeholder="Nombre del alumno"
                                required
                            />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <input
                                type="date"
                                value={childDOB}
                                onChange={(e) => setChildDOB(e.target.value)}
                                placeholder="Fecha de Nacimiento del alumno"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                        {error && <p style={{ marginTop: "10px" }} className="alert alert-danger">{error}</p>}
                    </form>
                </div>
            </div>
        );
    }
}


