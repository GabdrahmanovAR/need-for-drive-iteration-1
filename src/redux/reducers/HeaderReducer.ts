import produce from 'immer';
import { IHeaderState } from '../../types/state';
import { EMPTY_STRING } from '../../constants/common';
import { IHeaderActionType } from '../../types/actions';
import { HEADER_CLASS_CHANGE } from '../../constants/actions/header';

const initialState: IHeaderState = {
  customClass: EMPTY_STRING,
};

const addCustomClass = (draft: IHeaderState, customClass?: string) => {
  draft.customClass = customClass || EMPTY_STRING;
  return draft;
};

export default (state = initialState, action: IHeaderActionType) => produce(
  state,
  (draft: IHeaderState) => {
    switch (action.type) {
      case HEADER_CLASS_CHANGE: return addCustomClass(draft, action.customClass);
      default: return state;
    }
  },
);
