import React from 'react';
import './OrderContent.scss';
import { Route, Routes } from 'react-router-dom';
import OrderInfo from './order-info/OrderInfo';
import OrderLocation from './location-tab/LocationTab';
import CarsTab from './cars-tab/CarsTab';
import AdvancedTab from './advanced-tab/AdvancedTab';
import ResultTab from './result-tab/ResultTab';
import OrderConfirm from './order-confirm/OrderConfirm';

const OrderContent = () => (
  <section className="order-content">
    <Routes>
      <Route path="/location" element={<OrderLocation />} />
      <Route path="/models" element={<CarsTab />} />
      <Route path="/advanced" element={<AdvancedTab />} />
      <Route path="/result" element={<ResultTab />} />
    </Routes>
    <OrderInfo />
    <OrderConfirm />
  </section>
);

export default OrderContent;
