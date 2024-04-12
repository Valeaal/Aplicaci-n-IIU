import {Routes, Route, Router} from "react-router-dom"
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

//Comenzamos a importar componentes para que se rendericen todas las rutas en nuestro elemento raiz
import TabEveryone from "./components/tabs/everyone"

//Importamos los componentes de React reuasbles, que se renderizaran en todas las paginas, ya que este es el elemento raiz
import Navbar from './components/navbar';


function App() {  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <TabEveryone /> } />
      </Routes>
    </div>
  );
} export default App;


