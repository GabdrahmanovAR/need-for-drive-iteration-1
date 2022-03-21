import produce from 'immer';
import { IUploadingOrderState } from '../../types/state';
import { IUploadingOrderActionType } from '../../types/actions';
import { UPLOADING_ORDER_END, UPLOADING_ORDER_START } from '../../constants/actions/uploadingOrder';

const initialState: IUploadingOrderState = {
  uploading: false,
};

const uploadingStart = (draft: IUploadingOrderState) => {
  draft.uploading = true;
  return draft;
};

const uploadingEnd = (draft: IUploadingOrderState) => {
  draft.uploading = false;
  return draft;
};

export default (state = initialState, action: IUploadingOrderActionType) => produce(
  state,
  (draft: IUploadingOrderState) => {
    switch (action.type) {
      case UPLOADING_ORDER_START: return uploadingStart(draft);
      case UPLOADING_ORDER_END: return uploadingEnd(draft);
      default: return state;
    }
  },
);
