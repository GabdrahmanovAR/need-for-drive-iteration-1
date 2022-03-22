import React from 'react';
import './OrderStatus.scss';
import ResultTab from '../order-content/result-tab/ResultTab';
import OrderInfo from '../order-content/order-info/OrderInfo';

const OrderStatus = () => (
  <main className="order-status">
    <section className="order-status__number">
      Заказ номер RU58491823
    </section>
    <section className="order-status__info">
      <ResultTab />
      <OrderInfo />
    </section>
  </main>
);

export default OrderStatus;
