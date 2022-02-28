import { IOrderInfoState } from '../types/state';
import {
  ADVANCED_URL_PATH,
  EMPTY_STRING,
  MODELS_URL_PATH,
  ORDER_LOCATION_URL_PATH,
  RESULT_URL_PATH,
} from '../constants/common';

export const ButtonState = (currentLocation: string, orderInfo: IOrderInfoState) => {
  const { location, car } = orderInfo;

  switch (currentLocation) {
    case ORDER_LOCATION_URL_PATH: return location.cityName === EMPTY_STRING || location.markerName === EMPTY_STRING;
    case MODELS_URL_PATH: return car.brand === EMPTY_STRING || car.name === EMPTY_STRING;
    case ADVANCED_URL_PATH: return (
      car.color === EMPTY_STRING
      || car.rentalDuration.from === EMPTY_STRING
      || car.rentalDuration.to === EMPTY_STRING
      || car.tariff === EMPTY_STRING);
    case RESULT_URL_PATH: return true;
    default: return false;
  }
};
