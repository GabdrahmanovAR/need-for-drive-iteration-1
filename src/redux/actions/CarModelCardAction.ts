import { ICarCardActionType } from '../../types/actions';
import { CHANGE_ACTIVE_CARD, GET_CAR_INFO } from '../../constants/actions/carModelCard';
import { ICars } from '../../constants/fake-data/cars';

export const changeActiveCardAction = (activeCard: string): ICarCardActionType => ({
  type: CHANGE_ACTIVE_CARD,
  activeCard,
});

export const changeSelectedCarInfoAction = (selectedCarInfo: ICars): ICarCardActionType => ({
  type: GET_CAR_INFO,
  selectedCarInfo,
});
