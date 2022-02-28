import { Dispatch } from 'redux';
import { IOrderInfoActionType } from '../../types/actions';
import { SET_CITY_DATA, SET_MARKER_DATA } from '../../constants/actions/orderInfo';

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

// export const changeCarNameAction = (): IOrderCarInfoActionType => ({
//
// })

export const changeLocationDataAction = (name: string, coords: number[], key: string) => (dispatch: Dispatch) => {
  if (key === 'city') dispatch(changeCityData(name, coords));
  else dispatch(changeMarkerData(name, coords));
};
