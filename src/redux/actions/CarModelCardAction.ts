import { ICarModelCardActionType } from '../../types/actions';
import { CHANGE_ACTIVE_CARD, GET_CAR_INFO } from '../../constants/actions/carModelCard';
import { ICars } from '../../constants/fake-data/cars';

export const changeActiveCardAction = (activeCard: string): ICarModelCardActionType => ({
  type: CHANGE_ACTIVE_CARD,
  activeCard,
});

export const changeSelectedCarInfoAction = (selectedCarInfo: ICars): ICarModelCardActionType => ({
  type: GET_CAR_INFO,
  selectedCarInfo,
});
