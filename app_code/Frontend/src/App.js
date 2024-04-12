import {Routes, Route} from "react-router-dom"
import React from "react";
import './App.css';

////////////////////////////////////////////////////////////////////////////////////////////////////
//Comenzamos a imoportar componentes para que se rendericen todas las rutas en nuestro elemento raiz
////////////////////////////////////////////////////////////////////////////////////////////////////
import TabEveryone from "./components/tabs/everyone"


function App() {  

  return (
    <Routes>
      <Route path="/" element={ <TabEveryone /> } />
    </Routes>
  );
} export default App;


