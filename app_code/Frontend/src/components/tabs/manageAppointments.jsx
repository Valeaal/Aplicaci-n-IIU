import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

export default function ManageAppointments() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate("/login");
        } else {
            const decodedToken = jwtDecode(token);
            if (decodedToken.userType !== 1) {
                navigate("/error");
            }
        }
    }, [navigate]);

    return (
        <div className="home-container">
            <h1 className="text-center">Gestionar citas</h1>
            <hr className="borde mt-0 mb-1"></hr>
            <div className="mx-3">
               asdfasdf
            </div>
        </div>
    );
}
