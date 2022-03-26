import { Dispatch } from 'redux';
import { IOrderInfoActionType } from '../../types/actions';
import {
  BABY_CHAIR_NEEDED,
  FULL_TANK_NEEDED, RESET_CAR_INFO, RIGHT_HAND_NEEDED,
  SET_CAR_COLOR,
  SET_CAR_INFO,
  SET_CITY_DATA,
  SET_MARKER_DATA,
  SET_RENTAL_DURATION_ED,
  SET_RENTAL_DURATION_SD,
  SET_TARIFF,
} from '../../constants/actions/orderInfo';

const changeCityData = (cityName: string, cityCoords: number[]): IOrderInfoActionType => ({
  type: SET_CITY_DATA,
  location: {
    cityName,
    cityCoords,
  },
});

const changeMarkerData = (markerName: string, markerCoords: number[]): IOrderInfoActionType => ({
  type: SET_MARKER_DATA,
  location: {
    markerName,
    markerCoords,
  },
});

export const changeCarInfoAction = (
  name: string, minPrice: string, maxPrice: string, image: string, colors: string[], selectedCar: string,
): IOrderInfoActionType => ({
  type: SET_CAR_INFO,
  car: {
    name,
    minPrice,
    maxPrice,
    image,
    colors,
    selectedCar,
  },
});

export const setCarColorAction = (color: string): IOrderInfoActionType => ({
  type: SET_CAR_COLOR,
  car: {
    currentColor: color,
  },
});

export const startDayRentAction = (startDay: string): IOrderInfoActionType => ({
  type: SET_RENTAL_DURATION_SD,
  car: {
    rentalDuration: {
      from: startDay,
    },
  },
});

export const endDayRentAction = (endDay: string): IOrderInfoActionType => ({
  type: SET_RENTAL_DURATION_ED,
  car: {
    rentalDuration: {
      to: endDay,
    },
  },
});

export const setTariffAction = (tariff: string): IOrderInfoActionType => ({
  type: SET_TARIFF,
  car: {
    tariff,
  },
});

export const changeLocationDataAction = (name: string, coords: number[], key: string) => (dispatch: Dispatch) => {
  if (key === 'city') dispatch(changeCityData(name, coords));
  else dispatch(changeMarkerData(name, coords));
};

export const setFullTankAction = (isNeeded: boolean): IOrderInfoActionType => ({
  type: FULL_TANK_NEEDED,
  car: {
    fullTank: isNeeded,
  },
});

export const setBabyChairAction = (isNeeded: boolean): IOrderInfoActionType => ({
  type: BABY_CHAIR_NEEDED,
  car: {
    babyChair: isNeeded,
  },
});

export const setRightHandDriveAction = (isNeeded: boolean): IOrderInfoActionType => ({
  type: RIGHT_HAND_NEEDED,
  car: {
    rightHandDrive: isNeeded,
  },
});

export const resetCarInfoAction = (): IOrderInfoActionType => ({
  type: RESET_CAR_INFO,
});
