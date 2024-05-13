import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCard from './NewsCard';

function News() {
  const [articles, setArticles] = useState([]);

  // Función para agregar una nueva noticia
  const agregarElemento = () => {
    // Simulando datos de una noticia
    const newArticleData = {
      id: articles.length + 1, // Simulando un ID único para cada noticia
      titulo: 'Título de la noticia',
      contenido: 'Contenido de la noticia',
      autor: 'Autor de la noticia',
      fecha: new Date().toLocaleDateString(), // Simulando la fecha actual
    };

    // Crear una nueva tarjeta de noticia con los datos simulados
    const newCard = <NewsCard key={newArticleData.id} article={newArticleData} />;

    // Agregar la nueva tarjeta al estado de artículos
    setArticles([...articles, newCard]);
  };

  return (
    <>
      <div className='d-flex flex-column'>
        <h2>Noticias:</h2>
        <section id="newsFeed" className='d-flex flex-column'>
          <ul style={{ listStyle: "none", padding: 0 }} id='newsFeed'>
            {articles.map((item) => (
              <li key={item.key}>{item}</li>
            ))}
          </ul>
        </section>
        <button onClick={agregarElemento}>Agregar Noticia</button>
      </div>
    </>
  );
}

export default News;
