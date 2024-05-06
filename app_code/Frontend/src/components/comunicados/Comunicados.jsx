import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComunModel from './ComunModel';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

function Comunicados(){

    const [comun, newComun] = useState([]);
    const agregarElemento = () => {
        const newC = <ComunModel/>;
        const c = [...comun, newC];
        newComun(c);
    };

    const navigate = useNavigate();

    const redactarComun = () => {
        navigate("/redactarComunicado");
    }

    return(
        <>
            <div>
                <h1>Comunicados</h1>
                <ul style={{listStyle:"none", padding:0}} className='border border-dark' id='comunList'>
                    {comun.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <button onClick={()=> redactarComun()}>Redactar comunicados</button>
                
                <button onClick={()=> agregarElemento()}>a</button>
            </div>
        </>
    );

    
}

export default Comunicados;