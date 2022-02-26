import React, { BaseSyntheticEvent } from 'react';
import { EMPTY_FUNC, EMPTY_STRING, EmptyFuncType } from '../../constants/common';
import deleteIcon from '../../assets/icons/delete-city.svg';
import './InputField.scss';

interface IProps {
  title: string,
  fieldValue: string,
  placeholder: string,
  onInputFunc?: (e: BaseSyntheticEvent) => void,
  onClickInputFunc?: EmptyFuncType,
  onClickBtnFunc?: EmptyFuncType,
  childComponent?: React.ReactNode,
}

const InputField = ({
  title, fieldValue, placeholder, onInputFunc, onClickInputFunc, onClickBtnFunc, childComponent,
}: IProps) => (
  <div className="input-field">
    <span className="input-field__title">{title}</span>
    <div>
      <div>
        <input
          className="input-field__input"
          type="text"
          value={fieldValue}
          placeholder={placeholder}
          onInput={onInputFunc}
          onClick={onClickInputFunc}
        />
        <button
          type="button"
          className="input-field__close-btn"
          onClick={onClickBtnFunc}
        >
          <img
            className={`
            input-field__close-btn__icon 
            ${fieldValue !== EMPTY_STRING && 'input-field__close-btn__icon_active'}`}
            src={deleteIcon}
            alt="Delete"
          />
        </button>
      </div>
      {childComponent}
    </div>
  </div>
);

InputField.defaultProps = {
  onInputFunc: (e: BaseSyntheticEvent) => e,
  onClickBtnFunc: EMPTY_FUNC,
  onClickInputFunc: EMPTY_FUNC,
  childComponent: <div />,
};

export default InputField;
