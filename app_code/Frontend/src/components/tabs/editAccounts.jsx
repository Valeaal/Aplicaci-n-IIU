import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Carroussel from "../editAccounts/carroussel";
import Tarjeta from "../editAccounts/explicativeCard";
import { jwtDecode } from "jwt-decode";


export default function EditAccounts() { // Cambio de 'editAccounts' a 'EditAccounts'

    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate("/login");
        } else {
            const decodedToken = jwtDecode(token);
            if (decodedToken.userType !== 1) {
                navigate("/error");
            }
        }
    }, [navigate]);

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
                        <Tarjeta />
                        <button className="btn btn-success mt-3 mb-0 align-self-end">Añadir una nueva cuenta manualmente</button>
                    </div>
                </div>
                <div className="row">
                    <p>AQUÍ YA UNA LISTA DE USUARIOS</p>
                    <p>ESTARÍA DE PUTA MADRE PODER FILTRAR AUNQUE FUERA POR ROL O POR NOMBRE</p>
                    <p>CADA FILA QUE TENGA UN BOTÓN DE EDITAR Y OTRO DE ELIMINAR</p>
                    <p>EL DE EDITAR QUE TE LLEVE A UNA NUEVA PÁGINA QUE HAGA LOS INSERTS EN LA BDD</p>
                    <p>LA CONTRASEÑA DEBERÍA DE GUARDARSE CON BCRYPT PORQUE ASÍ SE HACE LUEGO EL DECODE</p>
                    <p>TODO AL MAS PURO ESTILO TAW</p>
                </div>
            </div>
        </div>
    );
}
