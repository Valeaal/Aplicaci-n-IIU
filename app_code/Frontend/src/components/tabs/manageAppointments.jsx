import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsuarios } from "../../services/usuarioService";
import "../../styles/manageAppointment.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2';
import { getAllCitas } from "../../services/citaService";
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
    const [bookedDates, setBookedDates] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const calendarRef = useRef(null);

    const fetchBookedDates = async () => {
        try {
            const citas = await getAllCitas();
            const dates = citas.map(cita => new Date(cita.fecha));
            const diasCerrados = await getAllDiasCerrados();
            dates.push(...diasCerrados.map(diaCerrado => new Date(diaCerrado.fecha)));
            setBookedDates(dates);
            console.log(dates);
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
            const isBooked = bookedDates.some(bookedDate => bookedDate.toDateString() === date.toDateString());
            const isPastDate = date < new Date().setHours(0, 0, 0, 0);
            const isSunday = date.getDay() === 0;
            const isSaturday = date.getDay() === 6;
            return isBooked || isPastDate || isSunday || isSaturday;
        }
        return false;
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
                        title: "Dia Cerrado confirmado!",
                        text: "Dia Cerrado para el día: " + selectedDate.toLocaleDateString(),
                        icon: "success"
                    });
                    navigate("/");
                }
            }
        } catch (error) {
            console.error("Error confirming appointment:", error);
            alert("Hubo un error al confirmar la cita. Por favor, inténtalo de nuevo.");
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

    return (
        <div className="manage-appointment-container">
            <h1>Gestionar Citas</h1>
            <div className="citas-list">
                {citas.map((cita, index) => (
                    <div key={index} className="cita-block">
                        <h2>Nombre: {getUserNameById(cita.idUsuario)}</h2>
                        <p><strong>Mensaje:</strong> {cita.mensaje}</p>
                        <p><strong>Fecha:</strong> {formatDateToWords(cita.fecha)}</p>
                    </div>
                ))}
            </div>
            <div aria-label="Calendario para elegir un día" className="col-bg-12 col-md-6 col-lg-4 right-align mb-4">
            <h1>Selecciona un día para cerrarlo a posibles citas:</h1>
                        <Calendar
                            ref={calendarRef}
                            onChange={handleDateChange}
                            value={selectedDate}
                            tileDisabled={isDateBooked}
                            minDate={new Date()}
                            maxDate={new Date(2030, 11, 31)}
                        />
                        <button tabIndex={0} aria-label="Botón para confirmar la cita" onClick={confirmDiaCerrado} className="btn btn-success mt-3">
                            Confirmar día cerrado
                        </button>

                    </div>
        </div>
        
    );
}

