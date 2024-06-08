import React from 'react';
import { useLocation, NavLink, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import * as jwt from 'jwt-decode'

// Importamos los estilos
import '../styles/navbar.css';

const Navbar = () => {
  const ubicacionActual = useLocation(); // Ruta actual en la que se está usando el navbar



  // Obtener el token de sessionStorage. Este token se decodifica para ver sus parámetros como el usertype
  const token = sessionStorage.getItem('token')

  const esNotUser = () => {
    return !token;
  }

  const esAdmin = () => {
    if (token) {   //Si hay token
      const tokenDecoded = jwt.jwtDecode(token);  //Lo decodificamos
      if (tokenDecoded.userType == 1) { //Comprobamos si corresponde mostrar los botones
        return true;
      }
    }
    return false;
  };


  const esWorker = () => {
    if (token) {   //Si hay token
      const tokenDecoded = jwt.jwtDecode(token);  //Lo decodificamos
      if (tokenDecoded.userType == 2) { //Comprobamos si corresponde mostrar los botones
        return true;
      }
    }
    return false;
  };


  const esParent = () => {
    if (token) {   //Si hay token
      const tokenDecoded = jwt.jwtDecode(token);  //Lo decodificamos
      if (tokenDecoded.userType == 3) { //Comprobamos si corresponde mostrar los botones
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

  const handleLogoutClick = () => {
    sessionStorage.clear();
    Swal.fire({
      title: "Sesión cerrada",
      text: "Se ha cerrado la sesión con éxito",
      icon: "success",
      confirmButtonColor: "#3085d6",
})
    return;
  }


  //Aquí comienza el componente navbar como tal, lo de antes eran funciones auxiliares para manejar su logica,
  //ya que este componente se usa en todas las paginas

  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar" role="navigation" aria-label="Barra de navegación principal">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" role="menubar" aria-label="Pestañas navegables">
                <li className="nav-item">
                  <NavLink tabIndex={0} className="nav-link" to="/home" activeClassName="active">
                    Inicio
                  </NavLink>
                </li>
                {(esParent() || esWorker() || esAdmin()) && (
                  <li className="nav-item">
                    <NavLink  tabIndex={0} className="nav-link" to="/statements" activeClassName="active">
                      Comunicados
                    </NavLink>
                  </li>
                )}
                {(esAdmin()) && (
                  <li className="nav-item">
                    <NavLink tabIndex={0} className="nav-link" to="/acceptStudents" activeClassName="active">
                      Aceptar alumno
                    </NavLink>
                  </li>
                )}
                {(esAdmin()) && (
                  <li className="nav-item">
                    <NavLink tabIndex={0} className="nav-link" to="/editAccounts" activeClassName="active">
                      Editar cuentas
                    </NavLink>
                  </li>
                )}
                {(esParent() || esWorker() || esAdmin() || esNotUser()) && (
                  <li className="nav-item">
                    <NavLink tabIndex={0} className="nav-link" to="/schedule" activeClassName="active">
                      Horarios
                    </NavLink>
                  </li>
                )}
                {(esParent() || esWorker()) && (
                  <li className="nav-item">
                    <NavLink tabIndex={0} className="nav-link" to="/appointment" activeClassName="active">
                      Pedir Cita
                    </NavLink>
                  </li>
                )}
                {(esParent() || esNotUser()) && (
                  <li className="nav-item">
                    <NavLink tabIndex={0} className="nav-link" to="/newChild" activeClassName="active">
                      Nuevo Alumno
                    </NavLink>
                  </li>
                )}
                {(esAdmin()) && (
                  <li className="nav-item">
                    <NavLink  tabIndex={0} className="nav-link" to="/writeNew" activeClassName="active">
                      Redactar noticias
                    </NavLink>
                  </li>
                )}
                {(esAdmin()) && (
                  <li className="nav-item">
                    <NavLink tabIndex={0} className="nav-link" to="/manageAppointments" activeClassName="active">
                      Gestionar citas
                    </NavLink>
                  </li>
                )}
                <li className="nav-item">
                  <NavLink tabIndex={0} className="nav-link" to="/credits" >
                    Créditos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink tabIndex={0} className="nav-link" to="/userHelp" activeClassName="active">
                    Ayuda
                  </NavLink>
                </li>
              </ul>
              {(esNotUser()) && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                <NavLink aria-label="Iniciar sesión∫" tabIndex={0} className="nav-link" to="/login" activeClassName="active">
                  Login
                  <span style={{ marginLeft: '0.5em' }}>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </NavLink>
              </div>)}
              {(!esNotUser()) && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                <NavLink tabIndex={0} aria-label='Cerrar sesión' className="nav-link" to="/login" activeClassName="active" onClick={handleLogoutClick}>
                  Logout
                  <span style={{ marginLeft: '0.5em' }}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </span>
                </NavLink>
              </div>)}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
  
};

export default Navbar;
