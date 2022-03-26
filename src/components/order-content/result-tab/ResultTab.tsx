import React, { useEffect } from 'react';
import './ResultTab.scss';
import { useSelector } from 'react-redux';
import { ScrollToTop } from '../../../utils/ScrollToTop';
import OrderConfirm from '../order-confirm/OrderConfirm';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';

const ResultTab = () => {
  const { car } = useSelector(orderInfoSelector);

  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <div className="result-tab">
      <section className="result-tab__car-info">
        <h2>{car.name}</h2>
        <div className="result-tab__car-info__number">К 761 НА 73</div>
        <div>
          <span>Топливо </span>
          <span>100%</span>
        </div>
        <div>
          <span>Доступна с </span>
          <span>12.06.2019 12:00</span>
        </div>
      </section>
      <section className="result-tab__car-img">
        <img src={car.image} alt="Car Model" />
      </section>
      <OrderConfirm />
    </div>
  );
};

export default ResultTab;
