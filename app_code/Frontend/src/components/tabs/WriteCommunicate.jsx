import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import * as comunicadoService from "../../services/comunicadoService";
import * as usuarioService from "../../services/usuarioService";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

function WriteCommunicate(){
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [receptorId, setReceptorId] = useState("");
    const [posiblesReceptores, setPosiblesReceptores] = useState([]);
    const [enabled, setEnabled] = useState(false);

    const tokenString = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(tokenString);
    const emisorId = decodedToken.userId;

    useEffect(() => {
        getReceptores();
    }, []);

    async function getReceptores() {
        const receptores = await usuarioService.getDiff(emisorId);
        setPosiblesReceptores(receptores.data);
    }

    const stylePh = {
        width: '70%',
        height: "300px"

    }

    const styleBu = {
        width: '200px',
        marginTop: '5px'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de enviarlo?",
            text: "Lo podrás borrar más tarde",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, aceptar",
            cancelButtonText: "No, cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await comunicadoService.add({ mensaje, titulo, emisorId, receptorId });
                console.log(res.data)
                if (res.data === "Comunicado creado") {
                    Swal.fire({
                        title: "¡Comunicado enviado!",
                        text: "",
                        icon: "success"
                    });
                    navigate("/communications");
                } else {
                    console.log("ERROR");
                }
            }

        });

    }

    return (
        <div className="container home-container">
            <h1 className="mb-4">Nuevo comunicado</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Destinatario:</label>
                    <select
                        style={{maxWidth:"20%"}}
                        className="form-select"
                        required
                        name="destinatarioCom"
                        id="destCom"
                        onChange={(e) => {
                            setReceptorId(e.target.value);
                            setEnabled(true);
                        }}
                    >
                        <option id="placeholderSelect" disabled={enabled} value="">
                            Seleccionar receptor
                        </option>
                        {posiblesReceptores.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Título:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Titulo"
                        required
                        maxlength="255"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje:</label>
                    <textarea
                        className="form-control"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Introduzca el mensaje que desea enviar"
                        required
                        maxlength="255"
                    ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">
                    Enviar comunicado
                </button>
            </form>
        </div>

    );
}

export default WriteCommunicate;