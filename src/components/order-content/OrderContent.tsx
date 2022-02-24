import React from 'react';
import './OrderContent.scss';
import { Route, Routes } from 'react-router-dom';
import OrderInfo from './order-info/OrderInfo';
import OrderLocation from './order-location/OrderLocation';
import CarModels from './car-models/CarModels';

const OrderContent = () => (
  <section className="order-content">
    <Routes>
      <Route path="/location" element={<OrderLocation />} />
      <Route path="/models" element={<CarModels />} />
    </Routes>
    <OrderInfo />
  </section>
);

export default OrderContent;
