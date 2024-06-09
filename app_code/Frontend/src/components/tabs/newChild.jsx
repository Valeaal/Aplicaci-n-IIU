import React, { useState } from "react";
import { Navigate } from "react-router-dom";
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
        if (!tokenString) {
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
                setError("Las contraseñas no coinciden");
                return;
            }
        }
            Swal.fire({
                title: "¿Estás seguro de enviar la petición?",
                text: "No podrá cancelarla después",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, enviar",
                cancelButtonText: "No, cancelar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        if (!tokenString) {
                            await usuarioService.RegisterUser({ parentName, childName, childDOB, email, password });
                        } else {
                            const decodedToken = jwtDecode(tokenString);
                            const userId = decodedToken.userId;
                            await alumnoService.RegisterChild({ childName, childDOB, userId });
                        }
                        Swal.fire({
                            title: "¡Registro solicitado!",
                            text: "Su solicitud será procesada",
                            icon: "success"
                        });
                        navigate("/");
                    } catch (error) {
                        setError("");
                        Swal.fire({
                            title: "Error",
                            text: error.response.data.error, // Usa error.response.data.error en lugar de error
                            icon: "error"
                        });
                        navigate("/newChild");
                    }
                }
            });
            

    };

    if (!tokenString) {
        return (
            <div className="home-container">
                <h1 tabIndex={0} className="text-center">Añada a su hijo al sistema</h1>
                <hr className="borde mt-0"></hr>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-10">
                        <div className="card"  style={{ backgroundColor: "#f7fff5af" }}>
                            <form onSubmit={handleRegister}>
                                <div className="card-body">
                                    <p tabIndex={0} className="card-body"> ¡Atención! Esta sección está destinada a padres/madres que aún no tienen cuenta en este sistema: <br />
                                        -Los padres/madres que ya estén en el centro con una cuenta en la app, si quieren añadir un nuevo alumno háganlo tras haber iniciado sesión.<br />
                                        -Si usted quiere crearse una cuenta y pertenece al personal laboral, solicite la cuenta directamente a dirección</p>

                                    <div className="row">
                                        {/* Columna para datos del tutor */}
                                        <div className="col-md-6">
                                            <div className="card"  >
                                                <div className="card-body">
                                                    <h5 tabIndex={0} className="card-title">Datos del tutor</h5>

                                                    <div className="form-group mb-3">
                                                        <label tabIndex={0} htmlFor="parentName">Nombre del tutor:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={parentName}
                                                            onChange={(e) => setParentName(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label tabIndex={0} htmlFor="email">Email:</label>
                                                        <input tabIndex={0}
                                                            type="email"
                                                            className="form-control"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label tabIndex={0} htmlFor="repeatEmail">Repetir Email:</label>
                                                        <input tabIndex={0}
                                                            type="email"
                                                            className="form-control"
                                                            value={repeatEmail}
                                                            onChange={(e) => setRepeatEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label tabIndex={0} htmlFor="password">Contraseña:</label>
                                                        <input tabIndex={0}
                                                            type="password"
                                                            className="form-control"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label tabIndex={0} htmlFor="repeatPassword">Repetir Contraseña:</label>
                                                        <input tabIndex={0}
                                                            type="password"
                                                            className="form-control"
                                                            value={repeatPassword}
                                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        {/* Columna para datos del hijo */}
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 tabIndex={0} className="card-title">Datos del alumno</h5>
                                                    <div className="form-group mb-3">
                                                        <label tabIndex={0} htmlFor="childName">Nombre del alumno:</label>
                                                        <input tabIndex={0}
                                                            type="text"
                                                            className="form-control"
                                                            value={childName}
                                                            onChange={(e) => setChildName(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label tabIndex={0} htmlFor="childDOB">Fecha de Nacimiento del alumno:</label>
                                                        <input tabIndex={0}
                                                            type="date"
                                                            className="form-control"
                                                            value={childDOB}
                                                            onChange={(e) => setChildDOB(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button tabIndex={0} type="submit" className="btn btn-success btn-block mt-3">Registrarse</button>

                                    

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <a href="/login" className="textoEnlace">¿Ya tienes cuenta? ¡Inicia sesión aquí!</a>
                {error && <p className="alert alert-danger mt-3">{error}</p>}
                </div>
            </div >
            
        );

    } else {

        //si no es tipo padre no puede acceder 
        const decodedToken = jwtDecode(tokenString);
        if (decodedToken.userType !== 3) {
            return <Navigate to="/home" replace />;
        }
        // Si es padre, mostrar el contenido de registro nuevo hijo
        return (
            <div className="home-container container-fluid ">
                <h1>Añadir a un nuevo alumno al centro</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Formulario de registro</h2>
                                <p className="card-body text-center">Esta solicitud será procesada manualmente por la adminsitración del centro.</p>

                                <form onSubmit={handleRegister}>
                                    {/* Columna para datos del hijo */}
                                    <div className="col-md-6  mx-auto">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Datos del alumno</h5>
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

                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-success btn-block mt-3 ">Mandar solicitud</button>
                                    {error && <p className="alert alert-danger">{error}</p>}
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


