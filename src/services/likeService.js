import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/likes';

export const like = (petId) => {
    return request.post(baseUrl, { petId });
};

export const getPetLikes = (petId) => {
    const query = encodeURIComponent(`petId="${petId}"`);
    
    return request.get(`${baseUrl}?where=${query}&count`);
};

export const getMyLike = (petId, userId) => {
    const query = encodeURIComponent(`petId="${petId}" AND _ownerId="${userId}"`);

    return request.get(`${baseUrl}?where=${query}&count`);
};