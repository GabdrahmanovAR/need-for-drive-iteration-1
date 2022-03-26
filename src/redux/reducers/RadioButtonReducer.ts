import produce from 'immer';
import { IRadioButtonState } from '../../types/state';
import { EMPTY_STRING } from '../../constants/common';
import { IRadioButtonActionType } from '../../types/actions';
import { SELECT_ITEM } from '../../constants/actions/radioButton';

const initialState: IRadioButtonState = {
  selectedItem: 'all',
};

const selectItem = (draft: IRadioButtonState, item?: string) => {
  draft.selectedItem = item || EMPTY_STRING;
  return draft;
};

export default (state = initialState, action: IRadioButtonActionType) => produce(
  state,
  (draft: IRadioButtonState) => {
    switch (action.type) {
      case SELECT_ITEM: return selectItem(draft, action.selectedItem);
      default: return state;
    }
  },
);
