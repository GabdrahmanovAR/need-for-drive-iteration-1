import { IState } from '../types/state';

export const orderStatusSelector = (state: IState) => ({
  uploading: state.orderStatus.uploading,
  statusInfo: state.orderStatus.statusInfo,
});
