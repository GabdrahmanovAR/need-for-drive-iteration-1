import React, { useEffect, useState } from 'react';
import './OrderPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import OrderContent from '../../components/order-content/OrderContent';
import Header from '../../components/header/Header';
import OrderStep from '../../components/order-step/OrderStep';
import { getPointsAction } from '../../redux/actions/PointsDataAction';
import { pointsDataSelector } from '../../selectors/pointsDataSelector';
import ScrollToTopBtn from '../../components/scroll-to-top-button/ScrollToTopBtn';

const OrderPage = () => {
  const dispatch = useDispatch();
  const pointsDataState = useSelector(pointsDataSelector);
  const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);

  useEffect(() => {
    if (pointsDataState.data.length === 0) {
      dispatch(getPointsAction());
    }
  }, []);

  const handleOrderPageScroll = (event: any) => {
    if (event.target.scrollTop > 200) setIsScrollBtnVisible(true);
    else setIsScrollBtnVisible(false);
  };

  return (
    <main className="order-page" onScroll={handleOrderPageScroll}>
      <Header customClass="order-page__header" />
      <OrderStep />
      <OrderContent />
      <ScrollToTopBtn isVisible={isScrollBtnVisible} />
    </main>
  );
};

export default OrderPage;
