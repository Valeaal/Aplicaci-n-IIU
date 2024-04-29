import React, { useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import Login from "./login";
import { jwtDecode } from "jwt-decode";
import * as usuarioService from '../../services/usuarioService'; 
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

    //si no hay token aparece registro completo
    if (!tokenString) {
        const handleRegister = async (e) => {
            e.preventDefault();
    
            // Expresión regular para verificar el formato del correo electrónico
            const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    
            if (!emailRegex.test(email)) {
                setError("Formato de correo incorrecto");
                return;
            }
            if(email !== repeatEmail){
                setError("Los correos no coinciden");
                return;
            }
            if(password !== repeatPassword){    
                setError("Las contraseñaas no coinciden");
                return;
            }
            if(childDOB>Date.now()){
                setError("La fecha de nacimiento no puede ser posterior al dia de hoy");   
                return;
            }
            if(childDOB<new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 3)){
                setError("La fecha de nacimiento no puede ser anterior a 3 anhos");
                return;
            }

            try {
                const res = await usuarioService.RegisterUser({ parentName, childName, childDOB, email, password});
                if(res.data === "Peticion enviada"){
                    Swal.fire({
                        title: "Peticion enviada",
                        text: "Se ha enviado la petición, espere a la confirmación",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                })
                navigate("/");
            }

            } catch (error) {
                setError(error.response.data.error);
            }
    
        };
        
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: "column"}}>
                <div className="card" style={{ width: "18rem", textAlign:"center", height:'33rem'}}>
                    <h1>Registro</h1>
                    
                    <form onSubmit={handleRegister}>
                        <div style={{ marginBottom: "20px" }}>
                            <input
                                type="text"
                                value={parentName}
                                onChange={(e) => setParentName(e.target.value)}
                                placeholder="Nombre del tutor"
                                required
                            />
                        </div>
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
                        <div style={{ marginBottom: "20px" }}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                                required
                            />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <input
                                type="email"
                                value={repeatEmail}
                                onChange={(e) => setRepeatEmail(e.target.value)}
                                placeholder="Repetir email"
                                required
                            />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <input
                                type="password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                placeholder="Repetir Contraseña"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                        {error && <p style={{marginTop:"10px"}} className="alert alert-danger">{error}</p>}
                    </form>
                </div>
                <a href="/login" style={{textDecoration:"none"}}>¿Ya tienes cuenta? ¡Inicia Sesión aquí!</a>
            </div>
        );
        
    } else {

        //si no es tipo padre no puede acceder 
        const decodedToken = jwtDecode(tokenString);
        if (decodedToken.userType !== 3) {
            return <Navigate to="/home" replace />;
        }
        const handleRegister = async (e) => {
            e.preventDefault();
    
            // Expresión regular para verificar el formato del correo electrónico
            const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    
            if (!emailRegex.test(email)) {
                setError("Formato de correo incorrecto");
                return;
            }
    
        };

        // Si es padre, mostrar el contenido de registro nuevo hijo
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: "column"}}>
                <div className="card" style={{ width: "18rem", textAlign:"center", height:'15rem'}}>
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
                    </form>
                </div>
            </div>
        );
    }
}


