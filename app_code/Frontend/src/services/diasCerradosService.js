import axios from 'axios';

export const getDiaCerradobyId = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/diasCerrados/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getAllDiasCerrados = async () => {
    try {  
        const response = await axios.get('http://localhost:3001/diasCerrados');
        return response.data;
    } catch (error) {
        throw error;
    }   
}  

export const crearDiaCerrado = async (diaCerrado) => {
    try {
        const response = await axios.post('http://localhost:3001/diasCerrados', diaCerrado);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const eliminarDiaCerrado = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/diasCerrados/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const actualizarDiaCerrado = async (id, diaCerrado) => {
    try {
        const response = await axios.put(`http://localhost:3001/diasCerrados/${id}`, diaCerrado);
        return response.data;
    } catch (error) {
        throw error;
    }
}