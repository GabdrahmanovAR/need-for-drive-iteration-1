import React from 'react';
import './Button.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { EMPTY_STRING } from '../../constants/common';

interface IProps {
  text: string;
  customClass?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  text, customClass, isDisabled, isLoading,
}: IProps) => (
  <button
    type="button"
    className={`button 
      ${(customClass !== EMPTY_STRING && !isDisabled) && customClass} 
      ${isDisabled && 'button_disabled'}`}
    disabled={isDisabled}
  >
    {isLoading
      ? <Spin indicator={<LoadingOutlined spin />} />
      : <span className="button__text">{text}</span>}
  </button>
);

Button.defaultProps = {
  customClass: EMPTY_STRING,
  isDisabled: false,
  isLoading: false,
};

export default Button;
