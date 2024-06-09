import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsuarios } from "../../services/usuarioService";
import "../../styles/manageAppointment.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2';
import CitasList from '../auxiliarComponents/manageAppointments/appointmentsList'
import { getAllCitas, deleteCitasAnteriores } from "../../services/citaService";
import { getAllDiasCerrados, crearDiaCerrado } from "../../services/diasCerradosService";

export default function ManageAppointment() {
    const navigate = useNavigate();
    const tokenString = sessionStorage.getItem('token');

    useEffect(() => {
        if (!tokenString) {
            navigate("/login");
        }
    }, [tokenString, navigate]);
    
    const [citas, setCitas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [tarjetaHeight, setTarjetaHeight] = useState("auto");
    const [citasDates, setCitasDates] = useState([]);
    const [cerradosDates, setCerradosDates] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const calendarRef = useRef(null);

    const fetchBookedDates = async () => {
        try {
            const citas = await getAllCitas();
            const citasDates = citas.map(cita => new Date(cita.fecha));
            const diasCerrados = await getAllDiasCerrados();
            const cerradosDates = diasCerrados.map(diaCerrado => new Date(diaCerrado.fecha));
            
            setCitasDates(citasDates);
            setCerradosDates(cerradosDates);
        } catch (error) {
            console.error("Error fetching booked dates:", error);
        }
    };

    useEffect(() => {
        fetchBookedDates();
    }, []);

    useEffect(() => {
        if (calendarRef.current) {
            const calendarHeight = calendarRef.current.clientHeight;
            setTarjetaHeight(calendarHeight);
        }
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const isDateBooked = ({ date, view }) => {
        if (view === 'month') {
            const isBooked = citasDates.some(citaDate => citaDate.toDateString() === date.toDateString());
            const isClosed = cerradosDates.some(cerradoDate => cerradoDate.toDateString() === date.toDateString());
            const isPastDate = date < new Date().setHours(0, 0, 0, 0);
            const isSunday = date.getDay() === 0;
            const isSaturday = date.getDay() === 6;
            return isPastDate || isSunday || isSaturday;
        }
        return false;
    };

    const getTileClassName = ({ date, view }) => {
        if (view === 'month') {
            const isBooked = citasDates.some(citaDate => citaDate.toDateString() === date.toDateString());
            const isClosed = cerradosDates.some(cerradoDate => cerradoDate.toDateString() === date.toDateString());
            
            if (isBooked) {
                return 'tile-booked';
            }
            if (isClosed) {
                return 'tile-closed';
            }
        }
        return null;
    };

    const confirmDiaCerrado = async () => {
        try {
            const formattedDate = selectedDate.toISOString();
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: '¿Quieres confirmar este día como cerrado?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, confirmar',
                cancelButtonText: 'Cancelar',
            });
            if (result.isConfirmed) {
                const diaCerrado = await crearDiaCerrado({fecha: formattedDate});
                if (diaCerrado) {
                    Swal.fire({
                        title: "Día Cerrado confirmado!",
                        text: "Día Cerrado para el día: " + selectedDate.toLocaleDateString(),
                        icon: "success"
                    });
                    fetchBookedDates(); // Refresh the booked dates
                }
            }
        } catch (error) {
            console.error("Error confirming appointment:", error);
            alert("Hubo un error al confirmar el día cerrado. Por favor, inténtalo de nuevo.");
        }
    };

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const citasData = await getAllCitas();
                setCitas(citasData);
            } catch (error) {
                console.error("Error fetching citas:", error);
            }
        };

        const fetchUsuarios = async () => {
            try {
                const usuariosData = await getAllUsuarios();
                setUsuarios(usuariosData);
            } catch (error) {
                console.error("Error fetching usuarios:", error);
            }
        };
        fetchCitas();
        fetchUsuarios();
    }, []);

    const getUserNameById = (userId) => {
        const usuario = usuarios.find(user => user.id === userId);
        return usuario ? usuario.nombre : "Usuario no encontrado";
    };

    const formatDateToWords = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };    

    const eliminarCitasAnteriores = async () => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: '¿Quieres eliminar todas las citas anteriores al día actual?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
            });
            if (result.isConfirmed) {
                await deleteCitasAnteriores();
                Swal.fire({
                    title: "Citas eliminadas!",
                    text: "Todas las citas anteriores al día actual han sido eliminadas.",
                    icon: "success"
                });
                fetchBookedDates();
            }
        } catch (error) {
            console.error("Error deleting citas:", error);
            alert("Hubo un error al eliminar las citas anteriores. Por favor, inténtalo de nuevo.");
        }
    };
    

    return (
        <div className="home-container">
            <h1 className="text-center">Gestionar citas</h1>
            <hr className="borde mt-0 mb-1"></hr>
            <div className="mx-3">
                <div className="row">
                    <section aria-label="Citas que han solicitado los usuarios" className="col-md-8 col-sm-12 mb-5">
                        <h2>Citas solicitadas por los usuarios:</h2>
                        {citas.length === 0 ? (
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title text-success">¡No hay citas próximas!</h5>
                                    <p className="card-text mt-4">En este momento no hay citas pendientes.</p>
                                    <p className="card-text">Cuando alguien solicite una cita, podrás verla aquí.</p>
                                </div>
                            </div>
                        ) : (
                            <CitasList onReload={fetchBookedDates} />
                        )}
                    </section> 
                    <section aria-label="Calendario para ver y cerrar días" className="col-md-4 col-sm-12">
                        <h2>Calendario:</h2>
                        <h5>Aquí puedes ver los días que te han pedido citas (color verde).</h5>
                        <h5>También puedes cerrar algún día para que no puedan solicitar más citas en él.</h5>
                        <h5>Los días cerrados están en verde grisáceo y los no disponibles en gris.</h5>
                        <Calendar
                            ref={calendarRef}
                            onChange={handleDateChange}
                            value={selectedDate}
                            tileDisabled={isDateBooked}
                            tileClassName={getTileClassName}
                            minDate={new Date()}
                            maxDate={new Date(2030, 11, 31)}
                        />
                        <div className="d-flex flex-column" style={{width:"87%"}}>
                            <button tabIndex={0} aria-label="Botón para confirmar la cita" onClick={confirmDiaCerrado} className="btn btn-success mt-3 mb-1">
                                Confirmar día cerrado
                            </button>
                            <button tabIndex={0} aria-label="Botón para eliminar citas anteriores al día actual" onClick={eliminarCitasAnteriores} className="btn btn-warning mt-1 mb-3">
                                Eliminar citas pasadas
                            </button>
                        </div>
                        
                    </section>
                </div>
            </div>
        </div>
    );
}

       
