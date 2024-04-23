import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

async function LoginUser(credentials) {
    return fetch('http://localhost:3001/login',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

// Según está hecha la función, necesitará que alguna página padre lo haya llamado para poder guardar el token en dicha página.
// Esto no es funcional y está en BETA
const Login = ({ setToken }) => {
    // Estado para almacenar los valores del formulario
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Expresión regular para verificar el formato del correo electrónico
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        // Validar credenciales
        if (emailRegex.test(username)) {
            const token = await LoginUser({
                username,
                password
            })
            setToken(token)
            Swal.fire({
                title: "Inicio exitoso",
                text: "Los credenciales eran correctos",
                icon: "success"
              });
            navigate("/"); // TODO: Bueno aquí tenemos que poner que navege de donde lo llamemos, madre mía muchas cosas
        } else if(!emailRegex.test(username)) {
            // Si las credenciales no son válidas, mostrar un mensaje de error
            setError("Formato del correo incorrecto");
        }else{
            setError("Usuario o contraseña incorrectos");
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
                            value={username}
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
            <a href="/" style={{textDecoration:"none"}}>¿No tienes cuenta? ¡Regístrate aquí!</a>
        </div>
    );
}

// Definición de PropTypes para validar las props
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;
