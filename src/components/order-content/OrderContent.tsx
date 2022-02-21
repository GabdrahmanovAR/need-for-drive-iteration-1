import React from 'react';
import './OrderContent.scss';
import OrderLocation from './order-location/OrderLocation';

const OrderContent = () => (
  <section className="order-content">
    <OrderLocation />
  </section>
);

export default OrderContent;
