import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/pets';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
};

export const getOne = async (petId) => {
    const result = await request.get(`${baseUrl}/${petId}`);
    return result;
};

export const create = async (petData) => {
    const result = await request.post(baseUrl, petData);
    return result;
};

export const edit = async (petId, petData) => {
    const result = await request.put(`${baseUrl}/${petId}`, petData);
    return result;
};

export const remove = async (petId) => {
    const result = await request.del(`${baseUrl}/${petId}`);
    return result;
};