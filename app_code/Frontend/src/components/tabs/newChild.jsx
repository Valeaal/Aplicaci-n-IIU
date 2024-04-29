import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./login";


    //Esta página es privada y solo se mostrará si el usuario ha iniciado sesión
    //Cuando llamemos a esta pagina el navegador va a buscar a ver si tiene el token guardado en el estado
    //Una vez resulva el tema del token volverá a la página


    export default function newChild() {

    // Obtener el token de sessionStorage
    const tokenString = sessionStorage.getItem('token')
    

    // Si no hay token, redirigir al inicio de sesión
    if (!tokenString) {
        return <Login />;
    }

    // Si hay token, mostrar el contenido
    return (
        <div>
            <h1>Añadir nuevo niño</h1>
        </div>
    );
}


