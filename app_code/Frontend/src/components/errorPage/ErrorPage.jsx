import React from "react";
import foto from "./bebe.jpg"

function ErrorPage(){
    return(
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-row mx-5 my-2 align-items-center">
            <section className="d-flex flex-column mx-2">
                <h2>404. Pagina no encontrada</h2>
                    <p>
                        La URL a la que se ha intentado acceder no existe <br></br> por favor vuelva a la pagina anterior, o contacte con administracion.
                    </p>
                </section>
                <img src={foto}></img>
            </div>
        </div>
        
    );
}

export default ErrorPage;