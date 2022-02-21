import React, { BaseSyntheticEvent, useState } from 'react';
import { listOfCities, EMPTY_STRING } from '../../../constants/common';
import deleteIcon from '../../../assets/icons/delete-city.svg';
import './OrderLocation.scss';

const OrderLocation = () => {
  const [city, setCity] = useState(EMPTY_STRING);
  const [navActive, setNavActive] = useState(false);
  const cyrillicRegexp = new RegExp(/^[А-я]*$/);

  const handleCityInput = (event: any) => {
    if (event.target.value !== EMPTY_STRING && cyrillicRegexp.exec(event.target.value)) {
      setCity(event.target.value);
      setNavActive(true);
    } else {
      setCity(EMPTY_STRING);
      setNavActive(false);
    }
  };

  const handleListItemClick = (event: BaseSyntheticEvent) => {
    setCity(event.target.innerText);
    setNavActive(false);
  };

  const handleCityBtnClick = () => {
    setCity(EMPTY_STRING);
    setNavActive(false);
  };

  return (
    <div className="order-location">
      <div>
        <span className="order-location__input-title">Город</span>
        <input
          className="order-location__input"
          type="text"
          value={city}
          placeholder="Начните вводить пункт..."
          onInput={handleCityInput}
        />
        <button
          type="button"
          className="order-location__input-btn city-button"
          onClick={handleCityBtnClick}
        >
          <img
            className={`city-button__icon ${city !== EMPTY_STRING && 'city-button__icon_active'}`}
            src={deleteIcon}
            alt="Delete"
          />
        </button>
        <nav className={`order-location__cities-list ${navActive && 'order-location__cities-list_active'}`}>
          <ul>
            {listOfCities.map((someCity) => {
              if (someCity.slice(0, city.length) === city) {
                return (
                  <li
                    className="list-item"
                    onClick={handleListItemClick}
                    role="presentation"
                  >
                    {someCity}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OrderLocation;
