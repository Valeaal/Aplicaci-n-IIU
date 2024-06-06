import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Application(){

    const [message, setMessage] = useState("");
    
    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = () => {
        // Aquí puedes implementar el código para enviar el mensaje por correo electrónico
        const emailAddress = 'vinmaculadadireccion@gmail.com';
        const subject = '[WEB]';
        const emailBody = `${message}`;
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    }

    const stylePH = {
        width: "100%",
        height: 200
    }

    const styleButton = {
        width: '40%',
        margin: '2px'
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center align-self-center'>
                <textarea placeholder='Aquí puede mandar un mensaje usando el correo electrónico de la escuela.' style={stylePH} value={message} onChange={handleChange}></textarea>
                <Button aria-label='Enviar la sugerencia administración' variant="success" className='mt-2 mb-2' onClick={handleSubmit}>Enviar a administración</Button>
            </div>
        </>
    );

}

export default Application;
