import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ() {
    return (

        <div className="accordion mx-5" id="faqAccordion">

            <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong tabIndex={3}>¿A quién puedo enviar comunicados?</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body acordeon">
                        <p tabIndex={4}><strong>Puedes recibir y enviar comunicados tanto a los profesores de su hijo como a dirección. </strong> Tenga en cuenta que los comunicados son confidenciales, al contrario que las noticias
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong tabIndex={5}>¿Cómo puedo pedir cita y con quién?</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={6}><strong>En el apartado de pedir cita, puede pedir cita con administración. </strong> Usted puede seleccionar el día y dirección se pondrá en contacto con usted para tratar la hora en caso necesario. Si no puede marcar un día es porque no está disponible, probablemente por alta demanda. Este apartado está diseñado para poder avisar de su llegada el día que seleccione y prevenir posibles aglomeraciones y tiempos de espera incómodos para usted.
                        </p>
                   </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong tabIndex={7}>¿Para qué sirve el apartado de nuevo alumno?</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={8}><strong>Para añadir otro alumno al centro asociado a su cuenta.</strong> Conveniente si ya tiene un hijo matriculado y quiere añadir a otro.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <strong tabIndex={9}>¿Puedo cambiar los datos de mi cuenta?</strong>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={10}><strong>Para ello debe de ponerse en contacto con la dirección del centro.</strong> Así que por favor, revise los datos y anote la contraseña correcta en un lugar seguro. Además, procure que dicha contraseña sea segura y no use la misma en varios sitios web.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <strong tabIndex={11}>¿Para qué sirve el campo de escribir un mensaje en el menú de inicio?</strong>
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={12}><strong>Lo que ahí escriba le llegará a la administración del centro.</strong> Use este campo con responsabilidad, y envíe también su nombre y apellidos para saber quién es el emisor. Puede usar este campo para preguntar algunas dudas concretas si le resulta más fácil que venir al centro o para escribir alguna sugerencia.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <strong tabIndex={13}>¿Para qué sirve el el apartado de créditos?</strong>
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={14}><strong>Para dar a conocer a las personas que han hecho posible este sitio web. </strong> Lo han hecho de forma altruista, con vocación de aprendizaje y servicio público. Por favor, tengan comprensión si algo no funciona según lo esperado.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default FAQ;
