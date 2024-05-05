import React, { useState, useEffect } from "react";
import StudentProfile from "./studentProfile";
import * as alumnoService from '../../../services/alumnoService';
import * as usuarioService from '../../../services/usuarioService';
import Swal from 'sweetalert2';


export default function AddStudent() {
    // Estado para almacenar los datos de los alumnos
    const [alumnos, setAlumnos] = useState([]);

    // Llama a la función para obtener los datos de los alumnos cuando el componente se monta
    const getAlumnos = async () => {
        try {
            const alumnosData = await alumnoService.getAllNotDefinitive();
            const alumnosWithPadres = await Promise.all(alumnosData.data.map(async (alumno) => {
                let padre = await usuarioService.getUsuarioById(alumno.padreId);
                padre = padre.data;
                return { ...alumno, padre: padre.nombre };
            }));
            setAlumnos(alumnosWithPadres);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getAlumnos();
    }, []);

    const handleClickAccept = async (idAlumno) => {
        try {
            Swal.fire({
                title: "¿Estás seguro aceptar al alumno?",
                text: "Lo podrás borrar más tarde",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, aceptar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await alumnoService.acceptAlumno(idAlumno);

                    Swal.fire({
                        title: "¡Alumno aceptado!",
                        text: "",
                        icon: "success"
                    });
                }
                getAlumnos();
            });


        } catch (error) {
            console.error("Error al aceptar al alumno:", error);
        }
    };



    const handleClickReject = async (idAlumno) => {
        try {
            Swal.fire({
                title: "¿Estás seguro de rechazar al alumno?",
                text: "No podrás recuperlo después",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, rechazar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await alumnoService.deleteById(idAlumno);
                    Swal.fire({
                        title: "Alumno rechazado",
                        text: "",
                        icon: "success"
                    });
                }
                getAlumnos();
            });

        } catch (error) {
            console.error("Error al rechazar al alumno:", error);
        }
    };
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h1 className="text-center mb-4">Solicitudes de ingresos de nuevos estudiantes</h1>
                    {/* Verifica si hay alumnos en la lista */}
                    {alumnos.length === 0 ? (
                        // Si no hay alumnos, muestra un mensaje indicando que no hay nuevos alumnos por añadir
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title text-success">¡No hay nuevos alumnos por añadir!</h5>
                                <p className="card-text mt-4">En este momento no hay solicitudes de ingreso pendientes.</p>
                                <p className="card-text">Cuando alquien solicite el ingreso, podrás aceptarlo aquí</p>
                            </div>
                        </div>
                    ) : (
                        // Si hay alumnos, mapea sobre los datos de los alumnos y crea un componente StudentProfile por cada uno
                        <div className="row justify-content-center">
                            {alumnos.map((alumno) => (
                                <StudentProfile
                                    key={alumno.id} // Agrega la prop key para evitar advertencias en React
                                    alumnoId={alumno.id}
                                    nombrePadre={alumno.padre}
                                    nombreAlumno={alumno.nombre}
                                    DOBalumno={alumno.fecha_nac}
                                    handleClickAccept={handleClickAccept}
                                    handleClickReject={handleClickReject}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
}
