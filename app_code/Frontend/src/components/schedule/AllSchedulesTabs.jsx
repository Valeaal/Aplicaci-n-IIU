import React, {useState} from "react";
import Table0 from "./Table0";
import Table1 from "./Table1";
import Table2 from "./Table2";

function AllSchedules(){
    const [horario, newHor]= useState([<Table0/>]);

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
        <>
            <ul style={{listStyle:"none", padding:0}} id='newsFeed'>
                {horario.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={()=>camHor0()}>0</button>
            <button onClick={()=>camHor1()}>1</button>
            <button onClick={()=>camHor2()}>2</button>
        </>
    );
}

export default AllSchedules;