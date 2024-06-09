import {Routes, Route, Navigate} from "react-router-dom"
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap
import './styles/global.css';


//Comenzamos a importar componentes para que se rendericen todas las rutas en nuestro elemento raiz
import TabHome from "./components/tabs/home"
import NuevoAlumno from "./components/tabs/newChild"
import Appointment from "./components/tabs/appointment"
import AdminNewStudent from "./components/tabs/acceptStudent"
import UserHelp from "./components/tabs/faq";
import Schedules from "./components/tabs/schedules"; 
import Statements from "./components/tabs/statements";
import WriteStatement from "./components/tabs/writeStatement";
import CreditsPage from "./components/tabs/credits";
import EditAccounts from "./components/tabs/editAccounts"
import ManageAppointments from "./components/tabs/manageAppointments"
import Error from "./components/errorPage/errorPage"
import EditUser from "./components/tabs/editUser"
import AddNewAccount from "./components/tabs/addNewStudent";


//Importamos los componentes de React reuasbles, que se renderizaran en todas las paginas, ya que este es el elemento raiz
import Navbar from './components/navbar';
import Login from "./components/tabs/login";
import WriteNew from "./components/tabs/writeNew";


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
        <Route path="/acceptStudents" element={ <AdminNewStudent/> } />
        <Route path="/appointment" element={ <Appointment/> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<Login/>}/>
        <Route path="/userHelp" element={<UserHelp/>}/>
        <Route path="/schedule" element={<Schedules/>}/>
        <Route path="/statements" element={<Statements/>}/>
        <Route path="/writeStatement" element={<WriteStatement/>}/>
        <Route path="/writeNew" element={<WriteNew/>}/>
        <Route path="/credits" element={<CreditsPage/>}/>
        <Route path="/manageAppointments" element={<ManageAppointments/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
        <Route path="/editAccounts" element={<EditAccounts/>}/>
        <Route path="/editAccounts/addNewAccount" element={<AddNewAccount/>}/>
      </Routes>
    </div>
  );
} export default App;


