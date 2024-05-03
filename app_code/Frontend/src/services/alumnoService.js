import axios from 'axios'; //Para hace peticiones hhtp

export async function RegisterChild(credentials){
    const res = await axios.post("http://localhost:3001/alumno/register", credentials, {
        headers: {
            'Content-Type': 'application/json'
        }

    });

    return res;

}

export async function acceptAlumno(id){
    const res = await axios.put("http://localhost:3001/alumno/accept/"+id);
    return res;
}

export async function deleteById(id){
    const res = await axios.delete("http://localhost:3001/alumno/"+id);
    return res;
}

export async function getAllNotDefinitive(){

    const res = await axios.get("http://localhost:3001/alumno/get-all-not-definitive");
    
    return res;

}


