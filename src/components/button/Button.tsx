import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.scss';
import { useDispatch } from 'react-redux';
import { CONFIRM_TAB, EMPTY_STRING } from '../../constants/common';
import Spinner from '../Spinner/Spinner';
import { changeOrderConfirmAction } from '../../redux/actions/OrderConfirmAction';

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
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (link !== EMPTY_STRING && link === CONFIRM_TAB) {
      dispatch(changeOrderConfirmAction(true));
      document.body.style.overflow = 'hidden';
    } else if (link !== EMPTY_STRING) path(link || EMPTY_STRING);
  };

  return (
    <button
      type="button"
      className={`${!isDisabled ? 'button' : 'button_disabled'} 
      ${(customClass !== EMPTY_STRING && !isDisabled) && customClass}`}
      disabled={isDisabled}
      onClick={handleButtonClick}
    >
      {isLoading
        ? <Spinner />
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
