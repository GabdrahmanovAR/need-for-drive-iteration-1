import React from 'react';
import './OrderInfo.scss';
import Button from '../../button/Button';

const city = 'Ульяновск';
const street = 'Нариманова 42';
const minPrice = '8000';
const maxPrice = '12000';

const OrderInfo = () => (
  <div className="order-info">
    <header className="order-info__title"><h3>Ваш заказ:</h3></header>
    <section className="order-info__details">
      <span>Пункт выдачи</span>
      <span className="order-info__details__dots" />
      <div className="order-info__details__address">
        <span>{`${city}${street === 'Нариманова 42' && ','}`}</span>
        <span className={`${street !== 'Нариманова 42' && 'order-info__details__address_disable'}`}>{street}</span>
      </div>
    </section>
    <section className="order-info__price">
      <span><strong>Цена:</strong></span>
      <span>{` от ${minPrice} до ${maxPrice} ₽`}</span>
    </section>
    <Button text="Выбрать модель" isDisabled />
  </div>
);

export default OrderInfo;
