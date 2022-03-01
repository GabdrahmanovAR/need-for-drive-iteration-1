import React, { FC } from 'react';
import './OrderInfo.scss';
import { connect, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '../../button/Button';
import { IState } from '../../../types/state';
import { EMPTY_STRING, MODELS_URL_PATH } from '../../../constants/common';
import { OrderInfoBtnText } from '../../../utils/OrderInfoBtnText';
import { carModelCardSelector } from '../../../selectors/carModelCardSelector';

const MIN_PRICE = '8000';
const MAX_PRICE = '12000';

interface IOrderInfoProps {
  cityName: string,
  markerName: string,
}

const OrderInfo: FC<IOrderInfoProps> = ({ cityName, markerName }) => {
  const location = useLocation();
  const state = useSelector(carModelCardSelector);

  return (
    <div className="order-info">
      <header className="order-info__title"><h3>Ваш заказ:</h3></header>
      <section className="order-info__details">
        <span>Пункт выдачи</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__address">
          <span>{cityName}</span>
          {markerName !== EMPTY_STRING && <span>,</span>}
          <span className={`
          ${markerName === EMPTY_STRING && 'order-info__details__address_disable'}`}
          >
            {markerName}
          </span>
        </div>
      </section>
      <section className={`${location.pathname === MODELS_URL_PATH
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <span>Модель</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__model">
          {state.selectedCarInfo.name === EMPTY_STRING
            ? 'Выберите авто'
            : `${state.selectedCarInfo.brand}, ${state.selectedCarInfo.name}`}
        </div>
      </section>
      <section className="order-info__price">
        <span><strong>Цена:</strong></span>
        <span>{` от ${MIN_PRICE} до ${MAX_PRICE} ₽`}</span>
      </section>
      <Button
        text={OrderInfoBtnText(location.pathname)}
        isDisabled={((cityName === EMPTY_STRING || markerName === EMPTY_STRING))}
        link={MODELS_URL_PATH}
      />
    </div>
  );
};

export default connect(
  (state: IState) => ({
    cityName: state.orderLocation.cityName,
    markerName: state.orderLocation.markerName,
  }),
)(OrderInfo);
