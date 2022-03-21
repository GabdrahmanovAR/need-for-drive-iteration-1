import { IState } from '../types/state';

export const uploadingOrderSelector = (state: IState) => ({
  uploading: state.uploadingOrder.uploading,
});
