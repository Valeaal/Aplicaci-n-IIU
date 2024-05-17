import {Routes, Route, Navigate} from "react-router-dom"
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap
import './styles/global.css';


//Comenzamos a importar componentes para que se rendericen todas las rutas en nuestro elemento raiz
import TabHome from "./components/tabs/home"
import NuevoAlumno from "./components/tabs/newChild"
import PedirCita from "./components/appointment/appointment"
import AdminNuevoAlumno from "./components/tabs/adminAcceptStudent/addStudent"
import UserHelp from "./components/tabs/UserHelp";
import ScheduleAll from "./components/tabs/ScheduleAll";
import Communications from "./components/tabs/Communications";
import WriteCommunicate from "./components/tabs/WriteCommunicate";
import CreditsPage from "./components/tabs/CreditsPage";


//Importamos los componentes de React reuasbles, que se renderizaran en todas las paginas, ya que este es el elemento raiz
import Navbar from './components/navbar';
import Login from "./components/tabs/login";
import RedactarNoticia from "./components/tabs/redactarNoticia";


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
        <Route path="/adminAddStudent" element={ <AdminNuevoAlumno/> } />
        <Route path="/appointment" element={ <PedirCita /> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/userHelp" element={<UserHelp/>}/>
        <Route path="/schedule" element={<ScheduleAll/>}/>
        <Route path="/communications" element={<Communications/>}/>
        <Route path="/redactarComunicado" element={<WriteCommunicate/>}/>
        <Route path="/redactarNoticia" element={<RedactarNoticia/>}/>
        <Route path="/creditos" element={<CreditsPage/>}/>
      </Routes>
    </div>
  );
} export default App;


