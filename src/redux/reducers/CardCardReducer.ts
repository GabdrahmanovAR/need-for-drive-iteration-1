import produce from 'immer';
import { ICarCardState } from '../../types/state';
import { EMPTY_STRING } from '../../constants/common';
import { ICarCardActionType } from '../../types/actions';
import { CHANGE_ACTIVE_CARD, GET_CAR_INFO } from '../../constants/actions/carModelCard';
import { ICars } from '../../constants/fake-data/cars';

export const initialCardModelCardState: ICarCardState = {
  activeCard: EMPTY_STRING,
  selectedCarInfo: {
    name: EMPTY_STRING,
    brand: EMPTY_STRING,
  } as ICars,
};

const changeActiveCard = (draft: ICarCardState, activeCard?: string) => {
  draft.activeCard = activeCard || EMPTY_STRING;
  return draft;
};

const getSelectedCarInfo = (draft: ICarCardState, carInfo?: ICars) => {
  draft.selectedCarInfo = carInfo || {} as ICars;
  return draft;
};

export default (state = initialCardModelCardState, action: ICarCardActionType) => produce(
  state,
  (draft: ICarCardState) => {
    switch (action.type) {
      case GET_CAR_INFO: return getSelectedCarInfo(draft, action.selectedCarInfo);
      case CHANGE_ACTIVE_CARD: return changeActiveCard(draft, action.activeCard);
      default: return state;
    }
  },
);
