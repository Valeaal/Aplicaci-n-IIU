import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { jwtDecode } from "jwt-decode";
import * as comunicadoService from "../../services/comunicadoService";
import ComunModel from '../auxiliarComponents/communications/comunModel';
import * as usuarioService from '../../services/usuarioService';

function Communications() {
    const navigate = useNavigate();
    const [enviados, setEnviados] = useState([]);
    const [recibidos, setRecibidos] = useState([]);
    const [indexRecibidos, setIndexRecibidos] = useState(4);

    const tokenString = sessionStorage.getItem('token');

    useEffect(() => {
        if (!tokenString) {
            navigate('/login');
        } else {
            const decodedToken = jwtDecode(tokenString);
            const id = decodedToken.userId;
            getComunicados(id);
        }
    }, [tokenString, navigate]);

    useEffect(() => {
        setIndexRecibidos(4 + enviados.length);
    }, [enviados.length]);

    const getComunicados = async (id) => {
        const comunicadosRecibidos = await comunicadoService.getRecibidos(id);
        const comunicadosEnviados = await comunicadoService.getEnviados(id);

        if (comunicadosEnviados) {
            const enviadosActualizados = await Promise.all(
                comunicadosEnviados.data.map(async (comunicado) => {
                    let usuario = await usuarioService.getUsuarioById(comunicado.receptorId);
                    usuario = usuario.data;
                    return { ...comunicado, usuario: usuario.nombre };
                })
            );
            setEnviados(enviadosActualizados);
        }

        if (comunicadosRecibidos) {
            const recibidosActualizados = await Promise.all(
                comunicadosRecibidos.data.map(async (comunicado) => {
                    let usuario = await usuarioService.getUsuarioById(comunicado.emisorId);
                    usuario = usuario.data;
                    return { ...comunicado, usuario: usuario.nombre };
                })
            );
            setRecibidos(recibidosActualizados);
        }
    };

    const redactarComun = () => {
        navigate('/redactarComunicado');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedDay = String(day).padStart(2, '0');
        const formattedMonth = String(month).padStart(2, '0');
        const formattedYear = String(year).padStart(4, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        return `${formattedDay}/${formattedMonth}/${formattedYear} - ${formattedHours}:${formattedMinutes}`;
    };

    return (
        <div className="home-container" role="main">
            <h1 className="text-center" tabIndex={0} aria-label="Comunicados">Comunicados</h1>
            <hr className="borde mt-0" aria-hidden="true" />
            <div className="container col-8 mt-2">
                <h2 id="enviados" tabIndex={1} style={{ textAlign: 'center' }}>Enviados:</h2>
                {enviados.length === 0 ? (
                    <div className="empty-message mb-5">
                        <p tabIndex={2} style={{ textAlign: 'center' }}>No hay Comunicados enviados</p>
                    </div>
                ) : (
                    <div className="mb-5 border-success" style={{ maxHeight: '400px', overflowY: 'auto', border: 'radio' }} role="region" aria-labelledby="enviados">
                        {enviados.map((comunicado, index) => (
                            <ComunModel
                                key={comunicado.id}
                                indexActual={3 + index}
                                indexInicial={3}
                                tabIndex={3 + index}
                                titulo={comunicado.titulo}
                                mensaje={comunicado.mensaje}
                                fecha={formatDate(comunicado.createdAt)}
                                usuario={"Para: " + comunicado.usuario}
                            />
                        ))}
                    </div>
                )}
                
                <h2 id="recibidos" tabIndex={indexRecibidos} style={{ textAlign: 'center' }}>Recibidos:</h2>
                {recibidos.length === 0 ? (
                    <div className="empty-message mb-5">
                        <p tabIndex={indexRecibidos + 1} style={{ textAlign: 'center' }}>No hay Comunicados recibidos</p>
                    </div>
                ) : (
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }} role="region" aria-labelledby="recibidos">
                        {recibidos.map((comunicado, index) => (
                            <ComunModel
                                key={comunicado.id}
                                indexInicial={indexRecibidos + 1}
                                indexActual={index}
                                tabIndex={indexRecibidos + 1 + index}
                                titulo={comunicado.titulo}
                                mensaje={comunicado.mensaje}
                                fecha={formatDate(comunicado.createdAt)}
                                usuario={"De: " + comunicado.usuario}
                            />
                        ))}
                    </div>
                )}

                <div className="align-items-center mt-5">
                    <Button aria-label="Redactar comunicados" className="btn btn-success btn-block" onClick={redactarComun}>Redactar comunicados</Button>
                </div>
            </div>
        </div>
    );
}

export default Communications;