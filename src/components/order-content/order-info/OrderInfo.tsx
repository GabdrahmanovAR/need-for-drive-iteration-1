import React from 'react';
import './OrderInfo.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '../../button/Button';
import {
  ADVANCED_URL_PATH, EMPTY_STRING, ORDER_LOCATION_URL_PATH, RESULT_URL_PATH,
} from '../../../constants/common';
import { ButtonText } from '../../../utils/ButtonText';
import { NextTabUrl } from '../../../utils/NextTabUrl';
import { ButtonState } from '../../../utils/ButtonState';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';

const MIN_PRICE = '8000';
const MAX_PRICE = '12000';

const OrderInfo = () => {
  const { location, car } = useSelector(orderInfoSelector);
  const locationPath = useLocation();

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
          <div>
            <span>{location.cityName !== EMPTY_STRING ? location.cityName : 'Не выбран'}</span>
            {location.markerName !== EMPTY_STRING && <span>,</span>}
          </div>
          <span className={`
          ${location.markerName === EMPTY_STRING && 'order-info__details__address_disable'}`}
          >
            {location.markerName}
          </span>
        </div>
      </section>
      {/* Информация Вкладка - Модель */}
      <section className={`${(locationPath.pathname !== ORDER_LOCATION_URL_PATH)
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <span>Модель</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__info">
          {car.name === EMPTY_STRING
            ? 'Выберите авто'
            : `${car.brand}, ${car.name}`}
        </div>
      </section>
      {/* Информация Вкладка - Дополнительно */}
      <section className={`${(locationPath.pathname === ADVANCED_URL_PATH || locationPath.pathname === RESULT_URL_PATH)
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <div className="order-info__details__multiple-info multiple-info">
          {advancedInfoElement('Цвет', car.color)}
          {advancedInfoElement('Длительность аренды', '1д 2ч')}
          {advancedInfoElement('Тариф', car.tariff.split(',')[0])}
          {advancedInfoElement('Полный бак', 'Не выбрано')}
          {advancedInfoElement('Детское кресло', 'Не выбрано')}
          {advancedInfoElement('Правый руль', 'Не выбрано')}
        </div>
      </section>
      {/* Информация диапозон цен */}
      <section className="order-info__price">
        <span><strong>Цена: </strong></span>
        <span>
          {locationPath.pathname === RESULT_URL_PATH
            ? '16 000₽'
            : `от ${MIN_PRICE} до ${MAX_PRICE} ₽`}
        </span>
      </section>
      <Button
        text={ButtonText(locationPath.pathname)}
        isDisabled={ButtonState(locationPath.pathname, { location, car })}
        link={NextTabUrl(locationPath.pathname)}
      />
    </div>
  );
};

export default OrderInfo;
