import React, { useEffect } from 'react';
import './OrderPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import OrderContent from '../../components/order-content/OrderContent';
import Header from '../../components/header/Header';
import OrderStep from '../../components/order-step/OrderStep';
import { getPointsAction } from '../../redux/actions/PointsDataAction';
import { pointsDataSelector } from '../../selectors/pointsDataSelector';

const OrderPage = () => {
  const dispatch = useDispatch();
  const pointsDataState = useSelector(pointsDataSelector);

  useEffect(() => {
    if (pointsDataState.data.length === 0) {
      dispatch(getPointsAction());
    }
  }, []);

  return (
    <main className="order-page">
      <Header customClass="order-page__header" />
      <OrderStep />
      <OrderContent />
    </main>
  );
};

export default OrderPage;
