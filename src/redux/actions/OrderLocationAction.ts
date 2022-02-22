import { Dispatch } from 'redux';
import { IOrderLocationActionType } from '../../types/actions';
import { CHANGE_CITY_DATA, CHANGE_MARKER_DATA } from '../../constants/actions/orderLocation';

const changeCityData = (cityName: string, cityCoords: number[]): IOrderLocationActionType => ({
  type: CHANGE_CITY_DATA,
  cityName,
  cityCoords,
});

const changeMarkerData = (markerName: string, markerCoords: number[]): IOrderLocationActionType => ({
  type: CHANGE_MARKER_DATA,
  markerName,
  markerCoords,
});

export const changeLocationDataAction = (name: string, coords: number[], key: string) => (dispatch: Dispatch) => {
  if (key === 'city') dispatch(changeCityData(name, coords));
  else dispatch(changeMarkerData(name, coords));
};
