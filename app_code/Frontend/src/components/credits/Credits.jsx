import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "./user-profile.jpg"

function Credits(){
    return(
        <div className="d-flex flex-column m-2">
            <section className="d-flex flex-column align-items-center">
                <h1 style={{marginBottom:"10px"}}> <em> <u>Escuela Infatil Virgen Inmaculada</u> </em> </h1>
                <h5>Pagina realizada para la asignatura de Interfaces de Usuario</h5>
                <h3>Participantes:</h3>
            </section>

            <section className="d-flex flex-row">
                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto}></img>
                    <h3>Alvaro Valencia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>

                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto}></img>
                    <h3>Pablo Senciales</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>

                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto}></img>
                    <h3>Guillermo </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>

                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto}></img>
                    <h3>Jose Ramirez Giron</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>
            </section>
        </div>
    );
}

export default Credits;