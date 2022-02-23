import React from 'react';
import './OrderInfo.scss';
import { connect } from 'react-redux';
import Button from '../../button/Button';
import { IState } from '../../../types/state';
import { EMPTY_STRING } from '../../../constants/common';

const minPrice = '8000';
const maxPrice = '12000';

interface IProps {
  cityName: string,
  markerName: string,
}

const OrderInfo = ({ cityName, markerName }: IProps) => (
  <div className="order-info">
    <header className="order-info__title"><h3>Ваш заказ:</h3></header>
    <section className="order-info__details">
      <span>Пункт выдачи</span>
      <span className="order-info__details__dots" />
      <div className="order-info__details__address">
        <span>{`${cityName}${markerName !== EMPTY_STRING ? ',' : EMPTY_STRING}`}</span>
        <span className={`${markerName === EMPTY_STRING && 'order-info__details__address_disable'}`}>{markerName}</span>
      </div>
    </section>
    <section className="order-info__price">
      <span><strong>Цена:</strong></span>
      <span>{` от ${minPrice} до ${maxPrice} ₽`}</span>
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
