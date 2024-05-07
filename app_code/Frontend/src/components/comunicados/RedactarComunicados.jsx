import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function RedactarComunicados(){

    const stylePh={
        width:'70%',
        height:"300px"
        
    }

    const styleBu={
        width:'200px',
        marginTop:'5px'
    }

    return(
        <>
            <div className='d-flex flex-column justify-content-center mx-5 my-2'>

                <h1 style={{marginBottom:"10px"}}> <em> <u>Nuevo comunicado</u> </em> </h1>
                
                <section className='d-flex flex-row align-items-center'>
                    <h3 style={{marginRight:'10px', color:'dimgrey'}}>Destinatario:</h3>
                    <select name="destinatarioCom" id="destCom" style={{height:'70%'}}>
                        <option>Trabajador 1</option>
                        <option>Trabajador 2</option>
                        <option>Profe 1</option>
                        <option>Profe 2</option>
                        <option>Todos</option>
                    </select>
                </section>

                <h4 style={{color:'dimgrey'}}>Comunicado:</h4>

                <section className='d-flex flex-column justify-content-center'>
                    <textarea placeholder='Introduzca el comunicado que desea enviar.' id="textoCom" style={stylePh}></textarea>
                </section>
                
                <Button style={styleBu}>Enviar comunicado</Button>

            </div>
        </>
    );
}

export default RedactarComunicados;