import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCard from './NewsCard';

function News(){
    const [articles, newArticle] = useState([]);
    const agregarElemento = () => {
        const newCard = <NewsCard/>;
        const art = [...articles, newCard];
        newArticle(art);
    };
    return (
        <>
            <div className='d-flex flex-column'>
                <h2>Noticias:</h2>
                <section id="newsFeed" className='d-flex flex-column'>
                    <ul style={{listStyle:"none", padding:0}} id='newsFeed'>
                        {articles.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <button onClick={()=> agregarElemento()}>Go</button>
            </div>
        </>
    );
}

export default News;