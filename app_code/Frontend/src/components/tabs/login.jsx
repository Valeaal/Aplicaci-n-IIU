import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import * as usuarioService from '../../services/usuarioService';    //Para hacer la soliciutd al Backend en un archivo aparte
import * as jwt from 'jwt-decode'

// Según está hecha la función, necesitará que alguna página padre lo haya llamado para poder guardar el token en dicha página.
// Esto no es funcional y está en BETA
const Login = () => {

        //Fundión desde la que se le llama al login, para luego volver

    // Estado para almacenar los valores del formulario
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Expresión regular para verificar el formato del correo electrónico
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            setError("Formato de correo incorrecto");
            return;
        }

        try {
            const token = await usuarioService.LoginUser({ email, password });      //Llamará al backend (ususarioService está en otro archivo por ser más modular)

            if (!token || typeof token !== 'string') {
                // Si la respuesta no se genera correctamente (se espera o bien el token o un código de error)
                setError("Error del servidor, no se puede iniciar sesión actualmente");
            } else {
                const decodedToken = jwt.jwtDecode(token);
                const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos desde UNIX Epoch
                if (decodedToken.exp && decodedToken.exp < currentTime) {
                    // El token ha expirado
                    setError("La sesión ha expirado. Por favor, inicia sesión nuevamente.");
                } else{
                    Swal.fire({
                        title: "Inicio exitoso",
                        text: "Las credenciales son correctas. Has inciado sesión",
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

    // Objeto para redireccionar a otras páginas
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',  flexDirection: "column"}}>
            <div className="card" style={{ width: "18rem", textAlign:"center", height:'27rem'}}>
                <h1>Iniciar Sesión</h1>
                
                <form onSubmit={handleSubmit} >
                    <div style={{ marginBottom: "30px", marginTop:"70px" }}>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "70px" }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    {error && <p style={{marginTop:"10px"}} className="alert alert-danger">{error}</p>}
                </form>
                
            </div>
            <a href="/newChild" style={{textDecoration:"none"}}>¿No tienes cuenta? ¡Regístrate aquí!</a>
        </div>
    );
}


export default Login;
