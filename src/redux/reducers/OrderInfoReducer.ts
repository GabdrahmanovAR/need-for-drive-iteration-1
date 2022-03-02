import produce from 'immer';
import { IOrderInfoState } from '../../types/state';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../constants/common';
import { IOrderCarInfoActionType, IOrderInfoActionType } from '../../types/actions';
import { SET_CAR_INFO, SET_CITY_DATA, SET_MARKER_DATA } from '../../constants/actions/orderInfo';

const initialState: IOrderInfoState = {
  location: {
    cityName: 'Ульяновск',
    markerName: EMPTY_STRING,
    cityCoords: [54.314192, 48.403132],
    markerCoords: EMPTY_ARRAY,
    selectionCompleted: false,
  },
  car: {
    name: EMPTY_STRING,
    brand: EMPTY_STRING,
    image: EMPTY_STRING,
    selectedCar: EMPTY_STRING,
    maxPrice: EMPTY_STRING,
    minPrice: EMPTY_STRING,
    color: EMPTY_STRING,
    babyChair: false,
    fullTank: false,
    rentalDuration: {
      from: EMPTY_STRING,
      to: EMPTY_STRING,
    },
    rightHandDrive: false,
    tariff: EMPTY_STRING,
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
    brand,
    name,
    minPrice,
    maxPrice,
    image,
    selectedCar,
  } = { ...props };
  draft.car.brand = brand || EMPTY_STRING;
  draft.car.name = name || EMPTY_STRING;
  draft.car.minPrice = minPrice || EMPTY_STRING;
  draft.car.maxPrice = maxPrice || EMPTY_STRING;
  draft.car.image = image || EMPTY_STRING;
  draft.car.selectedCar = selectedCar || EMPTY_STRING;
  return draft;
};

export default (state = initialState, action: IOrderInfoActionType) => produce(
  state,
  (draft: IOrderInfoState) => {
    switch (action.type) {
      case SET_CITY_DATA: return changeCityData(draft, action.location?.cityName, action.location?.cityCoords);
      case SET_MARKER_DATA: return changeMarkerData(draft, action.location?.markerName, action.location?.markerCoords);
      case SET_CAR_INFO: return carInfo(draft, action.car);
      default: return state;
    }
  },
);
