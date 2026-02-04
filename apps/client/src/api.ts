import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api/notes';

export const api = axios.create({
    baseURL: API_URL,
});

export const getNotes = async () => {
    const response = await api.get('/');
    return response.data;
};

export const createNote = async (note: { title: string; content: string }) => {
    const response = await api.post('/', note);
    return response.data;
};

export const updateNote = async (id: string, note: { title: string; content: string }) => {
    const response = await api.put(`/${id}`, note);
    return response.data;
};

export const deleteNote = async (id: string) => {
    const response = await api.delete(`/${id}`);
    return response.data;
};
