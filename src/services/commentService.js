import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (petId, comment) => {
    return request.post(baseUrl, { petId, comment });
};

export const getByPetId = async (petId) => {
    const relations = encodeURIComponent('author=_ownerId:users');
    const search = encodeURIComponent(`petId="${petId}"`);
    
    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};