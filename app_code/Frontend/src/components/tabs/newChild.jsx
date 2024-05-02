import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import * as usuarioService from '../../services/usuarioService';

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

    const childDateOfBirth = new Date(childDOB);

    const handleRegister = async (e) => {
        e.preventDefault();

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
            setError("Las contraseñas no coinciden");
            return;
        }
        if(childDateOfBirth > Date.now()){
            setError("La fecha de nacimiento no puede ser posterior al día de hoy");   
            return;
        }
        if(childDateOfBirth < new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 3)){
            setError("La fecha de nacimiento no puede ser anterior a 3 años");
            return;
        }

        try {
            const res = await usuarioService.RegisterUser({ parentName, childName, childDOB, email, password});
            if(res.data === "Peticion enviada"){
                Swal.fire({
                    title: res.data,
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
}
