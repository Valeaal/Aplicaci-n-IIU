import axios from 'axios'; //Para hace peticiones hhtp

export async function RegisterChild(credentials){
    const res = await axios.post("http://localhost:3001/alumno/register", credentials, {
        headers: {
            'Content-Type': 'application/json'
        }

    });

    return res;

}