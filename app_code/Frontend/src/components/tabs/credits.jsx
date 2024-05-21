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
                <h2>Página realizada para la asignatura de Interfaces de Usuario</h2>
                <br />
                <br />
                <h3>Participantes:</h3>
            </section>

            <section className="d-flex flex-row">
                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto} alt="Alvaro Valencia" />
                    <h3>Alvaro Valencia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>

                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto} alt="Pablo Senciales" />
                    <h3>Pablo Senciales</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>

                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto} alt="Guillermo" />
                    <h3>Guillermo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>

                <div className="d-flex flex-column m-2 align-items-center">
                    <img src={foto} alt="Jose Ramirez Giron" />
                    <h3>Jose Ramirez Giron</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                </div>
            </section>
        </div>;
}

export default Credits;