import produce from 'immer';
import { IOrderStatusInfoState, IOrderStatusState } from '../../types/state';
import { IOrderStatusActionType } from '../../types/actions';
import {
  GET_ORDER_STATUS_DATA,
  UPLOADING_ORDER_END,
  UPLOADING_ORDER_START,
} from '../../constants/actions/uploadingOrder';

const initialState: IOrderStatusState = {
  uploading: false,
  statusInfo: {} as IOrderStatusInfoState,
};

const uploadingStart = (draft: IOrderStatusState) => {
  draft.uploading = true;
  return draft;
};

const uploadingEnd = (draft: IOrderStatusState) => {
  draft.uploading = false;
  return draft;
};

const getOrderStatusData = (draft: IOrderStatusState, data?: IOrderStatusInfoState) => {
  if (data) {
    draft.statusInfo = data;
  }
  return draft;
};

export default (state = initialState, action: IOrderStatusActionType) => produce(
  state,
  (draft: IOrderStatusState) => {
    switch (action.type) {
      case UPLOADING_ORDER_START: return uploadingStart(draft);
      case UPLOADING_ORDER_END: return uploadingEnd(draft);
      case GET_ORDER_STATUS_DATA: return getOrderStatusData(draft, action.statusInfo);
      default: return state;
    }
  },
);
