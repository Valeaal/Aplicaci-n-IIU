import React, { useState } from "react";
import Table0 from "../schedule/Table0";
import Table1 from "../schedule/Table1";
import Table2 from "../schedule/Table2";
import Button from 'react-bootstrap/Button';
import * as jwt from 'jwt-decode';

function ScheduleAll() {
    const token = sessionStorage.getItem('token'); // Recuperamos el token
    let tipo = 'Everyone';
    if (token) { // Si el token está, lo decodificamos y guardamos el tipo de usuario que ha iniciado sesión
        const tokenDecoded = jwt.jwtDecode(token);
        tipo = tokenDecoded.userType;
        console.log(tipo);
    }

    const [horario, setHorario] = useState(<Table0 />);
    const [activeButton, setActiveButton] = useState(0);

    const changeTable = (tableIndex) => {
        let newTable;
        switch (tableIndex) {
            case 0:
                newTable = <Table0 />;
                break;
            case 1:
                newTable = <Table1 />;
                break;
            case 2:
                newTable = <Table2 />;
                break;
            default:
                newTable = <Table0 />;
        }
        setHorario(newTable);
        setActiveButton(tableIndex);
    };

    return (
        <div className="home-container">
            <h1>Horarios</h1>
            <hr className="borde mt-0"></hr>
            <div className="d-flex justify-content-center">
                <div className="col-10 col-md-8">
                    <ul className="list-unstyled">
                        <li>{horario}</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Button 
                    className={activeButton === 0 ? "btn btn-primary" : "btn btn-light"} 
                    onClick={() => changeTable(0)} 
                    style={{ marginRight: "10px" }}
                >
                    0 años
                </Button>
                <Button 
                    className={activeButton === 1 ? "btn btn-primary" : "btn btn-light"} 
                    onClick={() => changeTable(1)} 
                    style={{ marginRight: "10px" }}
                >
                    1 año
                </Button>
                <Button 
                    className={activeButton === 2 ? "btn btn-primary" : "btn btn-light"} 
                    onClick={() => changeTable(2)}
                >
                    2-3 años
                </Button>
            </div>
        </div>
    );
}

export default ScheduleAll;
