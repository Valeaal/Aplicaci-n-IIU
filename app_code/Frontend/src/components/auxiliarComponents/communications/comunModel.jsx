import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ComunModel(props) {
    const {titulo, mensaje, fecha, usuario, indexActual, indexInicial} = props;

    return (
        <div className="card mb-3" tabIndex={indexInicial+indexActual}>
            <div className="card-body">
                <p className="card-subtitle">{usuario}</p>
                <hr className='m-0'></hr>
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{mensaje}</p>
                <p className="card-text text-primary" style={{ fontSize: '0.7rem' }}>{fecha}</p>
            </div>
        </div>
    );
}

export default ComunModel;