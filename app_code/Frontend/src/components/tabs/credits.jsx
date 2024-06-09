import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "../../images/user-profile.jpg";
import guillermo from "../../images/guillermo-userprofile.jpg";
import joser from "../../images/jose-userprofile.jpeg";
import pablo from "../../images/pablo-userprofile.png";
import alvaro from "../../images/alvaro-userprofile.jpeg";
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

  return (
    <div className="home-container">
      <h1>Escuela Infantil Virgen Inmaculada</h1>
      <hr className="borde mt-0"></hr>
      <section className="d-flex flex-column align-items-center">
        <h2>Página realizada para la asignatura de Interfaces de Usuario</h2>
        <br />
        <br />
        <h3>Participantes:</h3>
      </section>

      <div className="container-fluid text-center mt-2">
        <section className="row">
          <div className="col">
            <img
              tabIndex={0}
              src={alvaro}
              alt="Alvaro Valencia"
              className="rounded my-2"
              style={{ width: "165px", border: "2px solid #ffa600" }}
            />
            <h3 className="mt-2">Álvaro Valencia</h3>
            <p className="text-justify">
              Haciendo de scrum-master, analista de requisitos y jefe del front-end, estoy a su total disposición para sugerencias o solución de problemas respecto a esta aplicación web.
            </p>
            <p className="text-justify">
              Puedes contactarme usando mi correo electrónico:
              <br />
              <a href="mailto:alvavi2002@gmail.com">alvavi2002@gmail.com</a>
              <br />
              o mi LinkedIn:
              <br />
              <a href="https://www.linkedin.com/in/valeal" target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/valeal
              </a>
            </p>
          </div>

          <div className="col">
            <img
              tabIndex={0}
              src={pablo}
              alt="Pablo Senciales"
              className="rounded my-2"
              style={{ width: "165px", border: "2px solid #ffa600" }}
            />
            <h3 className="mt-2">Pablo Senciales</h3>
            <p className="text-justify">
              Estudiante de ingeniería del software en la Universidad de Málaga. Amante de las nuevas tecnologías.
            </p>
          </div>

          <div className="col">
            <img
              tabIndex={0}
              src={guillermo}
              alt="Guillermo Pichaco"
              className="rounded my-2"
              style={{ width: "165px", border: "2px solid #ffa600" }}
            />
            <h3 className="mt-2">Guillermo Pichaco</h3>
            <p className="text-justify">
              Estudiante de ingeniería del software en la Universidad de Málaga. Aficionado a los videojuegos, el deporte y la música.
            </p>
          </div>

          <div className="col">
            <img
              tabIndex={0}
              src={joser}
              alt="Jose Ramirez Giron"
              className="rounded my-2"
              style={{ width: "165px", border: "2px solid #ffa600" }}
            />
            <h3 className="mt-2">Jose Ramirez</h3>
            <p className="text-justify">
              Estudiante de ingeniería del software en la Universidad de Málaga. Siempre buscando aprender algo nuevo.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Credits;
