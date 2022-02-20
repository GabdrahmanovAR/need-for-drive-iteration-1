import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { EMPTY_STRING } from '../../constants/common';

interface IProps {
  text: string;
  customClass?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  link?: string;
}

const Button = ({
  text, customClass, isDisabled, isLoading, link,
}: IProps) => {
  const path = useNavigate();

  const handleRouteChange = () => {
    if (link !== EMPTY_STRING) path(link || EMPTY_STRING);
  };

  return (
    <button
      type="button"
      className={`button 
      ${(customClass !== EMPTY_STRING && !isDisabled) && customClass} 
      ${isDisabled && 'button_disabled'}`}
      disabled={isDisabled}
      onClick={handleRouteChange}
    >
      {isLoading
        ? <Spin indicator={<LoadingOutlined spin />} />
        : <span className="button__text">{text}</span>}
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
