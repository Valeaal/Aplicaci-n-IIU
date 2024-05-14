import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Application(){

    const stylePH = {
        width:"100%",
        height:200
    }

    const styleButton = {
        width:'40%', 
        margin:'2px'
    }

    return(
        <>
            <div className='d-flex flex-column align-items-center align-self-center'>
                <textarea placeholder='Aquí puede mandar un mensaje. Por favor, escriba su nombre para saber quién es el emisor.' style={stylePH}></textarea>
                <Button variant="success" className='mt-2'>Enviar a administración</Button>
            </div>
        </>
    );

}

export default Application;