import produce from 'immer';
import { IOrderInfoState } from '../../types/state';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../constants/common';
import { IOrderInfoActionType } from '../../types/actions';
import { SET_CITY_DATA, SET_MARKER_DATA } from '../../constants/actions/orderInfo';

const initialState: IOrderInfoState = {
  location: {
    cityName: 'Ульяновск',
    markerName: EMPTY_STRING,
    cityCoords: [54.314192, 48.403132],
    markerCoords: EMPTY_ARRAY,
    selectionCompleted: false,
  },
  car: {
    brand: EMPTY_STRING,
    name: EMPTY_STRING,
    color: EMPTY_STRING,
    rentalDuration: {
      from: EMPTY_STRING,
      to: EMPTY_STRING,
    },
    tariff: EMPTY_STRING,
    fullTank: false,
    babyChair: false,
    rightHandDrive: false,
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

export default (state = initialState, action: IOrderInfoActionType) => produce(
  state,
  (draft: IOrderInfoState) => {
    switch (action.type) {
      case SET_CITY_DATA: return changeCityData(draft, action.location?.cityName, action.location?.cityCoords);
      case SET_MARKER_DATA: return changeMarkerData(draft, action.location?.markerName, action.location?.markerCoords);
      default: return state;
    }
  },
);
