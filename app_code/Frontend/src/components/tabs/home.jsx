import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from 'jwt-decode';
import Application from "../home/Application";
import Map from "../home/Map";
import News from "../home/News";
import Carroussel from "../home/Carroussel";



export default function Everyone() {

    const token = sessionStorage.getItem('token')   //Recuperamos el token
    let tipo = 'Everyone';
    if (token){ //Si el token está lo decodificamos y guardamos el tipo de usuario que ha iniciado sesión
        const tokenDecoded = jwt.jwtDecode(token);
        tipo = tokenDecoded.userType
        console.log(tipo)
    }
    

    return(
        <>
            <h1 style={{textAlign:"center"}}>Escuela Infantil Virgen Inmaculada</h1>
            <div className='d-flex flex-wrap'>

                <div className='d-flex flex-column' style={{width:'70%'}}>
                   <Carroussel/>
                    <div className='d-flex flex-sm-wrap  m-2'>
                        <section style={{width:"60%"}} className='d-flex justify-content-center'>
                            <Map/>
                        </section>
                        
                        <section style={{width:"40%"}}>
                            <Application/>
                        </section>
                        
                    </div>
                </div>

                <News style={{width:'30%'}}/>
            </div>
        </>
    )
}


