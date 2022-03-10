import React from 'react';
import './OrderStep.scss';
import nextStepIcon from '../../assets/icons/location-arrow.svg';

const OrderStep = () => (
  <section className="order-step">
    <nav className="order-step__nav">
      <ul className="order-step__nav__list">
        <li className="order-step__nav__list_active">
          <span>Местоположение</span>
          <img src={nextStepIcon} alt="Step Icon" />
        </li>
        <li>
          <span>Модель</span>
          <img src={nextStepIcon} alt="Step Icon" />
        </li>
        <li>
          <span>Дополнительно</span>
          <img src={nextStepIcon} alt="Step Icon" />
        </li>
        <li>Итого</li>
      </ul>
    </nav>
  </section>
);

export default OrderStep;
