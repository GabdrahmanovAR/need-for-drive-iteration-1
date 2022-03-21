import { Dispatch } from 'redux';
import { IUploadingOrderActionType } from '../../types/actions';
import { UPLOADING_ORDER_END, UPLOADING_ORDER_START } from '../../constants/actions/uploadingOrder';
import { IOrderInfoState } from '../../types/state';
import { registerOrder } from '../../api-request/apiRequest';

const uploadingOrderStart = (): IUploadingOrderActionType => ({
  type: UPLOADING_ORDER_START,
});

const uploadingOrderEnd = (): IUploadingOrderActionType => ({
  type: UPLOADING_ORDER_END,
});

export const uploadingOrderAction = (orderInfo: IOrderInfoState) => async (dispatch: Dispatch) => {
  dispatch(uploadingOrderStart());
  try {
    const response = await registerOrder(orderInfo);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(uploadingOrderEnd());
  }
};
