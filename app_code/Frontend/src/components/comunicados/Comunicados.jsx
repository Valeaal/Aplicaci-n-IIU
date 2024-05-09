import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComunModel from './ComunModel';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { jwtDecode } from "jwt-decode";
import * as comunicadoService from "../../services/comunicadoService";



function Comunicados(){

    const navigate = useNavigate();
    const [enviados, setEnviados] = useState([]);
    const [recibidos, setRecibidos] = useState([]);
    
    // Obtener el token de sessionStorage
    const tokenString = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(tokenString);
    const id = decodedToken.userId;
    if (!tokenString){
        navigate("/login");
    }


    useEffect(() => {
        getComunicados();
    }, []);

    const getComunicados = async ()=>{
    //Esta funcion me recupera todos los comunicados recibidos
    const comunicadosRecibidos = await comunicadoService.getRecibidos(id);
    //esta todos los comunicados enviados, se puede acceder al JSON con comunicadosEnviados.data,
    const comunicadosEviados = await comunicadoService.getEnviados(id);
    
    setEnviados(comunicadosEviados.data);
    setRecibidos(comunicadosRecibidos.data);

    /*Lo he encapsulado en una funcion asyncrona, si se sacan fuera, habria que poner la notacion en la cabeza de la funcion
    comunicados, esto genera un fallo al pasar objetos promesa donde quiera que se llame a Comunicados()*/ 
    }

    const [comun, newComun] = useState([]);
    const agregarElemento = () => {
        const newC = <ComunModel/>;
        const c = [...comun, newC];
        newComun(c);
    };

    
    const redactarComun = () => {
        navigate("/redactarComunicado");
    }

    return(
        <div class="d-flex justify-content-center">
            <div class='d-flex flex-column' style={{width:'80%'}}>
                <h1 style={{textAlign:'center'}}>Comunicados</h1>
                <ul style={{listStyle:"none", padding:0}} className='border border-dark' id='comunList'>
                {recibidos.map((item) => (
                      <li>{item.mensaje}</li>
                    ))}
                {enviados.map((item) => (
                      <li>{item.mensaje}</li>
                    ))}
                </ul>

                <div class='d-flex justify-content-between'>
                    <Button onClick={()=> redactarComun()}>Redactar comunicados</Button>  
                    <Button variant="info" onClick={()=> agregarElemento()}>Add</Button>
                </div>
            
            </div>
        </div>
        
        
    );

    
}

export default Comunicados;