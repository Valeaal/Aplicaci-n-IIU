import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ() {
    return (

        <div className="accordion mx-5" id="faqAccordion">

            <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong>¿A quién puedo enviar comunicados?</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body acordeon">
                        <strong>En el apartado "comunicados", puedes enviar comunicados tanto a los padres o tutores legales de tus alumnos como a administración. </strong> Ellos podrán ver el título, el emisor y la hora de envío y de igual forma, podrás recibir comunicados de ellos.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>¿Cómo puedo pedir cita y con quién?</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <strong>En el apartado de pedir cita, puede pedir cita con administración. </strong> Puedes seleccionar el día y administración (dirección) se pondrá en contacto contigo para tratar la hora en caso necesario. Debido a que el personal es lógico que pueda personarse en administración como siempre para tener una dinámica ágil de trabajo, este apartado está indicado sobre todo para los padres, en momentos de alta carga de visitas como el periodo de matriculación. De todas formas el perosnal puede usarlo como plazca por supuesto. 
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>¿Para qué sirve este sitio web?</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <strong>Para poder agilizar la comunicación con los padres y estar informados de las novedades del centro.</strong> Procura revisar recurrentemente el apartado de noticicias de la pestaña "Inicio". Gracias a este sitio además de estar informado, puede pedir cita con administración si lo considera oportuno y establecer una comunicación directa con los tutores de sus alumnos, de forma que facilita el trabajo tanto para usted como para los padres.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <strong>¿Puedo cambiar los datos de mi cuenta?</strong>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <strong>Para ello debe de ponerse en contacto con la dirección del centro.</strong> Así que por favor, revise los datos y anote la contraseña correcta en un lugar seguro. Además, procure que dicha contraseña sea segura y <strong>no use la misma en varios sitios web</strong>.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <strong>¿Para qué sirve el campo de escribir un mensaje en el menú de inicio?</strong>
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <strong>Lo que ahí escriba le llegará a la administración (dirección) del centro.</strong> Usa este campo con responsabilidad, y envía también nombre y apellidos para saber quién es el emisor. Puedes usar este campo para preguntar algunas dudas concretas si te resulta más fácil que acudir a administración (dirección) o para escribir alguna sugerencia.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <strong>¿Para qué sirve el el apartado de créditos?</strong>
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <strong>Para dar a conocer a las personas que han hecho posible este sitio web. </strong> Lo han hecho de forma altruista, con vocación de aprendizaje y servicio público. Por favor, tengan comprensión si algo no funciona según lo esperado.
                    </div>
                </div>
            </div>

        </div>

    );
}

export default FAQ;
