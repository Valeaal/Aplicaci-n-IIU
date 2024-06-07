import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Carroussel from "../auxiliarComponents/editAccounts/carroussel";
import Tarjeta from "../auxiliarComponents/editAccounts/explicativeCard";
import EtiquetaUsuario from "../auxiliarComponents/editAccounts/etiquetaUsuario";
import { jwtDecode } from "jwt-decode";
import * as usuarioService from "../../services/usuarioService";
import Swal from 'sweetalert2';

export default function EditAccounts() { // Cambio de 'editAccounts' a 'EditAccounts'

    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [filtroTipo, setFiltroTipo] = useState("-1");
    const [filtroCurso, setFiltroCurso] = useState("-1");

    const token = sessionStorage.getItem('token');
    let id = -1;
    if (!token) {
        navigate("/login");
    } else {
        const decodedToken = jwtDecode(token);
        if (decodedToken.userType !== 1) {
            navigate("/error");
        }
        id = decodedToken.userId;
    }

    useEffect(() => {
        getUsuarios();
    }, [filtroTipo, filtroCurso]);

    
    const getUsuarios = async () => {
        const usuariosQuery = await usuarioService.getFiltro({ id, filtroTipo, filtroCurso });
        const usuario = await usuarioService.getUsuarioById(id);
        if (usuario)
            setUsuario(usuario.data);
        if (usuariosQuery)
            setUsuarios(usuariosQuery.data);

    }

    const toTipo = (tipo) => {
        let rol = "";
        switch (tipo) {
            case 1: rol = "Administrador";
                break;
            case 2: rol = "Personal";
                break;
            case 3: rol = "Padre-Madre";
                break;
            default: rol = "Error";
                break;
        }
        return rol;
    }

    const deleteHandler = async (id) => {
        try {
            Swal.fire({
                title: "¿Estás seguro de borrar al usuario?",
                text: "No se podrá deshacer",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, borrar usuario",
                cancelButtonText: "No, no borrar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await usuarioService.deleteById(id);

                    Swal.fire({
                        title: "¡Alumno Borrado!",
                        text: "",
                        icon: "success"
                    });
                }
                getUsuarios();
            });


        } catch (error) {
            console.error("Error al eliminar al usuario:", error);
        }
    };

    const editHandler = async (id) => {
        navigate(`/editarUsuario/${id}`);
    };




    return (
        <div className="home-container">
            <h1 className="text-center">Editar las cuentas del sistema</h1>
            <hr className="borde mt-0 mb-1"></hr>
            <div className="mx-3">
                <div className="row">
                    <div className="col-md-7 col-sm-12 mb-4">
                        <Carroussel />
                    </div>
                    <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-between">
                        <Tarjeta
                            titulo="Funcionamiento de esta sección"
                            parrafos={["En esta pestaña podrás editar, crear y eliminar manualmente usuarios, sin necesidad de que hayan pedido acceso al centro.",
                                "En esta primera versión de la aplicación, las cuentas del personal laboral deben de crearse manualmente y la única forma de cambiar la contraseña es desde esta página.",
                                "Para añadir una cuenta manualmente, usa el botón verde de aquí abajo."]}
                        />
                        <button className="btn btn-success mt-3 mb-0 align-self-end"  onClick={() => {navigate("/editarCuentas/añadirCuenta")}}>Añadir una nueva cuenta</button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <section>
                            <h2 className="mb-3">Lista de usuarios:</h2>
                            <form className="d-flex mb-2">
                                <div className="me-5">
                                    <div className="d-flex">
                                        <label htmlFor="userFilter" className="me-2">
                                            <h5>Selecciona el rol:</h5>
                                        </label>
                                        <select
                                            className="form-select mb-2"
                                            id="userFilter"
                                            value={filtroTipo}
                                            onChange={(e) => {
                                                setFiltroTipo(e.target.value);
                                            }}
                                        >
                                            <option value="-1">Sin filtro de rol</option>
                                            <option value="1">Administradores</option>
                                            <option value="2">Profesores</option>
                                            <option value="3">Padres</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="cursoFilter" className="me-2">
                                        <h5>Selecciona el curso:</h5>
                                    </label>
                                    <select
                                        className="form-select mb-2"
                                        id="cursoFilter"
                                        value={filtroCurso}
                                        onChange={(e) => {
                                            setFiltroCurso(e.target.value);
                                        }}
                                    >
                                        <option value="-1">Sin filtro de curso</option>
                                        <option value="0">0 años</option>
                                        <option value="1">1 año</option>
                                        <option value="2">2 años</option>
                                    </select>
                                </div>
                            </form>
                        </section>
                        {(usuarios  && usuarios.length !== 0) || usuario  ? (
                            <>
                                <div className="noticias-container">
                                    <ul className="list-group">
                                        {(filtroTipo === "1" || filtroTipo === "-1") && filtroCurso === "-1" &&
                                            <EtiquetaUsuario
                                                key={usuario.id}
                                                id={usuario.id}
                                                nombre={usuario.nombre + " (Yo)"}
                                                correo={usuario.email}
                                                tipo={toTipo(usuario.tipo)}
                                                editHandler={editHandler}
                                            />
                                        }
                                        {(usuarios && usuarios.length!==0) &&
                                        usuarios.map(usuario => (
                                            <EtiquetaUsuario
                                                key={usuario.id}
                                                id={usuario.id}
                                                nombre={usuario.nombre}
                                                correo={usuario.email}
                                                tipo={toTipo(usuario.tipo)}
                                                deleteHandler={deleteHandler}
                                                editHandler={editHandler}
                                            />
                                        ))}
                                    </ul>
                                </div>

                            </>
                        ) :
                            <Tarjeta
                                titulo="Lista de usuarios"
                                parrafos={["Ahora mismo no hay usuarios.",
                                    "Cuando los haya apareceran aquí con botones para borrarlos y editarlos."]}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
