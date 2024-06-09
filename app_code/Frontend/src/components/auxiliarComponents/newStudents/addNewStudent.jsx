import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';
import * as usuarioService from '../../../services/usuarioService';
import * as alumnoService from '../../../services/alumnoService';




const AddNewAccount = () => {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [childName, setNomAlu] = useState("");
    const [childDOB, setFecAlu] = useState("");
    const [tipo, seTipo] = useState("");
    const [curso, setCurso] = useState("0");
    const [disabled, setDisabled] = useState(false);
    const [disabledCurso, setDisabledCurso] = useState(false);

    const [error, setError] = useState(""); // ???
    const [showPassword, setShowPassword] = useState(false);


    const token = sessionStorage.getItem('token');
    if (!token) {
        navigate("/login");
    } else {
        const decodedToken = jwtDecode(token);
        if (decodedToken.userType !== 1) {
            navigate("/error");
        }
        const id = decodedToken.userId;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(email)) {
            setError("Formato de correo incorrecto");
            return;
        }

        if (tipo === "") {
            setError("tipo no seleccionado");
            return;

        }

        if (tipo === "3") {
            if (childName === "" || childDOB === "") {
                setError("Completar los datos del hijo");
                return;
            }
        }

        try {

            Swal.fire({
                title: "¿Estás seguro de crear al usuario?",
                text: "Lo podrás borrar más tarde",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, aceptar",
                confirmButtonAriaLabel: "Botón para crear al usuario",
                cancelButtonText: "No, cancelar",
                cancelButtonAriaLabel: "Botón para no crear al usuario"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    if(tipo!=="2")
                        setCurso(null);
                    if (tipo === "3") {
                        await usuarioService.createUser({ nombre, email, tipo, password })
                            .then(async (data) => {
                                console.log(data.data);
                                const userId = data.data.id;
                                const definitivo = 1;
                                console.log("\nID " + userId + "\n");
                                const alumno = await alumnoService.RegisterChild({ childName, childDOB, userId, definitivo });

                                if (alumno) {
                                    Swal.fire({
                                        title: "Usuario y alumno creado",
                                        text: "Las credenciales son correctas.",
                                        icon: "success"
                                    });
                                } else {
                                    Swal.fire({
                                        title: "El usuario no ha sido creado",
                                        text: "Las credenciales no son correctas.No has creado el usuario",
                                        icon: "error"
                                    });
                                    setError("Error al registrar nuevo usuario");
                                }

                            });


                    } else {
                        const res = await usuarioService.createUser({ nombre, email, tipo, password, curso });
                        console.log(res.data);
                        if (res.data.errors === undefined) {
                            Swal.fire({
                                title: "Usuario creado",
                                text: "Las credenciales son correctas. Has creado el usuario",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "El usuario no ha sido creado",
                                text: "Las credenciales no son correctas.No has creado el usuario",
                                icon: "error"
                            });
                            setError("Error al registrar nuevo usuario");
                        }
                    }
                    navigate("/editAccounts");
                }
            });
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


    const studentInput = () => {
        if (tipo !== "3") {
            setDisabled(true);
            setNomAlu("");
            setFecAlu("");
        } else {
            setDisabled(false);
        }

        if (tipo !== "2") {
            setDisabledCurso(true);
        } else {
            setDisabledCurso(false);
        }
    }


    useEffect(() => {
        studentInput();
    }, [tipo]);


    return (
        <section>

            <h1>Añadir nuevo usuario</h1>
            <hr></hr>
            <div style={{ width: "95%" }} className="d-flex flex-row justify-content-around">
                <form onSubmit={handleSubmit} style={{ width: "75%", marginLeft: "10%" }} className="d-flex flex-column justify-content-center align-items-left">
                    <div className="form-group" style={{ marginTop: "15px", width: "90%" }}>
                        <label for="tutornombre"><i>Nombre completo*</i></label>
                        <input tabIndex={0} type="text" className="form-control" id="tutornombre"
                            aria-describedby="Student nombre"
                            value={nombre} onChange={(e) => setNombre(e.target.value)}
                            required />
                    </div>

                    <div className="form-group my-1" style={{ width: "90%" }}>
                        <label for="tutorEmail"><i>Correo electronico*</i></label>
                        <input tabIndex={0} type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="tutorEmail" aria-describedby="Tutor Email" required />
                    </div>

                    <div className="form-group" style={{ width: "90%" }}>
                        <label for="studentnombre"><i>Nombre completo alumno</i></label>
                        <input tabIndex={0} disabled={disabled} type="text" className="form-control" id="studentnombre"
                            value={childName} onChange={(e) => setNomAlu(e.target.value)}
                            aria-describedby="Student nombre" required={!disabled} />
                    </div>

                    <div className="form-group my-1 w-25" style={{ width: "90%" }}>
                        <label tabIndex={0} htmlFor="fecAlu">Fecha de Nacimiento del alumno:</label>
                        <input tabIndex={0}
                            disabled={disabled}
                            type="date"
                            className="form-control"
                            value={childDOB}
                            onChange={(e) => setFecAlu(e.target.value)}
                            required={!disabled}
                        />
                    </div>

                    <div className="form-group my-1 w-25" style={{ width: "90%" }}>
                        <label for="tutorEmail"><i>Curso</i></label>
                        <select tabIndex={0} disabled={disabledCurso} className="form-control" onChange={(e) => setCurso(e.target.value)} id="usuarioCurso" aria-describedby="Curso del usuario" required={!disabledCurso}>
                            <option tabIndex={0} value={"0"}>0 años</option>
                            <option tabIndex={0} value={"1"}>1 años</option>
                            <option tabIndex={0} value={"2"}>2 años</option>
                        </select>
                    </div>

                    <div className="form-group mb-4" style={{ width: "90%" }}>
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

                    <div className="container form-check justify-content-start" style={{ width: "90%", padding: 0 }}>
                        <section className="row">
                            <div className="col-2" style={{ marginRight: "3px" }}>
                                <p><strong>tipo*:</strong></p>
                            </div>

                            <div className="col p-0 text-start">
                                <input name="tipo" type="radio" id="parents" onChange={() => seTipo("3")} />
                                <label className="form-check-label" for="parents">Padre/Madre</label>
                            </div>

                            <div className="col p-0">
                                <input name="tipo" type="radio" id="worker" onChange={() => seTipo("2")} />
                                <label className="form-check-label" for="worker">Personal</label>
                            </div>

                            <div className="col p-0">
                                <input name="tipo" type="radio" id="admin" onChange={() => seTipo("1")} />
                                <label className="form-check-label" for="admin">Administrador</label>
                            </div>
                        </section>

                    </div>

                    <section className="d-flex flex-row my-1 justify-content-center align-items-center" style={{ width: "90%" }}>
                        <Button type="submit" className="btn btn-success w-25 ml-3" id="aceptarSolicitud" >Crear usuario</Button>
                    </section>
                    {error && <p className="alert alert-danger mt-3 text-center " style={{ width: "90%", padding: 0 }}>{error}</p>}

                </form>
            </div>
        </section>
    );
}
export default AddNewAccount;