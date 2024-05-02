import {Routes, Route, Navigate} from "react-router-dom"
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap


//Comenzamos a importar componentes para que se rendericen todas las rutas en nuestro elemento raiz
import TabHome from "./components/tabs/home"
import NuevoAlumno from "./components/tabs/newChild"
import PedirCita from "./components/tabs/appointment"
import AñadirAlumno from "./components/tabs/addStudent"

//Importamos los componentes de React reuasbles, que se renderizaran en todas las paginas, ya que este es el elemento raiz
import Navbar from './components/navbar';
import Login from "./components/tabs/login";


function App() {  


  // Vamos a tener que crear rutas protegidas para que alguien no identificado acceda a lo que no debe:
  // https://blog.logrocket.com/authentication-react-router-v6/

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={ <TabHome /> } />
        <Route path="/newChild" element={ <NuevoAlumno /> } />
        <Route path="/addStudent" element={ <AñadirAlumno /> } />
        {/* Pedir cita te lleva a la misma pagina, pero se diferencia la ruta para por ejemplo, que el navbar
        te lleve a las paginas correspondientes segun tu rol */}
        <Route path="/appointment" element={ <PedirCita /> } />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
} export default App;


