import React from 'react';
import './OrderInfo.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '../../button/Button';
import {
  ADVANCED_URL_PATH, EMPTY_STRING, ORDER_LOCATION_URL_PATH, ORDER_STATUS_URL_PATH, RESULT_URL_PATH,
} from '../../../constants/common';
import { ButtonText } from '../../../utils/ButtonText';
import { NextTabUrl } from '../../../utils/NextTabUrl';
import { ButtonState } from '../../../utils/ButtonState';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';
import { CalculateRentalDuration } from '../../../utils/CalculateRentalDuration';
import { orderStatusSelector } from '../../../selectors/orderStatusSelector';

const OrderInfo = () => {
  const { location, car } = useSelector(orderInfoSelector);
  const orderStatusState = useSelector(orderStatusSelector);
  const locationPath = useLocation();

  const {
    cityName,
    markerName,
  } = !locationPath.pathname.includes(ORDER_STATUS_URL_PATH) ? location
    : {
      cityName: orderStatusState.statusInfo.cityName,
      markerName: orderStatusState.statusInfo.pointName,
    };

  const {
    name,
    currentColor,
    rentalDuration,
    tariff,
    babyChair,
    fullTank,
    rightHandDrive,
    totalCost,
    minPrice,
    maxPrice,
  } = !locationPath.pathname.includes(ORDER_STATUS_URL_PATH) ? car
    : {
      name: orderStatusState.statusInfo.car.name,
      currentColor: orderStatusState.statusInfo.color,
      rentalDuration: {
        from: orderStatusState.statusInfo.dateFrom,
        to: orderStatusState.statusInfo.dateTo,
      },
      tariff: orderStatusState.statusInfo.rate,
      babyChair: orderStatusState.statusInfo.isNeedChildChair,
      fullTank: orderStatusState.statusInfo.isFullTank,
      rightHandDrive: orderStatusState.statusInfo.isRightWheel,
      totalCost: orderStatusState.statusInfo.price,
      minPrice: EMPTY_STRING,
      maxPrice: EMPTY_STRING,
    };

  const advancedInfoElement = (title: string, value: string) => (
    <div className="multiple-info__element">
      <span>{title}</span>
      <span className="order-info__details__dots" />
      <div className="order-info__details__info">{value}</div>
    </div>
  );

  return (
    <div className="order-info">
      <header className="order-info__title"><h3>?????? ??????????:</h3></header>
      {/* ???????????????????? ?????????????? - ???????????????????????????? */}
      <section className="order-info__details">
        <span className="order-info__details__title">?????????? ????????????</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__address">
          <div>
            <span>{cityName !== EMPTY_STRING ? cityName : '???? ????????????'}</span>
            {markerName !== EMPTY_STRING && <span>,</span>}
          </div>
          <span className={`
          ${markerName === EMPTY_STRING && 'order-info__details__address_disable'}`}
          >
            {markerName}
          </span>
        </div>
      </section>
      {/* ???????????????????? ?????????????? - ???????????? */}
      <section className={`${(locationPath.pathname !== ORDER_LOCATION_URL_PATH)
        ? 'order-info__details'
        : 'order-info__details_disable'}`}
      >
        <span>????????????</span>
        <span className="order-info__details__dots" />
        <div className="order-info__details__info">
          {name === EMPTY_STRING
            ? '???????????????? ????????'
            : name}
        </div>
      </section>
      {/* ???????????????????? ?????????????? - ?????????????????????????? */}
      <section className={`${
        locationPath.pathname === ADVANCED_URL_PATH
        || locationPath.pathname === RESULT_URL_PATH
        || locationPath.pathname.includes(ORDER_STATUS_URL_PATH)
          ? 'order-info__details'
          : 'order-info__details_disable'}`}
      >
        <div className="order-info__details__multiple-info multiple-info">
          {advancedInfoElement('????????', currentColor)}
          {advancedInfoElement(
            '???????????????????????? ????????????',
            CalculateRentalDuration(rentalDuration.from.toString(), rentalDuration.to.toString()),
          )}
          {advancedInfoElement('??????????', tariff.split(',')[0])}
          {advancedInfoElement('???????????? ??????', fullTank ? '????' : '???? ??????????????')}
          {advancedInfoElement('?????????????? ????????????', babyChair ? '????' : '???? ??????????????')}
          {advancedInfoElement('???????????? ????????', rightHandDrive ? '????' : '???? ??????????????')}
        </div>
      </section>
      {/* ???????????????????? ???????????????? ?????? */}
      <section className="order-info__price">
        <span><strong>????????: </strong></span>
        {totalCost === 0 && (locationPath.pathname !== RESULT_URL_PATH || locationPath.pathname.includes(ORDER_STATUS_URL_PATH))
          ? (
            <span>
              {(minPrice && maxPrice) === EMPTY_STRING
                ? '???????????????????? ???? ????????????'
                : `???? ${minPrice} ???? ${maxPrice} ???`}
            </span>
          )
          : (
            <span>{`${totalCost}???`}</span>
          )}
      </section>
      <Button
        text={ButtonText(locationPath.pathname, orderStatusState.statusInfo.id)}
        isDisabled={ButtonState(locationPath.pathname, { location, car })}
        link={NextTabUrl(locationPath.pathname)}
        customClass={locationPath.pathname.includes(ORDER_STATUS_URL_PATH) ? 'order-status-btn' : ''}
      />
    </div>
  );
};

export default OrderInfo;
