import React from "react";
import Everyone from "../faq/faqEveryone";
import { jwtDecode } from "jwt-decode";
import "../../styles/faq.css";

function faq() {
  // Recuperamos el token y decodificamos si podemos
  let tipo = 0;
  const token = sessionStorage.getItem('token'); 
  if (token){
    const decodedToken = jwtDecode(token);
    tipo = decodedToken.userType;
  }

  return (
    <div className="home-container">
      <h1>Ayuda</h1>
      <hr className="borde mt-0"></hr>
      <h2 className="text-center mt-2 mb-0">Preguntas frecuentes:</h2>
      {!token ? (
        <Everyone />
      ) : tipo === 1 ? (
        // Aquí puedes renderizar el contenido específico para el tipo 1
        <div>Contenido para el tipo 1</div>
      ) : (
        // Aquí puedes renderizar el contenido para otros tipos de usuarios
        <div>Contenido para otros tipos de usuarios</div>
      )}
    </div>
  );
}

export default faq;
