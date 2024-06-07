import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function ListNewStudents(){
    return (
        <section>

            <h1>Dar de alta nuevo alumno</h1>

            <div style={{width:"95%"}} className="d-flex flex-row justify-content-around">
                <form style={{width:"75%", marginLeft:"10%"}} class="d-flex flex-column justify-content-center align-items-center border border-3 border-warning rounded">
                    <div class="form-group" style={{marginTop:"15px", width:"90%"}}>
                        <label for="studentName"><i>Nombre completo alumno</i></label>
                        <input type="text" class="form-control" id="studentName" aria-describedby="Student Name"/>
                    </div>

                    <div class="form-group my-1" style={{width:"90%"}}>
                        <label for="studentBirthDate"><i>Fecha naciemiento alumno</i></label>
                        <input type="text" class="form-control" id="studentBirthDate" aria-describedby="Student Birth Date"/>
                    </div>

                    <div class="form-group" style={{width:"90%"}}>
                        <label for="tutorName"><i>Nombre completo tutor</i></label>
                        <input type="text" class="form-control" id="tutorName" aria-describedby="Tutor Name"/>
                    </div>

                    <div class="form-group my-1" style={{width:"90%"}}>
                        <label for="tutorEmail"><i>Correo electronico tutor</i></label>
                        <input type="email" class="form-control" id="tutorEmail" aria-describedby="Tutor Email"/>
                    </div>

                    <div class="form-group" style={{width:"90%"}}>
                        <label for="presentacion"><i>Presentacion</i></label>
                        <textarea class="form-control" id="presentacion" rows="3"></textarea>
                    </div>

                    <section className="d-flex flex-column my-1" style={{width:"90%"}}>
                        <Button type="button" class="btn btn-primary" id="aceptarSolicitud" className="my-2">Aceptar nuevo alumno</Button>
                        <Button type="button" class="btn btn-danger" id="borrarSolicitud">Borrar solicitud de alumno</Button>
                    </section>
                    
                </form>

                <div style={{width:"25%", marginLeft:"10%"}}>
                    <h3><strong><i><u>Solicitudes de alumnos</u></i></strong></h3>
                    <ul style={{listStyleType:"none", paddingLeft:"10px", paddingTop:"5px", paddingBottom:"5px",margin:0, backgroundColor:"lightgrey"}} className="border border-2 border-secondary rounded">
                        <li>paco</li>
                        <li>paco</li>
                        <li>paco</li>
                        <li>paco</li>
                        <li>paco</li>
                    </ul>
                </div>

            </div>

            

        </section>
    );
}
export default ListNewStudents;