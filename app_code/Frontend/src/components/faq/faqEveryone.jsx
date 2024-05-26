import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ() {
    return (

        <div className="accordion mx-5" id="faqAccordion">

            <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong tabIndex={3}>¿Cómo puedo ingresar en el sistema y tener una cuenta?</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body acordeon">
                        <p tabIndex={4}><strong >Primero, el alumno (su hijo probablemente) deberá de ser admitido en el centro.</strong> Tras la resolución definitiva y tras comprobar que efectivamente su hijo ha sido aceptado, puede ir a la pestaña de "Nuevo Alumno" y rellenar los datos. La petición será revisada manualmente y aceptada si cumple los requisitos.
                        Si usted tiene varios hijos matriculados en el centro, registre primero a uno y luego una vez su cuenta haya sido aceptada, inicie sesión para registrar al resto.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong tabIndex={5} >¿Puedo registrar a más de un hijo con la misma cuenta?</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={6}><strong >Sí.</strong> Si usted ya tiene una cuenta y su hijo está en el sistema y quiere registrar a otro, inicie sesión y navegue a "Nuevo Alumno" y rellene los datos. Su petición se revisará manualmente y aceptará si cumple los requisitos. Tenga en cuenta que podrá gestionar a sus dos hijos con la misma cuenta.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong tabIndex={7}>¿Qué tipo de información aparece en la pestaña de noticias?</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={8}><strong >Toda información de carácter no confidencial e interés público para usuarios de la escuela.</strong> Es conveniente revisar este apartado recurrentemente, ya que puede aparecer información útil como novedades sobre periodos de matriculación, apertura del centro, comedor...
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
                        <p tabIndex={10}><strong >Para ello debe de ponerse en contacto con la dirección del centro.</strong> Así que por favor, revise los datos y anote la contraseña correcta en un lugar seguro. Además, procure que dicha contraseña sea segura y no use la misma en varios sitios web.
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
