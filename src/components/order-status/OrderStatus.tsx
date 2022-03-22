import React from 'react';
import './OrderStatus.scss';
import { useSelector } from 'react-redux';
import ResultTab from '../order-content/result-tab/ResultTab';
import OrderInfo from '../order-content/order-info/OrderInfo';
import { orderStatusSelector } from '../../selectors/orderStatusSelector';

const OrderStatus = () => {
  const orderStatusState = useSelector(orderStatusSelector);

  return (
    <main className="order-status">
      <section className="order-status__number">
        {`Заказ номер ${orderStatusState.statusInfo.id}`}
      </section>
      <section className="order-status__info">
        <ResultTab />
        <OrderInfo />
      </section>
    </main>
  );
};

export default OrderStatus;
