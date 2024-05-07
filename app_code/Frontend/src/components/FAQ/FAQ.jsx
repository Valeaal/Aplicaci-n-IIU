import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ(){

    const sum ={
        fontSize: '50px'
    }

    return(
        <div className="d-flex flex-column mx-5 my-3" style={{width:'80%'}}>

            <h1 style={{marginBottom:"10px"}}> <em> <u>Dudas mas frecuentes sobre nuestra pagina web</u> </em> </h1>

            <details>
                <summary class="h2">¿Como puedo enviar un comunicado general?</summary>
                <p class="h5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod consequuntur nihil maiores, nisi, necessitatibus neque reprehenderit deserunt ea error repellendus cumque suscipit nam autem et. Necessitatibus suscipit ullam quibusdam?</p>
            </details>

            <details>
                <summary class="h2">¿Puedo registrar a mas de un hijo con la misma cuenta?</summary>
                <p class="h5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at explicabo recusandae porro esse, perspiciatis eius architecto adipisci quas iusto? Autem incidunt laborum aperiam quia asperiores aspernatur harum sequi odit!</p>
            </details>

            <details>
                <summary class="h2">¿Como puedo cambiar mi contraseña?</summary>
                <p class="h5 text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est enim, molestiae aliquid vero accusantium fugit quidem tempora soluta neque ullam molestias mollitia, excepturi itaque iste. Totam temporibus quas excepturi reiciendis.</p>
            </details>

            <details>
                <summary class="h2">¿Como puedo enviar un comunicado a un alumno en concreto?</summary>
                <p class="h5 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nisi mollitia error asperiores qui placeat ipsam. Quisquam delectus numquam doloremque ab quidem aut dolore cumque, aliquid voluptate possimus asperiores nobis.</p>
            </details>
        </div>
    );
}

export default FAQ;