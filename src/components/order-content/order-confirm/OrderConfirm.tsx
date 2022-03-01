import React from 'react';
import './OrderConfirm.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../button/Button';
import { orderConfirmSelector } from '../../../selectors/orderConfirmSelector';
import { changeOrderConfirmAction } from '../../../redux/actions/OrderConfirmAction';

const OrderConfirm = () => {
  const orderConfirmState = useSelector(orderConfirmSelector);
  const dispatch = useDispatch();

  const handleCancelBtnClick = () => {
    dispatch(changeOrderConfirmAction(false));
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={`order-confirm ${orderConfirmState.isActive && 'order-confirm_active'}`}>
      <div className="order-confirm__block">
        <h1 className="order-confirm__block__title">Подтвердить заказ</h1>
        <div className="order-confirm__block__buttons">
          <div><Button text="Подтвердить" /></div>
          <div onClick={handleCancelBtnClick} role="presentation">
            <Button
              text="Вернуться"
              customClass="order-confirm__cancel-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
