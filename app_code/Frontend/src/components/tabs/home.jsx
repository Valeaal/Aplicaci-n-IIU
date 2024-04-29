import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from 'jwt-decode'



export default function Everyone() {

    const token = sessionStorage.getItem('token')   //Recuperamos el token
    let tipo = 'Everyone';
    if (token){ //Si el token está lo decodificamos y guardamos el tipo de usuario que ha iniciado sesión
        const tokenDecoded = jwt.jwtDecode(token);
        tipo = tokenDecoded.userType
        console.log(tipo)
    }
    

    return(
        <div>
            <h1>Pagina de inicio</h1>
            <h2>Usuario tipo: {tipo}</h2>
        </div>
    )
}


