import React, {useState} from "react";
import Table0 from "./Table0";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Button from 'react-bootstrap/Button';

function AllSchedules(){
    const [horario, newHor]= useState([<Table0/>]);
    const [button0, setButton0] = useState("btn btn-primary");
    const [button1, setButton1] = useState("btn btn-light");
    const [button2, setButton2] = useState("btn btn-light");
   
    

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

        setButton0("btn btn-primary");
        setButton1("btn btn-light");
        setButton2("btn btn-light");
        
        renHor();
    };
    const camHor1 = () => {
        horAPoner = <Table1/>;

        setButton0("btn btn-light");
        setButton1("btn btn-primary");
        setButton2("btn btn-light");
        
        renHor();
    };
    const camHor2 = () => {
        horAPoner = <Table2/>;

        setButton0("btn btn-light");
        setButton1("btn btn-light");
        setButton2("btn btn-primary");
        
        renHor();
    };
    
    return(
        <div className="mx-5 home-container">
            <h1>Horarios</h1>
            <ul style={{listStyle:"none", padding:0, width:"60%"}} id='newsFeed'>
                {horario.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div>
                <Button tabIndex={0} className={button0} onClick={()=>camHor0()} style={{marginRight:"10px"}}>0 años</Button>
                <Button tabIndex={0} className={button1} onClick={()=>camHor1()} style={{marginRight:"10px"}}>1 año</Button>
                <Button tabIndex={0} className={button2} onClick={()=>camHor2()} style={{marginRight:"10px"}}>2-3 años</Button>
            </div>
            
        </div>
    );
}

export default AllSchedules;