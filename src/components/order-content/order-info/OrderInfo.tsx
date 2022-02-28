import React from 'react';
import './OrderInfo.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '../../button/Button';
import {
  ADVANCED_URL_PATH, EMPTY_STRING, MODELS_URL_PATH, RESULT_URL_PATH,
} from '../../../constants/common';
import { ButtonText } from '../../../utils/ButtonText';
import { carCardSelector } from '../../../selectors/carCardSelector';
import { NextTabUrl } from '../../../utils/NextTabUrl';
import { ButtonState } from '../../../utils/ButtonState';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';

const minPrice = '8000';
const maxPrice = '12000';

const OrderInfo = () => {
  const { location, car } = useSelector(orderInfoSelector);
  const carCardState = useSelector(carCardSelector);
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
          <span>
            {`${location.cityName}${location.markerName !== EMPTY_STRING ? ',' : EMPTY_STRING}`}
          </span>
          <span className={`
          ${location.markerName === EMPTY_STRING && 'order-info__details__address_disable'}`}
          >
            {location.markerName}
          </span>
        </div>
      </section>
      {/* Информация Вкладка - Модель */}
      <section className={`${(locationPath.pathname === MODELS_URL_PATH || locationPath.pathname === ADVANCED_URL_PATH)
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <span>Модель</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__info">
          {carCardState.selectedCarInfo.name === EMPTY_STRING
            ? 'Выберите авто'
            : `${carCardState.selectedCarInfo.brand}, ${carCardState.selectedCarInfo.name}`}
        </div>
      </section>
      {/* Информация Вкладка - Дополнительно */}
      <section className={`${(locationPath.pathname === ADVANCED_URL_PATH || locationPath.pathname === RESULT_URL_PATH)
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
        <span><strong>Цена: </strong></span>
        <span>
          {locationPath.pathname === RESULT_URL_PATH
            ? '16 000₽'
            : `от ${minPrice} до ${maxPrice} ₽`}
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
