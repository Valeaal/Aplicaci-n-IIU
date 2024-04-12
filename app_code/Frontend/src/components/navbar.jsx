import React, { useEffect } from 'react';
import { useLocation, NavLink} from 'react-router-dom';


import '../styles/navbar.css';

export default function Navbar(){

    const UbicacionAct = useLocation(); //Ruta actual en la que se está usando el navbar

    
    /* Como esto tiene que ser responsivo, propongo introducir aqui el codigo html para
    importar el navbar de Bootstrap */
    
   return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   )
   
    

}