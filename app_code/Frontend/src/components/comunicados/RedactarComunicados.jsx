import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RedactarComunicados(){

    const stylePh={
        width:'70%',
        height:"300px"
        
    }

    const styleBu={
        width:'150px',
        marginTop:'5px'
    }

    return(
        <>
            <div className='d-flex flex-column justify-content-center m-5'>

                <h1>Nuevo comunicado</h1>
                
                <section className='d-flex flex-row align-items-center'>
                    <p style={{marginRight:'5px'}}>Destinatario:</p>
                    <select name="destinatarioCom" id="destCom" style={{height:'70%'}}>
                        <option>Trabajador 1</option>
                        <option>Trabajador 2</option>
                        <option>Profe 1</option>
                        <option>Profe 2</option>
                    </select>
                </section>

                <p>Comuniado:</p>

                <section className='d-flex flex-column justify-content-center'>
                    <textarea placeholder='aaaa' id="textoCom" style={stylePh}></textarea>
                </section>
                
                <button style={styleBu}>Enviar comunicado</button>

            </div>
        </>
    );
}

export default RedactarComunicados;