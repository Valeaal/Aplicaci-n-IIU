import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";


export default function Everyone() {

    //Esta página es privada y solo se mostrará si el usuario ha iniciado sesión
    //Cuando llamemos a esta pagina el navegador va a buscar a ver si tiene el token guardado en el estado
    //Una vez resulva el tema del token volverá a la página
    const [token, setToken] = useState()
    if(!token){
        sessionStorage.setItem("redirectPath", window.location.pathname); // Almacena la ubicación actual antes de redirigir al inicio de sesión para luego volver a esta página
        {return <Login setToken={setToken}/>} //Ahora, en el componente Login, puedes acceder a la función setToken a través de las props que recibe.
    }

    return(
        <div>
            <h1>Añadir nuevo niño</h1>
        </div>
    )
}


