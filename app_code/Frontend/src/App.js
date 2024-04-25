import {Routes, Route, Navigate} from "react-router-dom"
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap


//Comenzamos a importar componentes para que se rendericen todas las rutas en nuestro elemento raiz
import TabEveryone from "./components/tabs/everyone"
import TabParents from "./components/tabs/parents"
import TabWorker from "./components/tabs/worker"
import TabAdmin from "./components/tabs/admin"
import NuevoAlumno from "./components/tabs/newChild"
import PedirCita from "./components/tabs/appointment"

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
        <Route path="/" element={<Navigate to="/everyone"/>} />
        <Route path="/everyone" element={ <TabEveryone /> } />
        <Route path="/parents" element={ <TabParents /> } />
        <Route path="/worker" element={ <TabWorker /> } />
        <Route path="/admin" element={ <TabAdmin /> } />
        <Route path="/newChild" element={ <NuevoAlumno /> } />
        {/* Pedir cita te lleva a la misma pagina, pero se diferencia la ruta para por ejemplo, que el navbar
        te lleve a las paginas correspondientes segun tu rol */}
        <Route path="/parents/appointment" element={ <PedirCita /> } />
        <Route path="/worker/appointment" element={ <PedirCita /> } />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
} export default App;


