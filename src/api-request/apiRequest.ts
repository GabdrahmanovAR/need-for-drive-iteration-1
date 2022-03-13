import axios from 'axios';
import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, CARS_URL, POINT_URL,
} from '../constants/api/api';

const apiDB = axios.create({
  baseURL: BASE_URL,
  headers: {
    [APP_ID_FIELD]: APP_ID_VALUE,
  },
});

export const getPickupPoints = () => apiDB.get(POINT_URL);

export const getCars = (page: string, limit: string) => apiDB.get(`${CARS_URL}?page=${page}&limit=${limit}`);
