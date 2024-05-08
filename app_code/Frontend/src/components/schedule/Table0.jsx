import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
<table class="table table-bordered">

                <thead style={{textAlign:'center'}}>
                    <tr>
                        <th scope="col"><i>FRANJAS HORARIAS</i></th>
                        <th scope="col"><i>RUTINAS</i></th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="table-warning">
                        <th scope="row" style={{width:'25%'}}>9:00-9:30</th>
                        <td>Entrada</td>
                    </tr>

                    <tr class="table-info">
                        <th scope="row">9:30-10:15</th>
                        <td>Aseo / Relajacion</td>
                    </tr>

                    <tr class="table-warning">
                        <th scope="row">10:15-11:00</th>
                        <td>Actividades educativas</td>
                    </tr>

                    <tr class="table-info">
                        <th scope="row">11:00-12:00</th>
                        <td>Patio de juego / Aseo</td>
                    </tr>

                    <tr class="table-warning">
                        <th scope="row">12:30-13:00</th>
                        <td>Almuerzo</td>
                    </tr>

                    <tr class="table-info">
                        <th scope="row">13:00-15:00</th>
                        <td>Aseo / Descanso / Aseo</td>
                    </tr>

                    <tr class="table-warning">
                        <th scope="row">15:00-16:30</th>
                        <td>Juegos sonoros / Aseo / Salida</td>
                    </tr>

                </tbody>
            </table>
            */
function Table0(){
    return(
        <>
        <section id="content">
      <table class="container table table-bordered " id="timetable">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">8h-10h</td>
            <td class="table-danger">English</td>
            <td></td>
            <td class="table-light">Databases</td>
            <td rowspan="2">Web technologies</td>
            <td class="table-warning" rowspan="2">Programming</td>
          </tr>
          <tr>
            <td scope="row">10h-12h</td>
            <td class="table-dark">Networking</td>
            <td class="table-primary">Algorithmics</td>
            <td class="table-secondary">Software Engineering</td>
          </tr>
          <tr id="separator">
            <td scope="row" colspan="6"></td>
          </tr>
          <tr>
            <td scope="row">13h-15h</td>
            <td class="table-light" rowspan="2">Databases</td>
            <td class="table-warning" rowspan="2">Programming</td>
            <td class="table-info">Computer Systems</td>
            <td class="table-success" rowspan="2">Sport</td>
            <td class="table-danger">English</td>
          </tr>
          <tr>
            <td scope="row">15h-17h</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>

        
            
        </>
    );
}

export default Table0;