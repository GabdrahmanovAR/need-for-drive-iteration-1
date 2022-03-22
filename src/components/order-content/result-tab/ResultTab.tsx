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
import { orderStatusSelector } from '../../../selectors/orderStatusSelector';

const ResultTab = () => {
  const locationPath = useLocation();
  const dispatch = useDispatch();

  const { car } = useSelector(orderInfoSelector);
  const orderStatusState = useSelector(orderStatusSelector);
  const {
    name,
    number,
    tank,
    rentalDuration,
    image,
  } = locationPath.pathname !== ORDER_STATUS_URL_PATH
    ? car
    : {
      name: orderStatusState.statusInfo.car.name,
      number: CarNumber(orderStatusState.statusInfo.car.number),
      tank: '100',
      rentalDuration: {
        from: moment(orderStatusState.statusInfo.dateFrom).format('DD MMMM YYYY'),
      },
      image: orderStatusState.statusInfo.car.image,
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
