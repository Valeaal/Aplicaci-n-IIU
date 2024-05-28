import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function EtiquetaUsuario(props) { // Cambio de 'editAccounts' a 'EditAccounts'

    const {nombre, tipo, id, deleteHandler} = props;
    return (
        <li key={id} className="mb-2">
            <div className="card">
                <div className="card-body">
                    <h4>{id}</h4>
                    <p className="noticia">{tipo}</p>
                    <button role="alert" aria-label={"Editar usuario "+nombre} className="btn btn-warning me-2"><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button role="alert" aria-label={"Borrar usuario "+nombre} onClick={() => deleteHandler(id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </li>

    );
}
