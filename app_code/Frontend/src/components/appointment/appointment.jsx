import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Carroussel from "./carroussel";

export default function Everyone() {

    const navigate = useNavigate();

    const tokenString = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(tokenString);
    const id = decodedToken.userId;
    if (!tokenString) {
        navigate("/login");
    }

    return(
        <div className="home-container align-items-center">
            <h1>Concertar cita con administración</h1>
            <div className="mt-3">
                <Carroussel />;
            </div>
        </div>
    )
}


