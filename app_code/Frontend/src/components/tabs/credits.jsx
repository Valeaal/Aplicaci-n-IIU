import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "../../images/user-profile.jpg";
import * as jwt from 'jwt-decode';

function Credits() {
  const token = sessionStorage.getItem('token'); // Recuperamos el token

  let tipo = 'Everyone';

  if (token) {
    // Si el token está, lo decodificamos y guardamos el tipo de usuario que ha iniciado sesión
    const tokenDecoded = jwt.jwtDecode(token);
    tipo = tokenDecoded.userType;
    console.log(tipo);
  }

  return <div className="d-flex flex-column m-2 home-container">
            <h1>Escuela Infantil Virgen Inmaculada</h1>
            <hr className="borde mt-0"></hr>
            <section className="d-flex flex-column align-items-center">
                <h2 tabIndex={1}>Página realizada para la asignatura de Interfaces de Usuario</h2>
                <br />
                <br />
                <h3 tabIndex={2}>Participantes:</h3>
            </section>

            <div class="container-fluid text-center" id="Participantes">
                <section className="row">
                    <div className="col">
                        <img src={foto} alt="Alvaro Valencia" />
                        <h3 tabIndex={3}>Alvaro Valencia</h3>
                        <p tabIndex={4} style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                    </div>

                    <div className="col">
                        <img src={foto} alt="Pablo Senciales" />
                        <h3 tabIndex={5}>Pablo Senciales</h3>
                        <p tabIndex={6} style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                    </div>

                    <div className="col">
                        <img src={foto} alt="Guillermo Pichaco" />
                        <h3 tabIndex={7}>Guillermo</h3>
                        <p tabIndex={8} style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                    </div>

                    <div className="col">
                        <img src={foto} alt="Jose Ramirez Giron" />
                        <h3 tabIndex={9}>Jose Ramirez Giron</h3>
                        <p tabIndex={10} style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                    </div>
                </section>
            </div>
            
        </div>;
}

export default Credits;