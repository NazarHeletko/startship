import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.co/api/'
});

export const ships = {
    getShips(page) {
        return instance.get(`starships/?page=${page}`);
    },
    getSingleShipData(id) {
        return instance.get(`starships/${id}`);
    }
};