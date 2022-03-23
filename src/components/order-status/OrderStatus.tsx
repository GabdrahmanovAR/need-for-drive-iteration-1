import React, { useEffect } from 'react';
import './OrderStatus.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ResultTab from '../order-content/result-tab/ResultTab';
import OrderInfo from '../order-content/order-info/OrderInfo';
import { orderStatusSelector } from '../../selectors/orderStatusSelector';
import { getOrderStatusByIdAction } from '../../redux/actions/OrderStatusAction';
import { EMPTY_STRING } from '../../constants/common';
import Spinner from '../Spinner/Spinner';
import Header from '../header/Header';

const OrderStatus = () => {
  const orderStatusState = useSelector(orderStatusSelector);
  const dispatch = useDispatch();
  const { orderId } = useParams();

  useEffect(() => {
    if (localStorage.getItem('orderId')) {
      dispatch(getOrderStatusByIdAction(localStorage.getItem('orderId') || EMPTY_STRING));
    }
  }, []);

  const orderStatusContent = () => {
    console.log(orderId);
    if (orderId) {
      return (
        <div>
          <section className="order-status__number">
            {`Заказ номер ${orderStatusState.statusInfo.id}`}
          </section>
          <section className="order-status__info">
            <ResultTab />
            <OrderInfo />
          </section>
        </div>
      );
    }
    return <div>У вас нет зарегистрированных заказов</div>;
  };

  return (
    <main className="order-status">
      <Header customClass="order-page__header" />
      {orderStatusState.loading ? <Spinner />
        : (
          orderStatusContent()
        )}
    </main>
  );
};

export default OrderStatus;
