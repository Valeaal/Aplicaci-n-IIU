import React, { useState, useEffect } from "react";
import * as peticionService from '../../services/peticionService';

export default function AddStudent() {
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await peticionService.getAllPeticiones();
                if (response && response.data) {
                    setRequests(response.data.map(request => ({
                        id: request.id,
                        nombrePadre: request.nombrePadre
                    })));
                } else {
                    console.error("Respuesta no válida:", response);
                }
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };

        fetchRequests();
    }, []);

    const handleSelectRequest = async (request) => {
        setSelectedRequest(request);
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <h2>Peticiones</h2>
                <ul>
                    {requests && requests.length > 0 ? (
                        requests.map(request => (
                            <li key={request.id} onClick={() => handleSelectRequest(request)}>
                                ID: {request.id}, Nombre del padre: {request.nombrePadre}
                            </li>
                        ))
                    ) : (
                        <li>No hay peticiones disponibles</li>
                    )}
                </ul>
            </div>
            <div className="col-md-8">
                <h2>Datos del Alumno</h2>
                {selectedRequest ? (
                    <div>
                        <p>Detalles de la petición seleccionada:</p>
                        <p>ID: {selectedRequest.id}</p>
                        <p>Nombre del padre: {selectedRequest.nombrePadre}</p>
                        {/* Otros campos de la petición */}
                    </div>
                ) : (
                    <p>Selecciona una petición para ver sus detalles</p>
                )}
            </div>
        </div>
    );
}
