import produce from 'immer';
import { IOrderStepState } from '../../types/state';
import { IOrderStepActionType } from '../../types/actions';
import { ADVANCED_TAB_COMPLETED, LOCATION_TAB_COMPLETED, MODEL_TAB_COMPLETED } from '../../constants/actions/orderStep';
import { EMPTY_STRING } from '../../constants/common';

const initialState: IOrderStepState = {
  locationTabCompleted: false,
  modelTabCompleted: false,
  advancedTabCompleted: false,
  activeTab: EMPTY_STRING,
};

const changeLocTabState = (draft: IOrderStepState, isCompleted?: boolean) => {
  draft.locationTabCompleted = isCompleted || false;
  return draft;
};

const changeModelTabState = (draft: IOrderStepState, isCompleted?: boolean) => {
  draft.modelTabCompleted = isCompleted || false;
  return draft;
};

const changeAdvTabState = (draft: IOrderStepState, isCompleted?: boolean) => {
  draft.advancedTabCompleted = isCompleted || false;
  return draft;
};

export default (state = initialState, action: IOrderStepActionType) => produce(
  state,
  (draft: IOrderStepState) => {
    switch (action.type) {
      case LOCATION_TAB_COMPLETED: return changeLocTabState(draft, action.locationTabCompleted);
      case MODEL_TAB_COMPLETED: return changeModelTabState(draft, action.modelTabCompleted);
      case ADVANCED_TAB_COMPLETED: return changeAdvTabState(draft, action.advancedTabCompleted);
      default: return state;
    }
  },
);
