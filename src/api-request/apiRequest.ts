import axios from 'axios';
import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, POINT_URL,
} from '../constants/api/api';

const apiDB = axios.create({
  baseURL: BASE_URL,
  headers: {
    [APP_ID_FIELD]: APP_ID_VALUE,
  },
});

// Запрос пунктов выдачи
export const getPickupPoints = () => apiDB.get(POINT_URL);
