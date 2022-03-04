import { Dispatch } from 'redux';
import { IPointsDataActionType } from '../../types/actions';
import { HIDE_POINTS_LOADER, LOAD_POINTS_SUCCESS, SHOW_POINTS_LOADER } from '../../constants/actions/pointsData';
import { getPickupPoints } from '../../api-request/apiRequest';

export const showPointsLoaderAction = (): IPointsDataActionType => ({
  type: SHOW_POINTS_LOADER,
});

export const hidePointsLoaderAction = (): IPointsDataActionType => ({
  type: HIDE_POINTS_LOADER,
});

export const loadPointsDataAction = (data: any): IPointsDataActionType => ({
  type: LOAD_POINTS_SUCCESS,
  data,
});

export const dataAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch(showPointsLoaderAction());
    const response = await getPickupPoints();
    dispatch(loadPointsDataAction(response.data.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(hidePointsLoaderAction());
  }
};
