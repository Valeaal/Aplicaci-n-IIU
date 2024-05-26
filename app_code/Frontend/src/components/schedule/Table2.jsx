import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table2() {
  return (
    <table className="table table-bordered">
      <thead className="table-warning text-center">
        <tr>
          <th tabIndex={2} scope="col" className="text-center align-middle">FRANJAS HORARIAS</th>
          <th tabIndex={3} scope="col" className="text-center align-middle">ACTIVIDAD</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-info">
          <th tabIndex={4} scope="row" style={{ width: '25%' }} className="text-center align-middle">9:00-9:30</th>
          <td tabIndex={5} className="text-center align-middle">Entrada</td>
        </tr>
        <tr className="table-warning">
          <th tabIndex={6} scope="row" className="text-center align-middle">9:30-10:15</th>
          <td tabIndex={7} className="text-center align-middle">Juegos manipulativos</td>
        </tr>
        <tr className="table-info">
          <th tabIndex={8} scope="row" className="text-center align-middle">10:15-11:00</th>
          <td tabIndex={9} className="text-center align-middle">Actividades en el aula</td>
        </tr>
        <tr className="table-warning">
          <th tabIndex={10} scope="row" className="text-center align-middle">11:00-12:00</th>
          <td tabIndex={11} className="text-center align-middle">Recreo</td>
        </tr>
        <tr className="table-info">
          <th tabIndex={12} scope="row" className="text-center align-middle">12:30-13:00</th>
          <td tabIndex={13} className="text-center align-middle">Aseo / Almuerzo</td>
        </tr>
        <tr className="table-warning">
          <th tabIndex={14} scope="row" className="text-center align-middle">13:00-15:00</th>
          <td tabIndex={15} className="text-center align-middle">Aseo / Descanso / Aseo</td>
        </tr>
        <tr className="table-info">
          <th tabIndex={16} scope="row" className="text-center align-middle">15:00-16:30</th>
          <td tabIndex={17} className="text-center align-middle">Juegos / Visionado de DVD / Musica / Aseo / Salida</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table2;
