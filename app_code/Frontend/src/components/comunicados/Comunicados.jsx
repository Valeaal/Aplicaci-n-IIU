import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComunModel from './ComunModel';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { jwtDecode } from "jwt-decode";


function Comunicados(){

    const navigate = useNavigate();

    // Obtener el token de sessionStorage
    const tokenString = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(tokenString);
    if (!tokenString){
        navigate("/login");
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
                    {comun.map((item) => (
                      <li key={item}>{item}</li>
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