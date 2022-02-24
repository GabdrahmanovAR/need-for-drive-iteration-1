import { EMPTY_STRING, MODELS_URL_PATH, ORDER_LOCATION_URL_PATH } from '../constants/common';

export const OrderInfoBtnText = (currentLocation: string): string => {
  switch (currentLocation) {
    case ORDER_LOCATION_URL_PATH: return 'Выбрать модель';
    case MODELS_URL_PATH: return 'Дополнительно';
    default: return EMPTY_STRING;
  }
};
