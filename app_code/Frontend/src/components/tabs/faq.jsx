import React from "react";
import Everyone from "../auxiliarComponents/faq/faqEveryone";
import Parent from "../auxiliarComponents/faq/faqParent";
import Worker from "../auxiliarComponents/faq/faqWorker";
import Admin from "../auxiliarComponents/faq/faqAdmin";
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
      <h1 tabIndex={0}>Ayuda</h1>
      <hr className="borde mt-0"></hr>
      <h2 tabIndex={0} className="text-center mt-2 mb-0">Preguntas frecuentes:</h2>
      {!token ? (
          <Everyone />
      ) : tipo === 1 ? (
          <Admin />
      ) : tipo === 2 ? (
          <Worker />
      ) : tipo === 3 ? (
          <Parent />
      ) : null}
    </div>
  );
}

export default faq;
