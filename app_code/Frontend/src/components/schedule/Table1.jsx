import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table1() {
  return (
    <table className="table table-bordered">
      <thead className="table-warning text-center">
        <tr>
          <th scope="col" className="text-center align-middle">FRANJAS HORARIAS</th>
          <th scope="col" className="text-center align-middle">ACTIVIDAD</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-info">
          <th scope="row" style={{ width: '25%' }} className="text-center align-middle">9:00-9:30</th>
          <td className="text-center align-middle">Entrada</td>
        </tr>
        <tr className="table-warning">
          <th scope="row" className="text-center align-middle">9:30-10:15</th>
          <td className="text-center align-middle">Juegos manipulativos</td>
        </tr>
        <tr className="table-info">
          <th scope="row" className="text-center align-middle">10:15-11:00</th>
          <td className="text-center align-middle">Actividades en el aula</td>
        </tr>
        <tr className="table-warning">
          <th scope="row" className="text-center align-middle">11:00-12:00</th>
          <td className="text-center align-middle">Recreo</td>
        </tr>
        <tr className="table-info">
          <th scope="row" className="text-center align-middle">12:30-13:00</th>
          <td className="text-center align-middle">Aseo / Almuerzo</td>
        </tr>
        <tr className="table-warning">
          <th scope="row" className="text-center align-middle">13:00-15:00</th>
          <td className="text-center align-middle">Aseo / Descanso / Aseo</td>
        </tr>
        <tr className="table-info">
          <th scope="row" className="text-center align-middle">15:00-16:30</th>
          <td className="text-center align-middle">Juegos / Aseo / Salida</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table1;
