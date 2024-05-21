import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Carroussel from "../appointment/carroussel";
import Tarjeta from "../appointment/explicativeCard";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../styles/appointment.css";

export default function Everyone() {
    const navigate = useNavigate();
    const tokenString = sessionStorage.getItem('token');
    const decodedToken = tokenString ? jwtDecode(tokenString) : null;
    const id = decodedToken ? decodedToken.userId : null;

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [tarjetaHeight, setTarjetaHeight] = useState("auto");
    const calendarRef = useRef(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const isWeekend = ({ date, view }) => {
        if (view === 'month') {
            const day = date.getDay();
            return day === 0 || day === 6;
        }
        return false;
    };

    const confirmAppointment = () => {
        // Lógica para confirmar la cita y enviar el correo
        alert(`Cita confirmada para el día ${selectedDate}`);
    };

    useEffect(() => {
        if (calendarRef.current) {
            const calendarHeight = calendarRef.current.clientHeight;
            setTarjetaHeight(calendarHeight);
        }
    }, [selectedDate]);

    if (!tokenString) {
        navigate("/login");
    }

    return (
        <div className="home-container">
            <h1>Concertar cita con administración</h1>
            <hr className="borde mt-0 mb-1"></hr>

            <div className="align-items-center">
                <Carroussel />

                <div className="row mx-3 mx-lg-5 mt-4 d-flex"> 
                    <div className="col-bg-12 col-md-6 col-lg-8 mb-4"> 
                        <Tarjeta />
                    </div>

                    <div className="col-bg-12 col-md-6 col-lg-4 right-align mb-4">
                        <Calendar
                            ref={calendarRef}
                            onChange={handleDateChange}
                            value={selectedDate}
                            tileDisabled={isWeekend}
                            minDate={new Date(2020, 0, 1)}
                            maxDate={new Date(2030, 11, 31)}
                        />
                        <button onClick={confirmAppointment} className="btn btn-success mt-3">Confirmar cita</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
