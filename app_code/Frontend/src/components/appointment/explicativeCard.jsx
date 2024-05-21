import React from 'react';

// Componente funcional explicativo en formato de tarjeta de Bootstrap
const DocumentoExplicativo = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Información importante</h5>
            </div>

            <div className="card-body">
                {/* Contenido explicativo */}
                <p>En esta pestaña podrá seleccionar en el calendario un día de los disponibles para avisar que va a acudir a administración para tratar cualquier tema.</p>
                <p>Antes de solicitar una cita, es recomendable que consulte las últimas noticias de la pestaña "Inicio", ya que puede contener información sobre temas como periodos de matriculación</p>
                <p>El propósito de esta funcionalidad es avisar de su visita con antelación para evitar aglomeraciones y tiempos de espera incómodos para usted. Tenga esto cuenta si algún día está marcado como no disponible.</p>
                <p>Si fuera necesario, administración se pondría en contacto con usted para concertar una hora concreta o cualquier tema relacionado.</p>
            </div>
        </div>
    );
}

export default DocumentoExplicativo;
