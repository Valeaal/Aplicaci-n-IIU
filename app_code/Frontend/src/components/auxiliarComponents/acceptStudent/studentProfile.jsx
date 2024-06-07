import React from "react";

export default function StudentProfile(props) {
    
    const { id, nombreAlumno, DOBalumno, nombrePadre, handleClickReject, handleClickAccept } = props;

    const formattedDate = (dateString) => {
            const dateObject = new Date(dateString);
            return dateObject.toISOString().split('T')[0];
    };
    
    

    return (
        <div className="col-mb-4 col-md-5 col-lg-3 mt-3">
            <div className="card">
                <div className="col-auto"> {/* Columna que no ocupa todo el ancho */}
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="fatherName">Nombre del Padre:</label>
                                <span className="visually-hidden" tabIndex={0} aria-label={"Nombre del tutor"+nombrePadre}></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nombrePadre}
                                    disabled
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="studentName">Nombre del Alumno:</label>
                                <span className="visually-hidden" tabIndex={0} aria-label={"Nombre del Alumno:"+nombreAlumno}></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nombreAlumno}
                                    disabled
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label  htmlFor="dob">Fecha de nacimiento del alumno:</label>
                                <span className="visually-hidden" tabIndex={0} aria-label={"Fecha de nacimiento del alumno:"+formattedDate(DOBalumno)}></span>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={formattedDate(DOBalumno)}
                                    disabled
                                />
                            </div>
                            <div className="form-group d-flex justify-content-center mb-3">
                                <button type="submit" tabIndex={0} aria-label="Botón para aceptar" className="btn btn-primary mx-2" onClick={() => handleClickAccept(id)}>Aceptar</button>
                                <button type="submit" tabIndex={0} aria-label="Botón para rechazar, acción irreversible" className="btn btn-danger mx-2" onClick={() => handleClickReject(id)}>Rechazar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}