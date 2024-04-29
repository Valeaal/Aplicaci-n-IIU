import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";

    //Esta página es privada y solo se mostrará si el usuario ha iniciado sesión
    //Cuando llamemos a esta pagina el navegador va a buscar a ver si tiene el token guardado en el estado
    //Una vez resulva el tema del token volverá a la página

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken))
}
 

function getToken() {
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
} 



export default function Everyone() {
    const token = getToken()

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


