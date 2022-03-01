import React, { FC } from 'react';
import './OrderInfo.scss';
import { connect } from 'react-redux';
import Button from '../../button/Button';
import { IState } from '../../../types/state';
import { EMPTY_STRING } from '../../../constants/common';

const MIN_PRICE = '8000';
const MAX_PRICE = '12000';

interface IOrderInfoProps {
  cityName: string,
  markerName: string,
}

const OrderInfo: FC<IOrderInfoProps> = ({ cityName, markerName }) => (
  <div className="order-info">
    <header className="order-info__title"><h3>Ваш заказ:</h3></header>
    <section className="order-info__details">
      <span>Пункт выдачи</span>
      <span className="order-info__details__dots" />
      <div className="order-info__details__address">
        <span>{cityName}</span>
        {markerName !== EMPTY_STRING && <span>,</span>}
        <span className={`${markerName === EMPTY_STRING && 'order-info__details__address_disable'}`}>{markerName}</span>
      </div>
    </section>
    <section className="order-info__price">
      <span><strong>Цена:</strong></span>
      <span>{` от ${MIN_PRICE} до ${MAX_PRICE} ₽`}</span>
    </section>
    <Button text="Выбрать модель" isDisabled={((cityName === EMPTY_STRING || markerName === EMPTY_STRING))} />
  </div>
);

export default connect(
  (state: IState) => ({
    cityName: state.orderLocation.cityName,
    markerName: state.orderLocation.markerName,
  }),
)(OrderInfo);
