import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { jwtDecode } from "jwt-decode";
import * as comunicadoService from "../../services/comunicadoService";

function Communications(){
    
    const navigate = useNavigate();
    const [enviados, setEnviados] = useState([]); // Cambiado a null
    const [recibidos, setRecibidos] = useState([]); // Cambiado a nullconsole.log(recibidos.length); // Output: undefined (since it's not an array)<br>console.log(recibidos.message); // Output: the value of the 'message' property, if it exists<br>

    // Obtener el token de sessionStorage
    const tokenString = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(tokenString);
    const id = decodedToken.userId;
    if (!tokenString) {
        navigate("/login");
    }


    useEffect(() => {
        getComunicados();
    }, []);

    const getComunicados = async () => {
        //Esta funcion me recupera todos los comunicados recibidos
        const comunicadosRecibidos = await comunicadoService.getRecibidos(id);
        //esta todos los comunicados enviados, se puede acceder al JSON con comunicadosEnviados.data,
        const comunicadosEviados = await comunicadoService.getEnviados(id);

        setEnviados(comunicadosEviados.data);
        setRecibidos(comunicadosRecibidos.data);
    }

  


    const redactarComun = () => {
        navigate("/redactarComunicado");
    }

    const formatDate = (dateString) => {
 
        const date = new Date(dateString);
    
        const day = date.getDate();
        const month = date.getMonth() + 1; // Los meses van de 0 a 11, por lo que agregamos 1
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
    
        const formattedDay = String(day).padStart(2, '0');
        const formattedMonth = String(month).padStart(2, '0');
        const formattedYear = String(year).padStart(4, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
    
        return `${formattedDay}/${formattedMonth}/${formattedYear} - ${formattedHours}:${formattedMinutes}`;
    }
 
    return (
        <div class="home-container">
            <h1 className="text-center">Comunicados</h1>
            <hr className=" borde mt-0"></hr>
            <div class='container col-8 mt-2'>
                <h2 style={{ textAlign: 'center' }}>Enviados:</h2>
                {enviados.length === 0 ? (
                    <div className = "empty-message mb-5">
                        <p style={{ textAlign: 'center' }}>No hay Comunicados enviados</p>
                    </div>
                ) : (
                    <div className = " mb-5" style={{ maxHeight: '400px', overflowY: 'auto'}}>
                        {/* Aquí va la sección de comunicados enviados */}
                        {enviados.map((comunicado) => (
                            <div key={comunicado.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{comunicado.titulo}</h5>
                                    <p className="card-text">{comunicado.mensaje}</p>
                                    <p className="card-text text-primary" style={{ fontSize: '0.7rem' }}>{formatDate(comunicado.createdAt)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <h2 style={{ textAlign: 'center' }}>Recibidos:</h2>
                {recibidos.length === 0 ? (
                    <div className = "empty-message mb-5">
                        <p style={{ textAlign: 'center' }}>No hay Comunicados recibidos</p>
                    </div>
                ) : (
                    <div style={{ maxHeight: '400px', overflowY: 'auto'}}>
                        {/* Aquí va la sección de comunicados recibidos */}
                        {recibidos.map((comunicado) => (
                            <div key={comunicado.id} className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title">{comunicado.titulo}</h5>
                                    <p className="card-text">{comunicado.mensaje}</p>
                                    <p className="card-text text-primary" style={{ fontSize: '0.7rem' }}>{formatDate(comunicado.createdAt)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div class='align-items-center mt-5'>
                    <Button onClick={() => redactarComun()}>Redactar comunicados</Button>
                </div>

            </div>
        </div>
    );
}

export default Communications;