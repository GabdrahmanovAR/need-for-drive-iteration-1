import React from 'react';
import './OrderContent.scss';
import { Route, Routes } from 'react-router-dom';
import OrderLocation from './order-location/OrderLocation';
import OrderInfo from './order-info/OrderInfo';

const OrderContent = () => (
  <section className="order-content">
    <Routes>
      <Route path="/location" element={<OrderLocation />} />
    </Routes>
    <OrderInfo />
  </section>
);

export default OrderContent;
