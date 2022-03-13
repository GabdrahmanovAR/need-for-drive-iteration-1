import produce from 'immer';
import { IOrderInfoState } from '../../types/state';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../constants/common';
import { IOrderCarInfoActionType, IOrderInfoActionType } from '../../types/actions';
import {
  SET_CAR_COLOR,
  SET_CAR_INFO,
  SET_CITY_DATA,
  SET_MARKER_DATA,
  SET_RENTAL_DURATION_ED,
  SET_RENTAL_DURATION_SD,
  SET_TARIFF,
} from '../../constants/actions/orderInfo';

const initialState: IOrderInfoState = {
  location: {
    cityName: EMPTY_STRING,
    markerName: EMPTY_STRING,
    cityCoords: [55.755819, 37.617644],
    markerCoords: EMPTY_ARRAY,
    selectionCompleted: false,
  },
  car: {
    name: EMPTY_STRING,
    image: EMPTY_STRING,
    selectedCar: EMPTY_STRING,
    maxPrice: EMPTY_STRING,
    minPrice: EMPTY_STRING,
    currentColor: 'Любой',
    colors: EMPTY_ARRAY,
    babyChair: false,
    fullTank: false,
    rentalDuration: {
      from: EMPTY_STRING,
      to: EMPTY_STRING,
    },
    rightHandDrive: false,
    tariff: 'Поминутно',
  },
};

const changeCityData = (draft: IOrderInfoState, cityName?: string, cityCoords?: number[]) => {
  draft.location.cityName = cityName || EMPTY_STRING;
  draft.location.cityCoords = cityCoords || EMPTY_ARRAY;
  return draft;
};

const changeMarkerData = (draft: IOrderInfoState, markerName?: string, markerCoords?: number[]) => {
  draft.location.markerName = markerName || EMPTY_STRING;
  draft.location.markerCoords = markerCoords || EMPTY_ARRAY;
  return draft;
};

const carInfo = (draft: IOrderInfoState, props?: IOrderCarInfoActionType) => {
  const {
    name,
    minPrice,
    maxPrice,
    image,
    colors,
    selectedCar,
  } = { ...props };
  draft.car.name = name || EMPTY_STRING;
  draft.car.minPrice = Number(minPrice) < Number(maxPrice) ? minPrice || EMPTY_STRING : maxPrice || EMPTY_STRING;
  draft.car.maxPrice = Number(minPrice) > Number(maxPrice) ? minPrice || EMPTY_STRING : maxPrice || EMPTY_STRING;
  draft.car.image = image || EMPTY_STRING;
  draft.car.colors = Array.from(new Set(colors));
  draft.car.selectedCar = selectedCar || EMPTY_STRING;
  return draft;
};

const setCarColor = (draft: IOrderInfoState, color?: string) => {
  draft.car.currentColor = color || EMPTY_STRING;
  return draft;
};

const startDayRent = (draft: IOrderInfoState, startDay?: string) => {
  draft.car.rentalDuration.from = startDay || EMPTY_STRING;
  return draft;
};

const endDayRent = (draft: IOrderInfoState, endDay?: string) => {
  draft.car.rentalDuration.to = endDay || EMPTY_STRING;
  return draft;
};

const setTariff = (draft: IOrderInfoState, tariff?: string) => {
  draft.car.tariff = tariff || EMPTY_STRING;
  return draft;
};

export default (state = initialState, action: IOrderInfoActionType) => produce(
  state,
  (draft: IOrderInfoState) => {
    switch (action.type) {
      case SET_CITY_DATA: return changeCityData(draft, action.location?.cityName, action.location?.cityCoords);
      case SET_MARKER_DATA: return changeMarkerData(draft, action.location?.markerName, action.location?.markerCoords);
      case SET_CAR_INFO: return carInfo(draft, action.car);
      case SET_CAR_COLOR: return setCarColor(draft, action.car?.currentColor);
      case SET_RENTAL_DURATION_SD: return startDayRent(draft, action.car?.rentalDuration?.from);
      case SET_RENTAL_DURATION_ED: return endDayRent(draft, action.car?.rentalDuration?.to);
      case SET_TARIFF: return setTariff(draft, action.car?.tariff);
      default: return state;
    }
  },
);
