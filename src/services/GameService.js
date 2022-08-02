import * as request from "./requester";


const baseUrl = 'http://localhost:3030/data/games';

// export const getAll = () => {
//    return fetch(`${baseUrl}/data/games`)
//    .then(res => res.json())

// }

export const getAll=()=>request.get(`${baseUrl}`);

export const getOne=(gameId)=>request.get(`${baseUrl}/${gameId}`)

export const create=(gameData)=>request.post(`${baseUrl}`, gameData);

export const edit=(gameId, gameData)=>request.put(`${baseUrl}/${gameId}`, gameData)