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
                        <p tabIndex={4}><strong>En el apartado "comunicados", puedes enviar comunicados a todo el mundo. </strong>
                        Esto es exclusivo de tu perfil de administración, normalmente solo pueden comunicarse usuarios que tiene relación, como padres con el profesor de su hijo. 
                        Ten en cuenta que también puedes recibir comunicados de todo el mundo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong tabIndex={5}>¿Quién puede pedirme cita? ¿Cómo puedo ver las citas?</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={6}><strong>En el apartado de pedir cita, padres y personal pueden pedir cita con administración (dirección). </strong>
                        Podrán seleccionar el día y tu podrás verlo y comunicarte mediante la pestaña "comunicados" con el usuario en cuestión para acordar una hora por ejemplo. 
                        Debido a que el personal es lógico que pueda personarse en administración como siempre para tener una dinámica ágil de trabajo, este apartado está indicado sobre todo para los padres, en momentos de alta carga de visitas como el periodo de matriculación, con fines de planificación para que sepas cuándo se espera una gran llegada de padres y puedes desbilitar un día en concreto para que no vengan más. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong tabIndex={7}>¿Para qué sirve este sitio web?</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={8}><strong>Para poder agilizar la comunicación con los padres, trabajadores y comunicar las novedades del centro. </strong> 
                        Procura escribir todo tipo de novedades en forma de noticia o comunicados para acostumbrar a los usuarios que ese es el medio habitual de comunicación.
                        Igualmente, procura fomentar el apartado "Pedir cita" para facilitarte un mayor control del flujo de personas.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <strong tabIndex={9}>¿Puedo cambiar los datos de alguna cuenta o crear una?</strong>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={10}><strong >Sí, en el apartado "Editar cuentas". </strong>
                        Puedes desde editar el nombre hasta la contraseña aunque, como ves, el método de cambiar la contraseña no es el más sencillo, así que fomenta que los usuarios <strong>tengan una contraseña segura, no repetida en otros sitios web y que la anoten en un lugar seguro. </strong>
                        Para crear una cuenta, puedes usar el mismo apartado de "Editar cuentas". Los padres pueden solicitar cuentas de forma ordinaria que podrás aceptar en "Aceptar alumno". Un padre con dos hijos solo tendrá una cuenta.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <strong tabIndex={11}>¿Por qué me llegan correos con el asunto "WEB"?</strong>
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={12}><strong>Es un mensaje que han dejado en la pestaña "Inicio". </strong>
                        Este apartado es accesible por todo el mundo y está creado para evitar el uso del teléfono peronal para el trabajo, fomentando el correo electrónico.
                        Pueden ser desde mensajes con avisos hasta sugerencias.
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

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        <strong tabIndex={15}> ¿Para qué sirve el apartado "Aceptar un alumno"?</strong>
                    </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={16}><strong>El método ordinario para que un padre acceda al sistema es que solicite una cuenta introduciendo los datos de su hijo, y te aparecerá en ese apartado. </strong>
                        Podrás hacer una comprobación manual de que efectivamente el alumno ha sido aceptado en la escuela para aceptarlo o denegarlo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        <strong tabIndex={17}>¿Cómo funciona el apartado redactar noticias?</strong>
                    </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p tabIndex={18}><strong>Podrás escribir las noticias que le aparecerán a la gente en la pestaña "Inicio". </strong>
                        Intenta que no sea demasiado larga y que el título sea acorde. 
                        Con el checkbox "¿Es pública?" Podrás seleccionar si la noticia será vista por todo el mundo (registrado o no) o por únicamente por el personal laboral de la escuela.
                        </p>
                    </div>
                </div>
            </div>
            

        </div>

    );
}

export default FAQ;
