import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Login() {
    // Estado para almacenar los valores del formulario
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Expresión regular para verificar el formato del correo electrónico
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        // Validar credenciales
        if (emailRegex.test(username) && password === "contraseña") {
            Swal.fire({
                title: "Inicio exitoso",
                text: "Los credenciales eran correctos",
                icon: "success"
              });
            navigate("/");
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
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
        </div>
    );
}
