import React from 'react';
import './OrderInfo.scss';
import { connect, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '../../button/Button';
import { IState } from '../../../types/state';
import {
  ADVANCED_URL_PATH, EMPTY_STRING, MODELS_URL_PATH, RESULT_URL_PATH,
} from '../../../constants/common';
import { OrderInfoBtnText } from '../../../utils/OrderInfoBtnText';
import { carCardSelector } from '../../../selectors/carCardSelector';
import OrderConfirm from '../order-confirm/OrderConfirm';

const minPrice = '8000';
const maxPrice = '12000';

interface IProps {
  cityName: string,
  markerName: string,
}

const OrderInfo = ({ cityName, markerName }: IProps) => {
  const location = useLocation();
  const state = useSelector(carCardSelector);

  const advancedInfoElement = (title: string, value: string) => (
    <div className="multiple-info__element">
      <span>{title}</span>
      <span className="order-info__details__dots" />
      <div className="order-info__details__info">{value}</div>
    </div>
  );

  return (
    <div className="order-info">
      <header className="order-info__title"><h3>Ваш заказ:</h3></header>
      {/* Информация Вкладка - Местоположение */}
      <section className="order-info__details">
        <span className="order-info__details__title">Пункт выдачи</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__address">
          <span>{`${cityName}${markerName !== EMPTY_STRING ? ',' : EMPTY_STRING}`}</span>
          <span className={`
          ${markerName === EMPTY_STRING && 'order-info__details__address_disable'}`}
          >
            {markerName}
          </span>
        </div>
      </section>
      {/* Информация Вкладка - Модель */}
      <section className={`${(location.pathname === MODELS_URL_PATH || location.pathname === ADVANCED_URL_PATH)
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <span>Модель</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__info">
          {state.selectedCarInfo.name === EMPTY_STRING
            ? 'Выберите авто'
            : `${state.selectedCarInfo.brand}, ${state.selectedCarInfo.name}`}
        </div>
      </section>
      {/* Информация Вкладка - Дополнительно */}
      <section className={`${(location.pathname === ADVANCED_URL_PATH || location.pathname === RESULT_URL_PATH)
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <div className="order-info__details__multiple-info multiple-info">
          {advancedInfoElement('Цвет', 'Любой')}
          {advancedInfoElement('Длительность аренды', '1д 2ч')}
          {advancedInfoElement('Тариф', 'На сутки')}
          {advancedInfoElement('Полный бак', 'Да')}
          {advancedInfoElement('Детское кресло', 'Да')}
          {advancedInfoElement('Правый руль', 'Да')}
        </div>
      </section>
      {/* Информация диапозон цен */}
      <section className="order-info__price">
        <span><strong>Цена:</strong></span>
        <span>{` от ${minPrice} до ${maxPrice} ₽`}</span>
      </section>
      <Button
        text={OrderInfoBtnText(location.pathname)}
        // isDisabled={((cityName === EMPTY_STRING || markerName === EMPTY_STRING))}
        link={MODELS_URL_PATH}
      />
      <OrderConfirm customClass="order-confirm_active" />
    </div>
  );
};

export default connect(
  (state: IState) => ({
    cityName: state.orderLocation.cityName,
    markerName: state.orderLocation.markerName,
  }),
)(OrderInfo);
