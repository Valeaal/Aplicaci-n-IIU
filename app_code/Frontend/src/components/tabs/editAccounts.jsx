import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Carroussel from "../editAccounts/carroussel";
import Tarjeta from "../editAccounts/explicativeCard";
import EtiquetaUsuario from "../editAccounts/etiquetaUsuario";
import { jwtDecode } from "jwt-decode";
import * as usuarioService from "../../services/usuarioService";
import Swal from 'sweetalert2';




export default function EditAccounts() { // Cambio de 'editAccounts' a 'EditAccounts'

    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

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
    }, []);



    const getUsuarios = async () => {
        const usuariosQuery = await usuarioService.getDiff(id);
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
            /* Swal.fire({
                 title: "¿Estás seguro de borrar al usuario?",
                 text: "No se podrá deshacer",
                 icon: "warning",
                 showCancelButton: true,
                 confirmButtonColor: "#3085d6",
                 cancelButtonColor: "#d33",
                 confirmButtonText: "Sí, borrar usuario",
                 cancelButtonText: "No, no borrar"
             }).then(async (result) => {
                 if (result.isConfirmed) {*/
            await usuarioService.deleteById(id);

            Swal.fire({
                title: "¡Alumno aceptado!",
                text: "",
                icon: "success"
            });
            // }
            //getUsuarios();
            //});


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
                            parrafos={["En esta pestaña podrás editar, crear y eliminar manualmente usuarios.",
                                "En esta primera versión de la aplicación, las cuentas del personal laboral deben de crearse manualmente y la única forma de cambiar la contraseña es desde esta página.",
                                "Para añadir una cuenta manualmente, usa el botón verde de aquí abajo."]}
                        />
                        <button className="btn btn-success mt-3 mb-0 align-self-end">Añadir una nueva cuenta manualmente</button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        {usuarios && usuarios.length !== 0 ? (
                            <>
                                <h2>Lista de usuarios:</h2>
                                <form>
                                <label htmlFor="userFilter">
                                    <h5>Selecciona el rol: &nbsp;</h5>
                                </label>
                                    <select className="mb-2">
                                        <option selected="true">Sin filtro de rol</option>
                                        <option>Administradores</option>
                                        <option>Profesores</option>
                                        <option>Padres</option>
                                    </select>
                                    <div className="noticias-container">
                                        <ul className="list-group">
                                            {usuarios.map(usuario => (
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
                                </form>
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
