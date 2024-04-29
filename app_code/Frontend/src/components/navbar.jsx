import React from 'react';
import { useLocation, NavLink, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import * as jwt from 'jwt-decode'

// Importamos los estilos
import '../styles/navbar.css';

const Navbar = () => {
  const ubicacionActual = useLocation(); // Ruta actual en la que se está usando el navbar



  // Obtener el token de sessionStorage. Este token se decodifica para ver sus parámetros como el usertype
  const token = sessionStorage.getItem('token')

  
  const esAdmin = () => {
    if (token){   //Si hay token
      const tokenDecoded = jwt.jwtDecode(token);  //Lo decodificamos
      if(tokenDecoded.userType == 1){ //Comprobamos si corresponde mostrar los botones
        return true;
      }
    }
    return false;
  };


   const esWorker = () => {
    if (token){   //Si hay token
      const tokenDecoded = jwt.jwtDecode(token);  //Lo decodificamos
      if(tokenDecoded.userType == 2){ //Comprobamos si corresponde mostrar los botones
        return true;
      }
    }
    return false;
  };

  
  const esParent = () => {
    if (token){   //Si hay token
      const tokenDecoded = jwt.jwtDecode(token);  //Lo decodificamos
      if(tokenDecoded.userType == 3){ //Comprobamos si corresponde mostrar los botones
        return true;
      }
    }
    return false;
  };


// Función para renderizar el mensaje de inicio de sesión
const renderizarMensajeSesion = () => {
  if (token) {
    const tokenDecoded = jwt.jwtDecode(token);
    
    return (
      <span>Has iniciado sesión como el usuario {tokenDecoded.userId}</span>
    );
  } else {
    return <span>Login</span>;
  }
};



  //Aquí comienza el componente navbar como tal, lo de antes eran funciones auxiliares para manejar su logica,
  //ya que este componente se usa en todas las paginas

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-end w-100">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact to={"/"} activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              {(esParent() || esWorker()) && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/comunicados" activeClassName="active">
                    Comunicados
                  </NavLink>
                </li>
              )}
              {(esParent() || esWorker()) && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/appointment" activeClassName="active">
                    Pedir Cita
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/newChild" activeClassName="active">
                  Nuevo Alumno
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/conocenos" activeClassName="active">
                  Conócenos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/creditos" >
                  Créditos
                </NavLink>
              </li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:'10px' } }>
              <NavLink className="nav-link" to="/login" activeClassName="active">
                {renderizarMensajeSesion()}
                <span style={{ marginLeft: '0.5em'}}>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </NavLink>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
