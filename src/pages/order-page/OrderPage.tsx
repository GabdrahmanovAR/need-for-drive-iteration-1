import React from 'react';
import './OrderPage.scss';
import OrderContent from '../../components/order-content/OrderContent';
import Header from '../../components/header/Header';
import OrderStep from '../../components/order-step/OrderStep';

const OrderPage = () => (
  <main className="order-page">
    <Header customClass="order-page__header" />
    <OrderStep />
    <OrderContent />
  </main>
);

export default OrderPage;
