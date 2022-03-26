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
import { CalculateRentalDuration } from '../../../utils/CalculateRentalDuration';

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
            : car.name}
        </div>
      </section>
      {/* Информация Вкладка - Дополнительно */}
      <section className={`${(locationPath.pathname === ADVANCED_URL_PATH || locationPath.pathname === RESULT_URL_PATH)
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <div className="order-info__details__multiple-info multiple-info">
          {advancedInfoElement('Цвет', car.currentColor)}
          {advancedInfoElement('Длительность аренды', CalculateRentalDuration(car.rentalDuration.from, car.rentalDuration.to))}
          {advancedInfoElement('Тариф', car.tariff.split(',')[0])}
          {advancedInfoElement('Полный бак', car.fullTank ? 'Да' : 'Не выбрано')}
          {advancedInfoElement('Детское кресло', car.babyChair ? 'Да' : 'Не выбрано')}
          {advancedInfoElement('Правый руль', car.rightHandDrive ? 'Да' : 'Не выбрано')}
        </div>
      </section>
      {/* Информация диапозон цен */}
      <section className="order-info__price">
        <span><strong>Цена: </strong></span>
        {car.totalCost === 0 || locationPath.pathname !== '/order/result'
          ? (
            <span>
              {(car.minPrice && car.maxPrice) === EMPTY_STRING
                ? 'автомобиль не выбран'
                : `от ${car.minPrice} до ${car.maxPrice} ₽`}
            </span>
          )
          : (
            <span>{`${car.totalCost}₽`}</span>
          )}
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
