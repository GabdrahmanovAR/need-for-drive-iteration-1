import React from 'react';
import './OrderContent.scss';
import OrderLocation from './order-location/OrderLocation';
import OrderInfo from './order-info/OrderInfo';

const OrderContent = () => (
  <section className="order-content">
    <OrderLocation />
    <OrderInfo />
  </section>
);

export default OrderContent;
