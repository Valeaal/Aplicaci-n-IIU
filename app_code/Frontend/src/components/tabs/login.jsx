import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import * as usuarioService from '../../services/usuarioService';    //Para hacer la solicitud al Backend en un archivo aparte
import * as jwt from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña

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
                    console.log("Token decodificado guardado", decodedToken)
                    console.log("Por ejemplo, el userType: ", decodedToken.userType)
                    navigate("/"); // Redirigir a la página principal
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

    const navigate = useNavigate();

    return (
        <div className="container mt-5 ">
            <div className="row justify-content-center">
                <div className="col-8 col-lg-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h1 tabIndex={1} className="card-title text-center mb-4" aria-label="Iniciar Sesión" style={{ color: "#ffa600", fontFamily: "PT Sans, Helvetica ,Verdana, sans-serif" }}>Iniciar Sesión</h1>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label tabIndex={2} className="mb-1" aria-label="Etiqueta de correo electrónico">Correo electrónico</label>
                                    <input tabIndex={3}
                                        type="text"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setUsername(e.target.value)}
                                        aria-label="Campo de correo electrónico"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label tabIndex={4} className="mb-1" aria-label="Etiqueta de contraseña">Contraseña</label>
                                    <div className="input-group">
                                        <input tabIndex={5}
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            aria-label="Campo de contraseña"
                                            required
                                        />
                                        <button tabIndex={6}
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowPassword(!showPassword)}
                                            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                        >
                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                        </button>
                                    </div>
                                </div>
                                <button tabIndex={7} type="submit" className="btn btn-success btn-block" aria-label="Botón para iniciar sesión">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a tabIndex={8} href="/newChild" className="textoEnlace" aria-label="Enlace para registrarse">¿No tienes cuenta? ¡Regístrate <span className="textoEnlaceSubrayado">aquí</span>!</a>
                {error && <p className="alert alert-danger mt-3" aria-live="assertive" aria-label="Mensaje de error">{error}</p>}
            </div>

        </div>
    );
}

export default Login;
