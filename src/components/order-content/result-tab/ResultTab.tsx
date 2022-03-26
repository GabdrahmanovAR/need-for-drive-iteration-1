import React, { useEffect } from 'react';
import './ResultTab.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { ScrollToTop } from '../../../utils/ScrollToTop';
import OrderConfirm from '../order-confirm/OrderConfirm';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';
import { CarNumber } from '../../../utils/CarNumber';
import { CalculateTotalCost } from '../../../utils/CalculateTotalCost';
import { setTotalCostAction } from '../../../redux/actions/OrderInfoAction';
import { ORDER_STATUS_URL_PATH } from '../../../constants/common';

const ResultTab = () => {
  const locationPath = useLocation();
  const dispatch = useDispatch();

  const { car } = useSelector(orderInfoSelector);
  const {
    name,
    number,
    tank,
    rentalDuration,
    image,
  } = locationPath.pathname !== ORDER_STATUS_URL_PATH
    ? car
    : {
      name: 'Hyndai, i30 N',
      number: 'K 761 HA 73',
      tank: '100',
      rentalDuration: {
        from: '12.06.2019 12:00',
      },
      image: '',
    };

  useEffect(() => {
    ScrollToTop();
    dispatch(setTotalCostAction(CalculateTotalCost(car)));
  }, []);

  return (
    <div className="result-tab">
      <section className="result-tab__car-info">
        {locationPath.pathname === ORDER_STATUS_URL_PATH
          ? (
            <div>
              <h2>Ваш заказ подтверждён</h2>
              <h3>{name}</h3>
            </div>
          )
          : <h2>{name}</h2>}
        <div className="result-tab__car-info__number">{CarNumber(number)}</div>
        <div>
          <span>Топливо </span>
          <span>{`${tank}%`}</span>
        </div>
        <div>
          <span>Доступна с </span>
          <span>{moment(rentalDuration.from).format('DD MMMM YYYY')}</span>
        </div>
      </section>
      <section className="result-tab__car-img">
        <img src={image} alt="Car Model" />
      </section>
      <OrderConfirm />
    </div>
  );
};

export default ResultTab;
