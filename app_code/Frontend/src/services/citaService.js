import axios from 'axios';

// Obtener cita por ID
export const getCitaById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/cita/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Obtener todas las citas
export const getAllCitas = async () => {
    try {
        const response = await axios.get('http://localhost:3001/cita/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Crear una nueva cita
export const createCita = async (citaData) => {
    try {
        const response = await axios.post('http://localhost:3001/cita', citaData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Eliminar una cita por ID
export const deleteCita = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/cita/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Actualizar una cita por ID
export const updateCita = async (id, citaData) => {
    try {
        const response = await axios.put(`http://localhost:3001/cita/${id}`, citaData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Obtener la fecha de una cita por ID
export const getFechaByCitaId = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/cita/fecha/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Eliminar todas las citas anteriores a una fecha especificada
export const deleteCitasAnteriores = async () => {
    try {
        const response = await axios.delete(`http://localhost:3001/cita/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
