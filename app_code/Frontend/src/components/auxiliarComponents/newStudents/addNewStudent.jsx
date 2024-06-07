import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const AddNewAccount= () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const [nomAlu, setNomAlu] = useState("");
    const [fecAlu, setFecAlu] = useState("");
    const [rol, setRol] = useState("");

    const [error, setError] = useState(""); // ???
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            setError("Formato de correo incorrecto");
            return;
        }

        if(rol===""){
            setError("Rol no seleccionado");
            return;
            
        }

        if(rol==="Padre/Madre"){
            if(nomAlu===""||fecAlu===""){
                setError("Completar los datos del hijo");
                return;
            }
        }

        try {
            console.log("usu="+username);
            console.log("dni="+dni);
            console.log("email="+email);
            console.log("nomA="+nomAlu);
            console.log("fecA="+fecAlu);
            console.log("con="+password);
            console.log("rol="+rol);

            const token = await usuarioService.createUser({username,email, rol, password});

            if (!token || typeof token !== 'string') {
                setError("Error del servidor, no se puede crear el usuario actualmente");
            } else {
                const decodedToken = jwt.jwtDecode(token);
                const currentTime = Math.floor(Date.now() / 1000);
                if (decodedToken.exp && decodedToken.exp < currentTime) {
                    setError("La sesión ha expirado. Por favor, inicia sesión nuevamente.");
                } else {
                    Swal.fire({
                        title: "Has creado el usuario correctamente",
                        text: "Las credenciales son correctas. Has creado el usuario",
                        icon: "success"
                    });
                    sessionStorage.setItem("token", token);
                    navigate("/"); 
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

    return (
        <section>

            <h1>Añadir nuevo alumno</h1>

            <div style={{width:"95%"}} className="d-flex flex-row justify-content-around">
                <form onSubmit={handleSubmit} style={{width:"75%", marginLeft:"10%"}} className="d-flex flex-column justify-content-center align-items-center border-top border-3 border-warning">
                    <div className="form-group" style={{marginTop:"15px", width:"90%"}}>
                        <label for="tutorName"><i>Nombre completo*</i></label>
                        <input type="text" className="form-control" id="tutorName" 
                        aria-describedby="Student Name"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        required/>
                    </div>

                    <div className="form-group" style={{marginTop:"15px", width:"90%"}}>
                        <label for="tutorDni"><i>DNI*</i></label>
                        <input type="text" className="form-control" id="tutorDni" 
                        value={dni} onChange={(e) => setDni(e.target.value)}
                        aria-describedby="Tutor Identity" required/>
                    </div>

                    <div className="form-group my-1" style={{width:"90%"}}>
                        <label for="tutorEmail"><i>Correo electronico*</i></label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="tutorEmail" aria-describedby="Tutor Email" required/>
                    </div>

                    <div className="form-group" style={{width:"90%"}}>
                        <label for="studentName"><i>Nombre completo alumno</i></label>
                        <input type="text" className="form-control" id="studentName" 
                        value={nomAlu} onChange={(e) => setNomAlu(e.target.value)}
                        aria-describedby="Student Name"/>
                    </div>

                    <div className="form-group my-1" style={{width:"90%"}}>
                        <label for="studentBirthDate"><i>Fecha naciemiento alumno</i></label>
                        <input type="text" className="form-control" id="studentBirthDate" 
                        value={fecAlu} onChange={(e) => setFecAlu(e.target.value)}
                        aria-describedby="Student Birth Date"/>
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
                                <p><strong>Rol*:</strong></p>
                            </div>

                            <div className="col p-0 text-start">
                                <input type="checkbox" id="parents" onChange={() => setRol("Padre/Madre")}/>
                                <label className="form-check-label" for="parents">Padre/Madre</label>
                            </div>
                        
                            <div className="col p-0">
                                <input type="checkbox" id="worker" onChange={() => setRol("Personal")}/>
                                <label className="form-check-label" for="worker">Personal</label>
                            </div>
                        
                            <div className="col p-0">
                                <input type="checkbox" id="admin" onChange={() => setRol("Administrador")}/>
                                <label className="form-check-label" for="admin">Administrador</label>
                            </div>
                        </section>
                        
                    </div>

                    <section className="d-flex flex-column my-1" style={{width:"90%"}}>
                        <Button type="submit" className="btn btn-success" id="aceptarSolicitud" style={{marginBottom:"7px"}}>Aceptar nuevo alumno</Button>
                        <Button type="button" className="btn btn-warning" id="borrarSolicitud">Borrar solicitud de alumno</Button>
                        {error && <p className="alert alert-danger mt-3 text-center">{error}</p>}
            
                    </section>
                    
                </form>

                

            </div>

            
        </section>
    );
}
export default AddNewAccount;