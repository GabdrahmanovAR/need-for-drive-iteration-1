import React from 'react';
import './OrderContent.scss';
import { Route, Routes } from 'react-router-dom';
import OrderInfo from './order-info/OrderInfo';
import OrderLocation from './location-tab/LocationTab';
import CarsTab from './cars-tab/CarsTab';

const OrderContent = () => (
  <section className="order-content">
    <Routes>
      <Route path="/location" element={<OrderLocation />} />
      <Route path="/models" element={<CarsTab />} />
    </Routes>
    <OrderInfo />
  </section>
);

export default OrderContent;
