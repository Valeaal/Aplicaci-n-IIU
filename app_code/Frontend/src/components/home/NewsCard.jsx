import React from "react";
import newsPhoto from './newsPhoto.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsCard(){
    const sty={
        width:'50px',
        height:'50px'
    }
    return(
        <div class="border border-2 border-info rounded bg-secondary text-white d-flex flex-row m-1">
            <section>
                <section class = 'd-flex flex-row align-items-center justify-content-between'>
                    <h1>Titulo</h1>
                    <p>Fechaa</p>
                </section>
                <p>papapapapapapapapapapapapap</p>
            </section>
            <div class="d-flex align-items-center m-2">
                <img src={newsPhoto} style={sty}/>
            </div>
            
        </div>
    );
}

export default NewsCard;