import React, { BaseSyntheticEvent } from 'react';
import { EMPTY_FUNC, EMPTY_STRING, EmptyFuncType } from '../../../constants/common';
import deleteIcon from '../../../assets/icons/delete-city.svg';

interface IProps {
  title: string,
  fieldValue: string,
  placeholder: string,
  onInputFunc?: (e: BaseSyntheticEvent) => void,
  onClickInputFunc?: EmptyFuncType,
  onClickBtnFunc?: EmptyFuncType,
  childComponent?: React.ReactNode,
}

const OrderInputField = ({
  title, fieldValue, placeholder, onInputFunc, onClickInputFunc, onClickBtnFunc, childComponent,
}: IProps) => (
  <div className="order-location__input-block">
    <span className="order-location__input-block__title">{title}</span>
    <div>
      <input
        className="order-location__input-block__input"
        type="text"
        value={fieldValue}
        placeholder={placeholder}
        onInput={onInputFunc}
        onClick={onClickInputFunc}
      />
      <button
        type="button"
        className="order-location__input-block__btn city-button"
        onClick={onClickBtnFunc}
      >
        <img
          className={`city-button__icon ${fieldValue !== EMPTY_STRING && 'city-button__icon_active'}`}
          src={deleteIcon}
          alt="Delete"
        />
      </button>
    </div>
    {childComponent}
  </div>
);

OrderInputField.defaultProps = {
  onInputFunc: (e: BaseSyntheticEvent) => e,
  onClickBtnFunc: EMPTY_FUNC,
  onClickInputFunc: EMPTY_FUNC,
  childComponent: <div />,
};

export default OrderInputField;
