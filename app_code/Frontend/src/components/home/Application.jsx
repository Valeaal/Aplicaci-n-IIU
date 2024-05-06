import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Application(){

    const stylePH = {
        width:"80%",
        height:250
    }

    const styleButton = {
        width:'40%', 
        margin:'2px'
    }

    return(
        <>
            <div className='d-flex flex-column align-items-center align-self-center'>
                <textarea placeholder='aaaa' style={stylePH}></textarea>
                <Button style={styleButton}>Send</Button>
            </div>
        </>
    );

}

export default Application;