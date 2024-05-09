import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import * as comunicadoService from "../../services/comunicadoService";
import * as usuarioService from "../../services/usuarioService";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

function RedactarComunicados() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [receptorId, setReceptorId] = useState("");
    const [posiblesReceptores, setPosiblesReceptores] = useState([]);

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
                if(!receptorId){
                    const receptor = posiblesReceptores[0];
                    setReceptorId(receptor.id);
                }
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
    <>
        <div className='d-flex flex-column justify-content-center mx-5 my-2'>

            <h1 style={{ marginBottom: "10px" }}> <em> <u>Nuevo comunicado</u> </em> </h1>

            <section className='d-flex flex-row align-items-center'>
                <h3 style={{ marginRight: '10px', color: 'dimgrey' }}>Destinatario:</h3>
                <select name="destinatarioCom" id="destCom" style={{ height: '70%' }} onChange={(e) => setReceptorId(e.target.value) }>
                    {posiblesReceptores.map((item) => (
                        <option key={item.id} value={item.id}>{item.nombre}</option>
                    ))}
                </select>
            </section>
            <h4 style={{ color: 'dimgrey' }}>Titulo:</h4>
            <section className='d-flex flex-column justify-content-center'>
                <input required type='text'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder='Titulo.'
                    id="textoCom"
                    style={stylePh} />
            </section>
            <h4 style={{ color: 'dimgrey' }}>Comunicado:</h4>
            <section className='d-flex flex-column justify-content-center'>
                <textarea required
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder='Introduzca el comunicado que desea enviar.'
                    id="textoCom"
                    style={stylePh}></textarea>
            </section>

            <Button style={styleBu} onClick={handleSubmit}>Enviar comunicado</Button>

        </div>
    </>
);
}

export default RedactarComunicados;