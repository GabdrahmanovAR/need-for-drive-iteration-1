import React, { useEffect } from 'react';
import './ResultTab.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ScrollToTop } from '../../../utils/ScrollToTop';
import OrderConfirm from '../order-confirm/OrderConfirm';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';
import { CarNumber } from '../../../utils/CarNumber';
import { orderStepSelector } from '../../../selectors/orderStepSelector';
import { CalculateTotalCost } from '../../../utils/CalculateTotalCost';
import { setTotalCostAction } from '../../../redux/actions/OrderInfoAction';

const ResultTab = () => {
  const { car } = useSelector(orderInfoSelector);
  const orderStepState = useSelector(orderStepSelector);
  const path = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    ScrollToTop();
    dispatch(setTotalCostAction(CalculateTotalCost(car)));
  }, []);

  return (
    <div className="result-tab">
      <section className="result-tab__car-info">
        <h2>{car.name}</h2>
        <div className="result-tab__car-info__number">{CarNumber(car.number)}</div>
        <div>
          <span>Топливо </span>
          <span>{`${car.tank}%`}</span>
        </div>
        <div>
          <span>Доступна с </span>
          <span>{car.rentalDuration.from}</span>
        </div>
      </section>
      <section className="result-tab__car-img">
        <img src={car.image} alt="Car Model" />
      </section>
      <OrderConfirm />
      {!orderStepState.locationTabCompleted && path('/order/location')}
    </div>
  );
};

export default ResultTab;
