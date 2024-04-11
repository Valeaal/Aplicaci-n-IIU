import {BrowserRouter} from "react-router-dom"
import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    //Bueno pues recoger el mensaje no lo recoge pero vaya, eso ya veremos como hacerlo
      .then((res) => {
        console.log("Respuesta completa:", res);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setData(data.message);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}


export default App;
