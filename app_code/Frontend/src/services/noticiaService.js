import axios from 'axios';

// Obtener noticia por ID
export const getNoticiaById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/noticia/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Obtener todas las noticias
export const getAllNoticias = async () => {
    try {
        const response = await axios.get('http://localhost:3001/noticia/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Crear una nueva noticia

export const createNoticia = async (noticiaData) => {
    try {
        const response = await axios.post('http://localhost:3001/noticia', noticiaData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Eliminar una noticia por ID
export const deleteNoticia = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/noticia/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Actualizar una noticia por ID
export const updateNoticia = async (id, noticiaData) => {
    try {
        const response = await axios.put(`http://localhost:3001/noticia/${id}`, noticiaData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
