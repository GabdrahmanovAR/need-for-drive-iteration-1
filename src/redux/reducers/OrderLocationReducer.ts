import produce from 'immer';
import { IOrderLocationState } from '../../types/state';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../constants/common';
import { IOrderLocationActionType } from '../../types/actions';
import { CHANGE_CITY_DATA, CHANGE_MARKER_DATA } from '../../constants/actions/orderLocation';

const initialState: IOrderLocationState = {
  cityName: EMPTY_STRING,
  markerName: EMPTY_STRING,
  cityCoords: [54.314192, 48.403132],
  markerCoords: EMPTY_ARRAY,
  selectionCompleted: false,
};

const changeCityData = (draft: IOrderLocationState, cityName?: string, cityCoords?: number[]) => {
  draft.cityName = cityName || EMPTY_STRING;
  draft.cityCoords = cityCoords || EMPTY_ARRAY;
  return draft;
};

const changeMarkerData = (draft: IOrderLocationState, markerName?: string, markerCoords?: number[]) => {
  draft.markerName = markerName || EMPTY_STRING;
  draft.markerCoords = markerCoords || EMPTY_ARRAY;
  return draft;
};

export default (state = initialState, action: IOrderLocationActionType) => produce(
  state,
  (draft: IOrderLocationState) => {
    switch (action.type) {
      case CHANGE_CITY_DATA: return changeCityData(draft, action.cityName, action.cityCoords);
      case CHANGE_MARKER_DATA: return changeMarkerData(draft, action.markerName, action.markerCoords);
      default: return state;
    }
  },
);
