import React, {useState} from "react";
import Table0 from "./Table0";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Button from 'react-bootstrap/Button';

function AllSchedules(){
    const [horario, newHor]= useState([<Table0/>]);

    const butStyle = {
        marginRight:"10px"
    }

    let horAPoner = <Table0/>
    const renHor = () => {
        const act = [horAPoner];
        newHor(act);
    }
    const camHor0 = () => {
        horAPoner = <Table0/>;
        renHor();
    };
    const camHor1 = () => {
        horAPoner = <Table1/>;
        renHor();
    };
    const camHor2 = () => {
        horAPoner = <Table2/>;
        renHor();
    };
    
    return(
        <div className="mx-5 my-2">
            <h1 style={{marginBottom:"10px"}}> <em> <u>Horarios</u> </em> </h1>
            <ul style={{listStyle:"none", padding:0, width:"60%"}} id='newsFeed'>
                {horario.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div>
                <Button onClick={()=>camHor0()} style={{marginRight:"10px"}}>0 años</Button>
                <Button onClick={()=>camHor1()} style={{marginRight:"10px"}}>1 año</Button>
                <Button onClick={()=>camHor2()} style={{marginRight:"10px"}}>2-3 años</Button>
            </div>
            
        </div>
    );
}

export default AllSchedules;