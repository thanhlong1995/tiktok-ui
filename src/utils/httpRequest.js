import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const search = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export const getAll = async () => {
    const response = await request.get();
    return response.data;
};

export const getByID = async (id) => {
    const response = await request.get(id);
    return response.data;
};

export const putByID = async (id, params) => {
    const response = await request.put(id, params);
    return response.data;
};
export default request;
