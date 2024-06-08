import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as jwt from 'jwt-decode';
import Swal from 'sweetalert2';
import * as usuarioService from '../../../services/usuarioService';
import * as alumnoService from '../../../services/alumnoService';




const AddNewAccount= () => {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [childName, setNomAlu] = useState("");
    const [childDOB, setFecAlu] = useState("");
    const [tipo, seTipo] = useState("");
    const [disabled, setDisabled] = useState(false);

    const [error, setError] = useState(""); // ???
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            setError("Formato de correo incorrecto");
            return;
        }

        if(tipo===""){
            setError("tipo no seleccionado");
            return;
            
        }

        if(tipo==="3"){
            if(childName===""||childDOB===""){
                setError("Completar los datos del hijo");
                return;
            }
        }

        try {
            
            if(tipo === "3"){
                const res = await usuarioService.createUser({nombre, email, tipo, password});
                
                if (res.data.errors===undefined) {
                    Swal.fire({
                        title: "Usuario creado",
                        text: "Las credenciales son correctas. Has creado el usuario",
                        icon: "success"
                    });
                    //cambiar por userId verdadero
                    const userId=1;
                    const res1 = await alumnoService.RegisterChild({childName,childDOB,userId});
                }else{
                    Swal.fire({
                        title: "El usuario no ha sido creado",
                        text: "Las credenciales no son correctas.No has creado el usuario",
                        icon: "error"
                    });
                    setError("Error al registrar nuevo usuario");
                }
                
            }else{
                const res = await usuarioService.createUser({nombre, email, tipo, password});
                if (res.data.errors===undefined) {
                    Swal.fire({
                        title: "Usuario creado",
                        text: "Las credenciales son correctas. Has creado el usuario",
                        icon: "success"
                    });
                }else{
                    Swal.fire({
                        title: "El usuario no ha sido creado",
                        text: "Las credenciales no son correctas.No has creado el usuario",
                        icon: "error"
                    });
                    setError("Error al registrar nuevo usuario");
                }
            }

        } catch (error) {
            console.error("Error al registrar usuario:", error);

            //Este mensaje de error existe??
            if (error.response && error.response.data.error === 'Correo existente') {
                setError("El correo electrónico ya existe.");
            } else {
                setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
            }
        }
    };
    
    
    const studentInput = () =>{
        if(tipo!=="3"){
            setDisabled(true);
            setNomAlu("");
            setFecAlu("");
        }else{
            setDisabled(false);
        }
    }


    useEffect(() => {
        studentInput();
    }, [tipo]);


    return (
        <section>

            <h1>Añadir nuevo usuario</h1>

            <div style={{width:"95%"}} className="d-flex flex-row justify-content-around">
                <form onSubmit={handleSubmit} style={{width:"75%", marginLeft:"10%"}} className="d-flex flex-column justify-content-center align-items-center border-top border-3 border-warning">
                    <div className="form-group" style={{marginTop:"15px", width:"90%"}}>
                        <label for="tutornombre"><i>Nombre completo*</i></label>
                        <input type="text" className="form-control" id="tutornombre" 
                        aria-describedby="Student nombre"
                        value={nombre} onChange={(e) => setNombre(e.target.value)}
                        required/>
                    </div>

                    <div className="form-group my-1" style={{width:"90%"}}>
                        <label for="tutorEmail"><i>Correo electronico*</i></label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="tutorEmail" aria-describedby="Tutor Email" required/>
                    </div>

                    <div className="form-group" style={{width:"90%"}}>
                        <label for="studentnombre"><i>Nombre completo alumno</i></label>
                        <input disabled={disabled} type="text" className="form-control" id="studentnombre" 
                        value={childName} onChange={(e) => setNomAlu(e.target.value)}
                        aria-describedby="Student nombre"/>
                    </div>

                    <div className="form-group my-1" style={{width:"90%"}}>
                        <label tabIndex={0} htmlFor="fecAlu">Fecha de Nacimiento del alumno:</label>
                        <input tabIndex={0}
                            disabled={disabled}
                            type="date"
                            className="form-control"
                            value={childDOB}
                            onChange={(e) => setFecAlu(e.target.value)}
                        />
                    </div>

                    <div className="form-group mb-4" style={{width:"90%"}}>
                        <label tabIndex={0} className="mb-1" aria-label="Etiqueta de contraseña"><i>Contraseña*</i></label>
                        <div className="input-group">
                            <input tabIndex={0}
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label="Campo de contraseña"
                                required
                            />
                            <button tabIndex={0}
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div> 

                    <div className="container form-check justify-content-start" style={{width:"90%", padding:0}}>
                        <section className="row">
                            <div className="col-2" style={{marginRight:"3px"}}>
                                <p><strong>tipo*:</strong></p>
                            </div>

                            <div className="col p-0 text-start">
                                <input name="tipo" type="radio" id="parents" onChange={() => seTipo("3")}/>
                                <label className="form-check-label" for="parents">Padre/Madre</label>
                            </div>
                        
                            <div className="col p-0">
                                <input name="tipo" type="radio" id="worker" onChange={() => seTipo("2")}/>
                                <label className="form-check-label" for="worker">Personal</label>
                            </div>
                        
                            <div className="col p-0">
                                <input name="tipo" type="radio" id="admin" onChange={() => seTipo("1")}/>
                                <label className="form-check-label" for="admin">Administrador</label>
                            </div>
                        </section>
                        
                    </div>

                    <section className="d-flex flex-column my-1" style={{width:"90%"}}>
                        <Button  type="submit" className="btn btn-success w-25" id="aceptarSolicitud" style={{marginBottom:"7px"}}>Aceptar nuevo alumno</Button>
                        <Button type="button" className="btn btn-warning w-25" id="borrarSolicitud">Borrar solicitud de alumno</Button>
                        {error && <p className="alert alert-danger mt-3 text-center">{error}</p>}
            
                    </section>
                </form>
            </div>
        </section>
    );
}
export default AddNewAccount;