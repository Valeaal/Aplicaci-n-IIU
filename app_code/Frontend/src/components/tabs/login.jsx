import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import * as usuarioService from '../../services/usuarioService';
import * as jwt from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            setError("Formato de correo incorrecto");
            return;
        }

        try {
            const token = await usuarioService.LoginUser({ email, password });

            if (!token || typeof token !== 'string') {
                setError("Error del servidor, no se puede iniciar sesión actualmente");
            } else {
                const decodedToken = jwt.jwtDecode(token);
                const currentTime = Math.floor(Date.now() / 1000);
                if (decodedToken.exp && decodedToken.exp < currentTime) {
                    setError("La sesión ha expirado. Por favor, inicia sesión nuevamente.");
                } else {
                    Swal.fire({
                        title: "Inicio exitoso",
                        text: "Las credenciales son correctas. Has iniciado sesión",
                        icon: "success"
                    });
                    sessionStorage.setItem("token", token);
                    navigate("/"); 
                }
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);

            if (error.response && error.response.data.error === 'Correo no encontrado') {
                setError("El correo electrónico ingresado no existe.");
            } else if (error.response && error.response.data.error === 'Contraseña inválida') {
                setError("La contraseña ingresada es incorrecta.");
            } else {
                setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8 col-lg-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4"style={{ color: "#446C2D", fontFamily: "PT Sans, Helvetica ,Verdana, sans-serif" }}>Iniciar Sesión</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="mb-1">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password" className="mb-1">Contraseña</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                            <span className="sr-only">{showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}</span>
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success btn-block">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a href="/newChild" className="textoEnlace">¿No tienes cuenta? ¡Regístrate aquí!</a>
                {error && <p className="alert alert-danger mt-3">{error}</p>}
            </div>
        </div>
    );
}

export default Login;
