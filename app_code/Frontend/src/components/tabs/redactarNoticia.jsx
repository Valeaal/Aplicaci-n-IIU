import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as noticiaService from "../../services/noticiaService";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

function RedactarNoticia() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [esPublica, setEsPublica] = useState(false); // Estado para almacenar si la noticia es pública o no

    const tokenString = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(tokenString);
    const emisorId = decodedToken.userId;

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de publicar la noticia?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, publicar",
            cancelButtonText: "No, cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await noticiaService.createNoticia({ titulo, contenido, esPublica});
                if (res.data) {
                    console.log(titulo)
                    console.log(contenido)
                    console.log(esPublica)
                    console.log(res.data);
                    Swal.fire({
                        title: "¡Noticia publicada!",
                        text: "",
                        icon: "success"
                    });
                    navigate("/noticias");
                } else {
                    console.log(titulo)
                    console.log(contenido)
                    console.log(esPublica)
                    console.log(res.data);
                    Swal.fire({
                        title: "Error",
                        text: "Ha ocurrido un error al publicar la noticia",
                        icon: "error"
                    });
                }
            }
        });
    }

    return (
        <div className='d-flex flex-column justify-content-center mx-5 my-2'>
            <h1 style={{ marginBottom: "10px" }}> <em> <u>Nueva noticia</u> </em> </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitulo">
                    <Form.Label>Título:</Form.Label>
                    <Form.Control type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
                    
                </Form.Group>
                <Form.Group controlId="formContenido">
                    <Form.Label>Contenido:</Form.Label>
                    <Form.Control as="textarea" rows={3} value={contenido} onChange={(e) => setContenido(e.target.value)} placeholder="Contenido" />
                </Form.Group>
                <Form.Group controlId="formEsPublica">
                    <Form.Check type="checkbox" label="Es pública" checked={esPublica} onChange={(e) => setEsPublica(e.target.checked)} />
                </Form.Group>
                <Button variant="primary" type="submit">Publicar noticia</Button>
            </Form>
        </div>
    );
}

export default RedactarNoticia;
