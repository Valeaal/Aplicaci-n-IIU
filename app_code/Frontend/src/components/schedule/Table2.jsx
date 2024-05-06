import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table2(){
    return(
        <>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Franja horaria</th>
                        <th scope="col">Rutina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-danger">
                        <th scope="row">9:00-9:30</th>
                        <td>Entrada</td>
                    </tr>

                    <tr class="table-secondary">
                        <th scope="row">9:30-10:15</th>
                        <td>Juegos manipulativos</td>
                    </tr>

                    <tr class="table-info">
                        <th scope="row">10:15-11:00</th>
                        <td>Actividades en el aula</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">11:00-12:00</th>
                        <td>Recreo</td>
                    </tr>

                    <tr class="table-primary">
                        <th scope="row">12:30-13:00</th>
                        <td>Aseo / Almuerzo</td>
                    </tr>

                    <tr class="table-warning">
                        <th scope="row">13:00-15:00</th>
                        <td>Aseo / Descanso / Aseo</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">15:00-16:30</th>
                        <td>Juegos / Visionado de DVD / Musica / Aseo / Salida</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Table2;