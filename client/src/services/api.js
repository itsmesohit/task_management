import axios from 'axios';

const API_BASE_URL = 'http://0.0.0.0:3000/api/v1'; // Updated to port 3000

export const getTasks = async () => {
    return await axios.get(`${API_BASE_URL}/tasks/`);
};

export const createTask = async (task) => {
    task.due_date = new Date(task.due_date).toISOString().slice(0, 19);
    const result = await axios.post(`${API_BASE_URL}/tasks/`, task);
    return result;
};

export const updateTask = async (id, task) => {
    task.due_date = new Date(task.due_date).toISOString().slice(0, 19);
    return await axios.put(`${API_BASE_URL}/tasks/${id}`, task);
};

export const deleteTask = async (id) => {
    return await axios.delete(`${API_BASE_URL}/tasks/${id}`);
};
