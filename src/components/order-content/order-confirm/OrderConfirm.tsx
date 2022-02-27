import React from 'react';
import { EMPTY_STRING } from '../../../constants/common';
import './OrderConfirm.scss';
import Button from '../../button/Button';

interface IProps {
  customClass?: string,
}

const OrderConfirm = ({ customClass }: IProps) => (
  <div className={`order-confirm ${customClass !== EMPTY_STRING && customClass}`}>
    <div className="order-confirm__block">
      <h1 className="order-confirm__block__title">Подтвердить заказ</h1>
      <div className="order-confirm__block__buttons">
        <div><Button text="Подветрдить" /></div>
        <div><Button text="Вернуться" customClass="order-confirm__cancel-button" /></div>
      </div>
    </div>
  </div>
);

OrderConfirm.defaultProps = {
  customClass: EMPTY_STRING,
};

export default OrderConfirm;
