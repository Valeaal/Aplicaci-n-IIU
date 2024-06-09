import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "../../images/user-profile.jpg";
import guillermo from "../../images/guillermo-userprofile.jpg";
import joser from "../../images/RamirezGironJoseFoto.jpeg";
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
                <h2 tabIndex={0}>Página realizada para la asignatura de Interfaces de Usuario</h2>
                <br />
                <br />
                <h3 tabIndex={0}>Participantes:</h3>
            </section>

            <div class="container-fluid text-center" id="Participantes">
                <section className="row">
                    <div className="col">
                        <a href="" target="_blank"><img src={foto} alt="Alvaro Valencia" class="rounded my-2" style={{width:"165px", border: "2px solid #ffa600"}}/></a>
                        <h3 tabIndex={0}>Alvaro Valencia</h3>
                        <p tabIndex={0} style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                    </div>

                    <div className="col">
                        <a href="" target="_blank"><img src={foto} alt="Pablo Senciales" class="rounded my-2" style={{width:"165px", border: "2px solid #ffa600"}}/></a>
                        <h3 tabIndex={0}>Pablo Senciales</h3>
                        <p tabIndex={0} style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti adipisci culpa labore! Blanditiis, minus? Obcaecati eius qui aspernatur quae. Maiores blanditiis veritatis, repudiandae voluptas alias aut. Doloribus tempore laudantium tempora!</p>
                    </div>

                    <div className="col">
                        <a href="" target="_blank"><img src={guillermo} alt="Guillermo Pichaco" class="rounded my-2" style={{width:"165px", border: "2px solid #ffa600"}}/></a>
                        <h3 tabIndex={0}>Guillermo Pichaco</h3>
                        <p tabIndex={0} style={{textAlign:"justify"}}>Estudiante de ingeniería del software en la Universidad de Málaga. Aficionado a los videojuegos, el deporte y la música.</p>
                    </div>

                    <div className="col">
                        <a href="https://github.com/ocxpke" target="_blank"><img src={joser} alt="Jose Ramirez Giron" class="rounded my-2" style={{width:"165px", border: "2px solid #ffa600"}}/></a>
                        <h3 tabIndex={0}>Jose Ramirez Giron</h3>
                        <p tabIndex={0} style={{textAlign:"justify"}}> 
                            Estudiante de ingeniería del software en la Universidad de Málaga. Siempre buscando aprender algo nuevo.
                        </p>
                    </div>
                </section>
            </div>
            
        </div>;
}

export default Credits;