import axios from 'axios';

export const getRecibidos = async (id) =>{
    try{
        const res = axios.get("http://localhost:3001/comunicado/get-receptor/?id="+id);
        return res;
    }catch(err){
        return err;
    }
}

export const getEnviados = async (id) =>{
    try{
        const res = axios.get("http://localhost:3001/comunicado/get-emisor/?id="+id);
        return res;
    }catch(err){
        return err;
    }
}

export const add = async (credentials) =>{
    try{
        const res = axios.post("http://localhost:3001/comunicado",  credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
            });
        return res;
    }catch(err){
        return err;
    }
}