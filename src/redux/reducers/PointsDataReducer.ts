import produce from 'immer';
import { IPointsDataActionType } from '../../types/actions';
import { IPointsDataState } from '../../types/state';
import { HIDE_POINTS_LOADER, LOAD_POINTS_SUCCESS, SHOW_POINTS_LOADER } from '../../constants/actions/pointsData';

const initialState: IPointsDataState = {
  data: [],
  isLoading: false,
};

const loadPointsData = (draft: IPointsDataState, data?: any) => {
  draft.data = data || [];
  return draft;
};

const showLoader = (draft: IPointsDataState) => {
  draft.isLoading = true;
  return draft;
};

const hideLoader = (draft: IPointsDataState) => {
  draft.isLoading = false;
  return draft;
};

export default (state = initialState, action: IPointsDataActionType) => produce(
  state,
  (draft: IPointsDataState) => {
    switch (action.type) {
      case LOAD_POINTS_SUCCESS: return loadPointsData(draft, action.data);
      case SHOW_POINTS_LOADER: return showLoader(draft);
      case HIDE_POINTS_LOADER: return hideLoader(draft);
      default: return state;
    }
  },
);
