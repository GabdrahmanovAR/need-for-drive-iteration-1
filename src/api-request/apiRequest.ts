import axios from 'axios';
import moment from 'moment';
import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, CARS_URL, ORDER_URL, POINT_URL, RATE_URL,
} from '../constants/api/api';
import { IOrderInfoState } from '../types/state';

const apiDB = axios.create({
  baseURL: BASE_URL,
  headers: {
    [APP_ID_FIELD]: APP_ID_VALUE,
  },
});

export const getPickupPoints = () => apiDB.get(POINT_URL);

export const getCars = (page: string, limit: string) => apiDB.get(`${CARS_URL}?page=${page}&limit=${limit}`);

export const getRate = () => apiDB.get(RATE_URL);

export const registerOrder = (orderInfo: IOrderInfoState) => apiDB.post(ORDER_URL, {
  orderStatusId: { id: '5e26a191099b810b946c5d89' },
  cityId: {
    id: '6005b8f9ad015e0bb6997778',
    name: orderInfo.location.cityName,
  },
  pointId: {
    id: '615ae47018f5c2264119b939',
    name: orderInfo.location.markerName,
  },
  carId: { car: orderInfo.car.name },
  color: orderInfo.car.currentColor,
  dateFrom: moment(orderInfo.car.rentalDuration.from).valueOf(),
  dateTo: moment(orderInfo.car.rentalDuration.to).valueOf(),
  rateId: { rate: orderInfo.car.tariff },
  price: orderInfo.car.totalCost,
  isFullTank: orderInfo.car.fullTank,
  isNeedChildChair: orderInfo.car.babyChair,
  isRightWheel: orderInfo.car.rightHandDrive,
});
