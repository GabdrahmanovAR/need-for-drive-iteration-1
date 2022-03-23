import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { IOrderStatusActionType } from '../../types/actions';
import {
  GET_ORDER_STATUS_DATA,
  UPLOADING_ORDER_END,
  UPLOADING_ORDER_START,
} from '../../constants/actions/uploadingOrder';
import { IOrderInfoState } from '../../types/state';
import { getOrderById, registerOrder } from '../../api-request/apiRequest';
import { IOrderStatus, IOrderStatusResponse } from '../../types/api';

const uploadingOrderStart = (): IOrderStatusActionType => ({
  type: UPLOADING_ORDER_START,
});

const uploadingOrderEnd = (): IOrderStatusActionType => ({
  type: UPLOADING_ORDER_END,
});

const getOrderStatusData = (data: IOrderStatusResponse): IOrderStatusActionType => ({
  type: GET_ORDER_STATUS_DATA,
  statusInfo: {
    id: data.id,
    car: {
      name: data.carId.name,
      image: data.carId.thumbnail.path,
      number: data.carId.number,
    },
    color: data.color,
    dateTo: data.dateTo,
    dateFrom: data.dateFrom,
    isFullTank: data.isFullTank,
    isNeedChildChair: data.isNeedChildChair,
    isRightWheel: data.isRightWheel,
    price: data.price,
    rate: data.rateId.rateTypeId.name,
    cityName: data.cityId.name,
    pointName: data.pointId.address,
  },
});

export const orderStatusAction = (orderInfo: IOrderInfoState) => async (dispatch: Dispatch) => {
  dispatch(uploadingOrderStart());
  try {
    const response: AxiosResponse<IOrderStatus> = await registerOrder(orderInfo);
    localStorage.setItem('orderId', response.data.data.id);
    dispatch(getOrderStatusData(response.data.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(uploadingOrderEnd());
  }
};

export const getOrderStatusByIdAction = (orderId: string) => async (dispatch: Dispatch) => {
  dispatch(uploadingOrderStart());
  try {
    const response: AxiosResponse<IOrderStatus> = await getOrderById(orderId);
    dispatch(getOrderStatusData(response.data.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(uploadingOrderEnd());
  }
};
