import axios from 'axios';


export const getPeticionById = async (id) => {
    try {
        const response = await axios.get(`${"http://localhost:3001/peticion/"}${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const acceptAlumno = async (id) =>{
    try{
        const response = await axios.post("http://localhost:3001/peticion/accept", {id :id});
        return response;
    }catch(err){
        return err.data;
    }
}

export const getAllPeticiones = async () => {
    try {
        const response = await axios.get("http://localhost:3001/peticion/");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createPeticion = async (peticionData) => {
    try {
        const response = await axios.post("http://localhost:3001/peticion/", peticionData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deletePeticion = async (id) => {
    try {
        const response = await axios.delete(`${"http://localhost:3001/peticion/"}${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePeticion = async (id, peticionData) => {
    try {
        const response = await axios.put(`${"http://localhost:3001/peticion/"}${id}`, peticionData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getNombreAlumnoByPeticionId = async (id) => {
    try {
        const response = await axios.get(`${"http://localhost:3001/peticion/"}alumno/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getNombrePadreByPeticionId = async (id) => {
    try {
        const response = await axios.get(`${"http://localhost:3001/peticion/"}padre/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
