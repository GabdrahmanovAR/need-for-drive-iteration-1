import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { EMPTY_STRING } from '../../constants/common';

interface IButtonProps {
  text: string;
  customClass?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  link?: string;
}

const Button: FC<IButtonProps> = ({
  text, customClass, isDisabled, isLoading, link,
}) => {
  const path = useNavigate();

  const handleRouteChange = () => {
    if (link !== EMPTY_STRING) path(link || EMPTY_STRING);
  };

  return (
    <button
      type="button"
      className={`${!isDisabled ? 'button' : 'button_disabled'} 
      ${(customClass !== EMPTY_STRING && !isDisabled) && customClass}`}
      disabled={isDisabled}
      onClick={handleRouteChange}
    >
      {isLoading
        ? <Spin indicator={<LoadingOutlined spin />} />
        : <span className={`${!isDisabled ? 'button__text' : 'button__text_disabled'}`}>{text}</span>}
    </button>
  );
};

Button.defaultProps = {
  customClass: EMPTY_STRING,
  isDisabled: false,
  isLoading: false,
  link: EMPTY_STRING,
};

export default Button;
