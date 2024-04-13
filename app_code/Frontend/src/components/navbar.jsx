import React from 'react';
import { useLocation, NavLink, Navigate } from 'react-router-dom';

// Importamos los estilos
import '../styles/navbar.css';

const Navbar = () => {
  const ubicacionActual = useLocation(); // Ruta actual en la que se está usando el navbar

  // Función para determinar la ruta a la que nos llevará el botón "Inicio"
  const getRutaInicio = () => {
    const { pathname } = ubicacionActual;

    // Verifica si la ubicación actual comienza con '/everyone', '/parents' o '/worker'
    if (pathname.startsWith('/everyone')) {
      return '/everyone';
    } else if (pathname.startsWith('/parents')) {
      return '/parents';
    } else if (pathname.startsWith('/worker')) {
      return '/worker';
    } else if (pathname.startsWith('/admin')) {
      return '/admin';
    } else {
      return '/';
    }
  };

  // Determinar si mostrar los botones "Comunicados" y "Pedir Cita"
  const situadoParentsWorker = () => {
    const { pathname } = ubicacionActual;
    return pathname.startsWith('/parents') || pathname.startsWith('/worker');
  };

  // Función para determinar la ruta de "Pedir Cita" según la ubicación actual
  const getRutaPedirCita = () => {
    const { pathname } = ubicacionActual;

    // Si estamos en la ruta '/parents', devuelve la ruta '/parents/appointment'
    if (pathname.startsWith('/parents')) {
      return '/parents/appointment';
    }

    // Si estamos en la ruta '/worker', devuelve la ruta '/worker/appointment'
    if (pathname.startsWith('/worker')) {
      return '/worker/appointment';
    }

    // Por defecto, no redirige a ninguna ruta específica si no estamos en '/parents' o '/worker'
    return '/'; // Puedes ajustar esto según tus necesidades
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to={getRutaInicio()} activeClassName="active">
                Inicio
              </NavLink>
            </li>
            {situadoParentsWorker() && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/comunicados" activeClassName="active">
                  Comunicados
                </NavLink>
              </li>
            )}
            {situadoParentsWorker() && (
              <li className="nav-item">
                <NavLink className="nav-link" to={getRutaPedirCita()} activeClassName="active">
                  Pedir Cita
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/nuevo-alumno" activeClassName="active">
                Nuevo Alumno
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/conocenos" activeClassName="active">
                Conócenos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/creditos" activeClassName="active">
                Créditos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
