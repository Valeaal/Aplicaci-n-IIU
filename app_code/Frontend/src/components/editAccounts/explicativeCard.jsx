import React from 'react';

// Componente funcional explicativo en formato de tarjeta de Bootstrap
const DocumentoExplicativo = (props) => {
    const {titulo, parrafos} = props;
    return (
        <div className="card tarjetaAnexa">
            <div className="card-header">
                <h5 className="card-title tarjetaAnexa">{titulo}</h5>
            </div>

            <div className="card-body">
                {/* Contenido explicativo */}
                {parrafos.map((p, index) => (
                    <p key={index}>{p}</p>
                ))}
            </div>
        </div>
    );
}

export default DocumentoExplicativo;
