import React from 'react';

// Componente funcional explicativo en formato de tarjeta de Bootstrap
const DocumentoExplicativo = () => {
    return (
        <div className="card tarjetaAnexa">
            <div className="card-header">
                <h5 className="card-title tarjetaAnexa">Funcionamiento de esta sección</h5>
            </div>

            <div className="card-body">
                {/* Contenido explicativo */}
                <p>En esta pestaña podrás editar, crear y eliminar manualmente usuarios.</p>
                <p>En esta primera versión de la aplicación, las cuentas del personal laboral deben de crearse manualmente y la única forma de cambiar la contraseña es desde esta página.</p>
                <p>Para añadir una cuenta manualmente, usa el botón verde de aquí abajo.</p>
            </div>
        </div>
    );
}

export default DocumentoExplicativo;
